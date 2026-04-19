"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  AlertCircle,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  HelpCircle,
  LayoutGrid,
  Mail,
  MessageSquare,
  Layers3,
  Lock,
  Phone,
  Rocket,
  Search,
  Settings2,
  WandSparkles,
  X
} from "lucide-react";
import {
  buildInitialCardStates,
  buildInitialConfigStore,
  buildInitialToggleStore,
  buildPromptDefaults,
  dashboardUpdates,
  deriveLaunchReady,
  getAccessibleCards,
  getCardById,
  getDashboardPeopleForRole,
  getPeopleViewList,
  getRoleById,
  getSubfeature,
  hotSheetItems,
  isCardRequiredForRole,
  libraryCardDefinitions,
  listingInsights,
  roleDefinitions,
  roleSelectionCopy
} from "./data";
import type {
  CardState,
  CardToggleStore,
  DashboardPerson,
  LaunchedShellView,
  LeadViewId,
  LibraryCardDefinition,
  LibraryCardId,
  OnboardingSnapshot,
  PromptValues,
  RoleDefinition,
  RoleId,
  SubfeatureDefinition
} from "./types";
import LoftyLaunchedShell from "./components/LoftyLaunchedShell";
import {
  getProfileOption,
  MessagesWorkspace,
  type NegotiationShellProfile,
  NegotiationWorkspace,
  ProfileSwitchModal,
  useNegotiationFeatureState
} from "./components/NegotiationFeatureViews";
import { DEMO_LISTING_ID } from "@/lib/constants";

const STORAGE_KEY = "lofty-role-aware-setup-builder-v4";

const emptySnapshot: OnboardingSnapshot = {
  selectedRole: null,
  activeCardId: null,
  cardStates: {},
  subfeatureToggles: {},
  subfeatureConfigs: {},
  phase: "role-selection",
  templatePreset: null,
  pendingPrompt: null,
  launchReady: false
};

function normalizeSnapshot(snapshot: OnboardingSnapshot): OnboardingSnapshot {
  return {
    ...snapshot,
    launchReady: deriveLaunchReady(snapshot)
  };
}

function loadSnapshot(): OnboardingSnapshot {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return emptySnapshot;
    }
    return normalizeSnapshot({ ...emptySnapshot, ...JSON.parse(raw) });
  } catch {
    return emptySnapshot;
  }
}

function getCardReadiness(snapshot: OnboardingSnapshot, card: LibraryCardDefinition, roleId: RoleId) {
  const toggles = snapshot.subfeatureToggles[card.id] ?? {};
  const configs = snapshot.subfeatureConfigs[card.id] ?? {};

  const enabledAllowedSubfeatures = card.subfeatures.filter(
    (item) => item.allowedRoles.includes(roleId) && toggles[item.id]
  );

  const missingRequiredSubfeatures = card.subfeatures.filter(
    (item) => item.allowedRoles.includes(roleId) && item.requiredFor.includes(roleId) && !toggles[item.id]
  );

  const incompleteEnabledSubfeatures = enabledAllowedSubfeatures.filter((item) =>
    item.promptFields.some((field) => {
      if (!field.required) {
        return false;
      }
      const value = configs[item.id]?.[field.id];
      if (typeof value === "boolean") {
        return value !== true;
      }
      return String(value ?? "").trim() === "";
    })
  );

  const hasAnyEnabled = enabledAllowedSubfeatures.length > 0;
  const ready =
    hasAnyEnabled && missingRequiredSubfeatures.length === 0 && incompleteEnabledSubfeatures.length === 0;

  return {
    ready,
    hasAnyEnabled,
    enabledAllowedSubfeatures,
    missingRequiredSubfeatures,
    incompleteEnabledSubfeatures
  };
}

function App() {
  const [snapshot, setSnapshot] = useState<OnboardingSnapshot>(emptySnapshot);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<LibraryCardId | null>(null);
  const [selectedSubfeatureId, setSelectedSubfeatureId] = useState<string | null>(null);
  const [draggingCardId, setDraggingCardId] = useState<LibraryCardId | null>(null);
  const [cardQuery, setCardQuery] = useState("");
  const [mobileLibraryOpen, setMobileLibraryOpen] = useState(false);
  const [showLaunchConfirm, setShowLaunchConfirm] = useState(false);
  const [promptValues, setPromptValues] = useState<PromptValues>({});

  useEffect(() => {
    setSnapshot(emptySnapshot);
    window.localStorage.removeItem(STORAGE_KEY);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  }, [hasHydrated, snapshot]);

  const selectedRole = useMemo(
    () => (snapshot.selectedRole ? getRoleById(snapshot.selectedRole) : null),
    [snapshot.selectedRole]
  );

  const accessibleCards = useMemo(
    () => (snapshot.selectedRole ? getAccessibleCards(snapshot.selectedRole) : []),
    [snapshot.selectedRole]
  );

  const filteredCards = useMemo(() => {
    const query = cardQuery.trim().toLowerCase();
    if (!query) {
      return libraryCardDefinitions;
    }
    return libraryCardDefinitions.filter((card) => {
      const haystack = `${card.label} ${card.description} ${card.subfeatures.map((item) => item.name).join(" ")}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [cardQuery]);

  const activeCard = snapshot.activeCardId ? getCardById(snapshot.activeCardId) : null;

  const requiredCardsRemaining = useMemo(() => {
    if (!snapshot.selectedRole) {
      return [];
    }
    return accessibleCards.filter(
      (card) => card.requiredFor.includes(snapshot.selectedRole!) && snapshot.cardStates[card.id] !== "built"
    );
  }, [accessibleCards, snapshot.cardStates, snapshot.selectedRole]);

  const optionalCardsRemaining = useMemo(() => {
    if (!snapshot.selectedRole) {
      return [];
    }
    return accessibleCards.filter(
      (card) => !card.requiredFor.includes(snapshot.selectedRole!) && snapshot.cardStates[card.id] !== "built"
    );
  }, [accessibleCards, snapshot.cardStates, snapshot.selectedRole]);

  const launchProgress = selectedRole
    ? Math.round(
        (accessibleCards.filter((card) => snapshot.cardStates[card.id] === "built").length /
          Math.max(accessibleCards.length, 1)) *
          100
      )
    : 0;

  const pendingSubfeature =
    snapshot.pendingPrompt ? getSubfeature(snapshot.pendingPrompt.cardId, snapshot.pendingPrompt.subfeatureId) : null;

  useEffect(() => {
    if (!snapshot.pendingPrompt) {
      setPromptValues({});
      return;
    }
    const existingValues =
      snapshot.subfeatureConfigs[snapshot.pendingPrompt.cardId]?.[snapshot.pendingPrompt.subfeatureId] ?? {};
    setPromptValues({
      ...buildPromptDefaults(snapshot.pendingPrompt),
      ...existingValues
    });
  }, [snapshot.pendingPrompt, snapshot.subfeatureConfigs]);

  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 8 } }), useSensor(TouchSensor));

  function updateSnapshot(updater: (current: OnboardingSnapshot) => OnboardingSnapshot) {
    setSnapshot((current) => normalizeSnapshot(updater(current)));
  }

  function handleRoleSelect(role: RoleDefinition) {
    updateSnapshot(() => ({
      ...emptySnapshot,
      selectedRole: role.id,
      cardStates: buildInitialCardStates(),
      subfeatureToggles: buildInitialToggleStore(role.id),
      subfeatureConfigs: buildInitialConfigStore(role.id),
      phase: "builder"
    }));
    setSelectedCardId(null);
    setSelectedSubfeatureId(null);
    setCardQuery("");
    setMobileLibraryOpen(false);
  }

  function activateCard(cardId: LibraryCardId) {
    if (!snapshot.selectedRole || !getCardById(cardId).allowedRoles.includes(snapshot.selectedRole)) {
      return;
    }
    updateSnapshot((current) => ({ ...current, activeCardId: cardId }));
    setSelectedCardId(cardId);
    setSelectedSubfeatureId(null);
    setMobileLibraryOpen(false);
  }

  function updateCardState(cardId: LibraryCardId, state: CardState) {
    updateSnapshot((current) => ({
      ...current,
      cardStates: {
        ...current.cardStates,
        [cardId]: state
      }
    }));
  }

  function handleToggleSubfeature(cardId: LibraryCardId, subfeature: SubfeatureDefinition, nextValue: boolean) {
    if (!snapshot.selectedRole || !subfeature.allowedRoles.includes(snapshot.selectedRole)) {
      return;
    }

    if (nextValue) {
      updateSnapshot((current) => ({
        ...current,
        pendingPrompt: { cardId, subfeatureId: subfeature.id }
      }));
      setSelectedCardId(cardId);
      setSelectedSubfeatureId(subfeature.id);
      return;
    }

    updateSnapshot((current) => ({
      ...current,
      subfeatureToggles: {
        ...current.subfeatureToggles,
        [cardId]: {
          ...(current.subfeatureToggles[cardId] ?? {}),
          [subfeature.id]: false
        }
      },
      cardStates: {
        ...current.cardStates,
        [cardId]: current.cardStates[cardId] === "built" ? "draft" : current.cardStates[cardId] ?? "draft"
      }
    }));
  }

  function commitPrompt(nextValues: PromptValues) {
    if (!snapshot.pendingPrompt || !pendingSubfeature) {
      return;
    }

    const missingRequiredFields = pendingSubfeature.promptFields.filter((field) => {
      if (!field.required) {
        return false;
      }
      const value = nextValues[field.id];
      if (typeof value === "boolean") {
        return value !== true;
      }
      return String(value ?? "").trim() === "";
    });

    if (missingRequiredFields.length > 0) {
      return;
    }

    const { cardId, subfeatureId } = snapshot.pendingPrompt;
    updateSnapshot((current) => ({
      ...current,
      subfeatureToggles: {
        ...current.subfeatureToggles,
        [cardId]: {
          ...(current.subfeatureToggles[cardId] ?? {}),
          [subfeatureId]: true
        }
      },
      subfeatureConfigs: {
        ...current.subfeatureConfigs,
        [cardId]: {
          ...(current.subfeatureConfigs[cardId] ?? {}),
          [subfeatureId]: nextValues
        }
      },
      cardStates: {
        ...current.cardStates,
        [cardId]: current.cardStates[cardId] === "built" ? "draft" : "draft"
      },
      pendingPrompt: null
    }));
  }

  function savePrompt() {
    commitPrompt(promptValues);
  }

  function quickSavePrompt(fieldId: string, value: string | boolean) {
    commitPrompt({
      ...promptValues,
      [fieldId]: value
    });
  }

  function closePrompt() {
    updateSnapshot((current) => ({
      ...current,
      pendingPrompt: null
    }));
  }

  function buildActiveCard() {
    if (!snapshot.selectedRole || !activeCard) {
      return;
    }
    const readiness = getCardReadiness(snapshot, activeCard, snapshot.selectedRole);
    if (!readiness.ready) {
      return;
    }
    updateCardState(activeCard.id, "built");
  }

  function triggerLaunch() {
    if (!snapshot.launchReady) {
      return;
    }
    if (optionalCardsRemaining.length > 0) {
      setShowLaunchConfirm(true);
      return;
    }
    updateSnapshot((current) => ({ ...current, phase: "launch-success" }));
  }

  function confirmLaunch() {
    updateSnapshot((current) => ({ ...current, phase: "launch-success" }));
    setShowLaunchConfirm(false);
  }

  function resetBuilder() {
    setSnapshot(emptySnapshot);
    setSelectedCardId(null);
    setSelectedSubfeatureId(null);
    setCardQuery("");
    setMobileLibraryOpen(false);
    setShowLaunchConfirm(false);
    setPromptValues({});
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function handleDragStart(event: DragStartEvent) {
    const activeId = String(event.active.id);
    if (activeId.startsWith("library:")) {
      setDraggingCardId(activeId.replace("library:", "") as LibraryCardId);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    setDraggingCardId(null);
    const activeId = String(event.active.id);
    const overId = event.over ? String(event.over.id) : null;
    if (activeId.startsWith("library:") && overId === "workspace") {
      activateCard(activeId.replace("library:", "") as LibraryCardId);
    }
  }

  if (!selectedRole || snapshot.phase === "role-selection") {
    return (
      <div className="app-shell app-shell--selection">
        <main className="page-shell page-shell--selection">
          <RoleSelectionScreen onContinue={handleRoleSelect} />
        </main>
      </div>
    );
  }

  if (snapshot.phase === "launch-success") {
    return (
      <div className="app-shell app-shell--launched">
        <main className="page-shell page-shell--launched">
          <LaunchSuccessScreen
            role={selectedRole}
            builtCards={accessibleCards.filter((card) => snapshot.cardStates[card.id] === "built")}
            optionalCardsRemaining={optionalCardsRemaining}
            snapshot={snapshot}
            onReset={resetBuilder}
          />
        </main>
      </div>
    );
  }

  const activeReadiness =
    selectedRole && activeCard ? getCardReadiness(snapshot, activeCard, selectedRole.id) : null;

  const libraryPanel = (
    <LibraryPanel
      cards={filteredCards}
      selectedRoleId={selectedRole.id}
      snapshot={snapshot}
      query={cardQuery}
      onQueryChange={setCardQuery}
      onSelectCard={activateCard}
      selectedCardId={selectedCardId}
    />
  );

  return (
    <div className="app-shell">
      <main className="page-shell">
        <div className="builder-shell">
          <header className="builder-header">
            <div className="builder-header-title">
              <BrandMark className="builder-brand-mark" />
              <h1>Build your platform</h1>
            </div>
            <div className="builder-header-actions">
              <button className="secondary-button" onClick={resetBuilder}>
                Back to role selection
              </button>
            </div>
          </header>

          <section className="overview-strip">
            <div className="overview-card overview-card--summary">
              <span>{selectedRole.name}</span>
              <strong>{launchProgress}% launch progress</strong>
              <p>
                {accessibleCards.filter((card) => snapshot.cardStates[card.id] === "built").length} built tabs,{" "}
                {requiredCardsRemaining.length} required tabs still open.
              </p>
            </div>
          </section>

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="builder-layout builder-layout--single">
              <aside className="panel left-panel desktop-only">{libraryPanel}</aside>

              <section className="panel center-panel">
                <div className="panel-header">
                  <div>
                    <h2>Active workspace</h2>
                  </div>
                </div>

                <WorkspaceDropZone hasActiveCard={Boolean(activeCard)}>
                  {activeCard && selectedRole && activeReadiness ? (
                    <ActiveCard
                      card={activeCard}
                      roleId={selectedRole.id}
                      status={snapshot.cardStates[activeCard.id] ?? "not-started"}
                      toggles={snapshot.subfeatureToggles[activeCard.id] ?? {}}
                      configs={snapshot.subfeatureConfigs[activeCard.id] ?? {}}
                      readiness={activeReadiness}
                      pendingPrompt={snapshot.pendingPrompt}
                      promptValues={promptValues}
                      selectedSubfeatureId={selectedSubfeatureId}
                      onSelectSubfeature={(subfeatureId) => {
                        setSelectedCardId(activeCard.id);
                        setSelectedSubfeatureId(subfeatureId);
                      }}
                      onToggleSubfeature={(subfeature, nextValue) => handleToggleSubfeature(activeCard.id, subfeature, nextValue)}
                      onPromptChange={(fieldId, value) =>
                        setPromptValues((current) => ({
                          ...current,
                          [fieldId]: value
                        }))
                      }
                      onCancelPrompt={closePrompt}
                      onSavePrompt={savePrompt}
                      onQuickSavePrompt={quickSavePrompt}
                      onBuild={buildActiveCard}
                    />
                  ) : (
                    <EmptyWorkspace />
                  )}
                </WorkspaceDropZone>
              </section>

            </div>

            <DragOverlay>{draggingCardId ? <DragPreview card={getCardById(draggingCardId)} /> : null}</DragOverlay>
          </DndContext>

          <section className="panel launch-summary-panel">
            <LaunchSummary
              snapshot={snapshot}
              requiredCardsRemaining={requiredCardsRemaining}
              optionalCardsRemaining={optionalCardsRemaining}
              onLaunch={triggerLaunch}
            />
          </section>

          {mobileLibraryOpen ? (
            <div className="mobile-drawer-backdrop" onClick={() => setMobileLibraryOpen(false)}>
              <div className="mobile-drawer" onClick={(event) => event.stopPropagation()}>
                <div className="mobile-drawer-header">
                  <div>
                    <h3>Library Tabs</h3>
                    <p>Tap a tab to preview it or open it in the workspace.</p>
                  </div>
                  <button className="icon-button" onClick={() => setMobileLibraryOpen(false)}>
                    <X size={16} />
                  </button>
                </div>
                {libraryPanel}
              </div>
            </div>
          ) : null}

          {showLaunchConfirm ? (
            <ModalFrame
              title="Launch with optional tabs still open?"
              subtitle="You have built the required tabs. Optional tabs can still be added later."
              onClose={() => setShowLaunchConfirm(false)}
            >
              <div className="confirm-stack">
                <div className="confirm-card">
                  <h4>Still optional</h4>
                  <div className="chip-wrap">
                    {optionalCardsRemaining.map((card) => (
                      <span key={card.id} className="mini-chip">
                        {card.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="panel-button-row">
                  <button className="secondary-button" onClick={() => setShowLaunchConfirm(false)}>
                    Keep building
                  </button>
                  <button className="primary-button" onClick={confirmLaunch}>
                    <Rocket size={16} />
                    Launch anyway
                  </button>
                </div>
              </div>
            </ModalFrame>
          ) : null}
        </div>
      </main>
    </div>
  );
}

function RoleSelectionScreen({ onContinue }: { onContinue: (role: RoleDefinition) => void }) {
  const [draftRoleId, setDraftRoleId] = useState<RoleId | null>(null);
  const draftRole = draftRoleId ? getRoleById(draftRoleId) : null;

  return (
    <section className="role-selection-page">
      <div className="setup-window">
        <div className="setup-window-body">
          <div className="selection-heading">
            <h1>Choose your role</h1>
          </div>

          <div className="role-grid role-grid--selection">
            {roleDefinitions.map((role) => {
              const Icon = role.icon;
              const selected = draftRoleId === role.id;
              return (
                <button
                  key={role.id}
                  className={`role-choice-card ${selected ? "role-choice-card--selected" : ""}`}
                  onClick={() => setDraftRoleId(role.id)}
                >
                  <div className="role-icon role-icon--selection">
                    <Icon size={28} strokeWidth={2.1} />
                  </div>
                  <div className="role-card-copy role-card-copy--selection">
                    <div className="role-card-header">
                      <strong>{role.name}</strong>
                    </div>
                    <p>{roleSelectionCopy[role.id]}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            className="selection-continue"
            disabled={!draftRole}
            onClick={() => {
              if (draftRole) {
                onContinue(draftRole);
              }
            }}
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`brand-mark ${className}`.trim()}>
      <img className="brand-logo-image" src="/image.png" alt="Lofty" />
    </div>
  );
}

function LibraryPanel({
  cards,
  selectedRoleId,
  snapshot,
  query,
  onQueryChange,
  onSelectCard,
  selectedCardId
}: {
  cards: LibraryCardDefinition[];
  selectedRoleId: RoleId;
  snapshot: OnboardingSnapshot;
  query: string;
  onQueryChange: (value: string) => void;
  onSelectCard: (cardId: LibraryCardId) => void;
  selectedCardId: LibraryCardId | null;
}) {
  return (
    <div className="layer-library">
      <div className="panel-header">
        <div>
          <h2>Layer Library</h2>
        </div>
      </div>

      <div className="library-controls">
        <label className="search-field">
          <Search size={15} />
          <input
            type="text"
            value={query}
            placeholder="Search tabs or subfeatures"
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
      </div>

      <div className="library-stack">
        {cards.map((card) => (
          <LibraryCard
            key={card.id}
            card={card}
            roleId={selectedRoleId}
            status={snapshot.cardStates[card.id] ?? "not-started"}
            selected={selectedCardId === card.id}
            onSelect={() => onSelectCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

function LibraryCard({
  card,
  roleId,
  status,
  selected,
  onSelect
}: {
  card: LibraryCardDefinition;
  roleId: RoleId;
  status: CardState;
  selected: boolean;
  onSelect: () => void;
}) {
  const available = card.allowedRoles.includes(roleId);
  const Icon = card.icon;
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `library:${card.id}`,
    disabled: !available
  });
  const draggableProps = available ? { ...attributes, ...listeners } : {};

  const statusLabel =
    status === "built" ? "Built" : status === "draft" ? "Draft" : status === "not-started" ? "Not started" : status;

  return (
    <div
      ref={setNodeRef}
      className={`library-layer-card ${selected ? "library-layer-card--selected" : ""} ${!available ? "library-layer-card--locked" : ""} ${available ? "library-layer-card--draggable" : ""}`}
      style={{ transform: CSS.Translate.toString(transform), opacity: isDragging ? 0.6 : 1 }}
      {...draggableProps}
    >
      <div className="library-tab-bar">
        <button className="library-layer-main" onClick={onSelect}>
          <div className="library-card-title">
            <span className="library-card-icon">
              <Icon size={16} />
            </span>
            <strong>{card.label}</strong>
          </div>
        </button>

        <div className="library-tab-actions">
          {!available ? (
            <button className="icon-button" onClick={onSelect} aria-label={`Why ${card.label} is locked`}>
              <Lock size={14} />
            </button>
          ) : null}
        </div>
      </div>

      <div className="library-layer-meta">
        <span className={`mini-badge ${isCardRequiredForRole(card, roleId) ? "mini-badge--required" : ""}`}>
          {isCardRequiredForRole(card, roleId) ? "Required" : "Optional"}
        </span>
        <span className={`mini-badge ${status === "built" ? "mini-badge--built" : ""}`}>{statusLabel}</span>
        {!available ? <span className="mini-badge mini-badge--locked">Locked</span> : null}
      </div>
    </div>
  );
}

function WorkspaceDropZone({ hasActiveCard, children }: { hasActiveCard: boolean; children: ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: "workspace" });
  return (
    <div
      ref={setNodeRef}
      className={`workspace-dropzone workspace-dropzone--single ${isOver ? "workspace-dropzone--over" : ""} ${hasActiveCard ? "workspace-dropzone--filled" : "workspace-dropzone--empty"}`}
    >
      {children}
    </div>
  );
}

function EmptyWorkspace() {
  return (
    <div className="empty-workspace">
      <Layers3 size={28} />
      <h3>Drag a tab here to start</h3>
      <p>Choose a tab from the library. Your website will be built one tab at a time.</p>
    </div>
  );
}

function getConfigOptionIcon(option: string) {
  const normalized = option.toLowerCase();

  if (
    normalized.includes("gmail") ||
    normalized.includes("email") ||
    normalized.includes("outlook") ||
    normalized.includes("office") ||
    normalized.includes("smtp") ||
    normalized.includes("imap")
  ) {
    return <Mail size={18} />;
  }

  return <Circle size={10} fill="currentColor" strokeWidth={0} />;
}

function ActiveCard({
  card,
  roleId,
  status,
  toggles,
  configs,
  readiness,
  pendingPrompt,
  promptValues,
  selectedSubfeatureId,
  onSelectSubfeature,
  onToggleSubfeature,
  onPromptChange,
  onCancelPrompt,
  onSavePrompt,
  onQuickSavePrompt,
  onBuild
}: {
  card: LibraryCardDefinition;
  roleId: RoleId;
  status: CardState;
  toggles: CardToggleStore;
  configs: Record<string, PromptValues>;
  readiness: ReturnType<typeof getCardReadiness>;
  pendingPrompt: OnboardingSnapshot["pendingPrompt"];
  promptValues: PromptValues;
  selectedSubfeatureId: string | null;
  onSelectSubfeature: (subfeatureId: string) => void;
  onToggleSubfeature: (subfeature: SubfeatureDefinition, nextValue: boolean) => void;
  onPromptChange: (fieldId: string, value: string | boolean) => void;
  onCancelPrompt: () => void;
  onSavePrompt: () => void;
  onQuickSavePrompt: (fieldId: string, value: string | boolean) => void;
  onBuild: () => void;
}) {
  const Icon = card.icon;

  return (
    <article className="active-card">
      <header className="active-tab-site-header">
        <div className="active-tab-site-brand">
          <BrandMark className="active-tab-brand-mark" />
          <div className="active-tab-site-title">
            <span className="active-tab-site-label">Active tab</span>
            <div className="active-card-title-row">
              <span className="active-card-icon">
                <Icon size={18} />
              </span>
              <h2>{card.label}</h2>
            </div>
          </div>
        </div>
        <div className="active-card-header-meta">
          <div className="chip-wrap">
            <span className={`mini-badge ${status === "built" ? "mini-badge--built" : ""}`}>
              {status === "built" ? "Built" : status === "draft" ? "Draft" : "Not started"}
            </span>
            <span className={`mini-badge ${isCardRequiredForRole(card, roleId) ? "mini-badge--required" : ""}`}>
              {isCardRequiredForRole(card, roleId) ? "Required" : "Optional"}
            </span>
          </div>
          <div className="chip-wrap">
            <span className="mini-badge">Enabled {readiness.enabledAllowedSubfeatures.length}</span>
            <span className="mini-badge">Left {readiness.missingRequiredSubfeatures.length}</span>
            <span className="mini-badge">Incomplete {readiness.incompleteEnabledSubfeatures.length}</span>
          </div>
        </div>
      </header>

      <div className="active-card-layout">
        <div className="active-card-subfeatures">
          <div className="section-label-row">
            <div>
              <h3>Features</h3>
            </div>
            <span>{readiness.enabledAllowedSubfeatures.length} enabled</span>
          </div>
          <div className="feature-list">
            {card.subfeatures.map((subfeature) => {
              const allowed = subfeature.allowedRoles.includes(roleId);
              const enabled = toggles[subfeature.id] ?? false;
              const configuring =
                pendingPrompt?.cardId === card.id && pendingPrompt.subfeatureId === subfeature.id;
              const canConfigure = allowed && subfeature.promptFields.length > 0;
              const minimalConfigField =
                subfeature.promptFields.length === 1 && subfeature.promptFields[0]?.type === "select"
                  ? subfeature.promptFields[0]
                  : null;
              return (
                <div
                  key={subfeature.id}
                  className={`subfeature-row ${selectedSubfeatureId === subfeature.id ? "subfeature-row--selected" : ""} ${!allowed ? "subfeature-row--locked" : ""} ${configuring ? "subfeature-row--configuring" : ""}`}
                  onClick={() => onSelectSubfeature(subfeature.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelectSubfeature(subfeature.id);
                    }
                  }}
                >
                  <div className="subfeature-row-copy">
                    <div className="feature-title-row">
                      <strong>{subfeature.name}</strong>
                      <div className="chip-wrap">
                        {subfeature.requiredFor.includes(roleId) ? (
                          <span className="mini-badge mini-badge--required">Required</span>
                        ) : null}
                        {!allowed ? <span className="mini-badge mini-badge--locked">Locked</span> : null}
                        {configs[subfeature.id] ? <span className="mini-badge">Configured</span> : null}
                      </div>
                    </div>
                  </div>
                  <div className="subfeature-row-actions">
                    <button
                      type="button"
                      className={`toggle-button toggle-button--switch ${enabled ? "toggle-button--on" : ""}`}
                      disabled={!allowed}
                      aria-pressed={enabled}
                      onClick={(event) => {
                        event.stopPropagation();
                        onToggleSubfeature(subfeature, !enabled);
                      }}
                    >
                      <span />
                      <span className="sr-only">
                        {allowed ? `Toggle ${subfeature.name}` : `${subfeature.name} is locked`}
                      </span>
                    </button>

                    {canConfigure ? (
                      <button
                        type="button"
                        className={`icon-button subfeature-expand-button ${configuring ? "subfeature-expand-button--open" : ""}`}
                        aria-label={configuring ? `Collapse ${subfeature.name} configuration` : `Expand ${subfeature.name} configuration`}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (configuring) {
                            onCancelPrompt();
                            return;
                          }
                          onSelectSubfeature(subfeature.id);
                          onToggleSubfeature(subfeature, true);
                        }}
                      >
                        <ChevronDown size={16} />
                      </button>
                    ) : null}
                  </div>

                  {configuring ? (
                    <div className="subfeature-config-dropdown" onClick={(event) => event.stopPropagation()}>
                      {minimalConfigField ? (
                        <div className="minimal-config-list">
                          {minimalConfigField.options?.map((option) => {
                            const selected = String(promptValues[minimalConfigField.id] ?? "") === option;
                            return (
                              <div key={option} className="minimal-config-option">
                                <div className="minimal-config-option-main">
                                  <span className="minimal-config-option-icon">{getConfigOptionIcon(option)}</span>
                                  <strong>{option}</strong>
                                </div>
                                <button
                                  className={`primary-button minimal-config-button ${selected ? "minimal-config-button--selected" : ""}`}
                                  onClick={() => onQuickSavePrompt(minimalConfigField.id, option)}
                                >
                                  {selected ? "Selected" : "Connect"}
                                </button>
                              </div>
                            );
                          })}
                          <div className="panel-button-row">
                            <button className="secondary-button" onClick={onCancelPrompt}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="subfeature-config-header">
                            <strong>Configure {subfeature.name}</strong>
                            <span>{subfeature.setupSummary}</span>
                          </div>

                          <div className="field-stack">
                            {subfeature.promptFields.map((field) => (
                              <label key={field.id} className="field-block">
                                <div className="field-label-row">
                                  <span>{field.label}</span>
                                  {field.required ? <small>Required</small> : <small>Optional</small>}
                                </div>

                                {field.type === "select" ? (
                                  <select
                                    value={String(promptValues[field.id] ?? "")}
                                    onChange={(event) => onPromptChange(field.id, event.target.value)}
                                  >
                                    {field.options?.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                ) : field.type === "textarea" ? (
                                  <textarea
                                    value={String(promptValues[field.id] ?? "")}
                                    placeholder={field.placeholder}
                                    onChange={(event) => onPromptChange(field.id, event.target.value)}
                                  />
                                ) : field.type === "toggle" ? (
                                  <button
                                    type="button"
                                    className={`toggle-button ${promptValues[field.id] ? "toggle-button--on" : ""}`}
                                    onClick={() => onPromptChange(field.id, !Boolean(promptValues[field.id]))}
                                  >
                                    {promptValues[field.id] ? "On" : "Off"}
                                  </button>
                                ) : (
                                  <input
                                    type="text"
                                    value={String(promptValues[field.id] ?? "")}
                                    placeholder={field.placeholder}
                                    onChange={(event) => onPromptChange(field.id, event.target.value)}
                                  />
                                )}

                                <p>{field.helperText}</p>
                              </label>
                            ))}
                          </div>

                          <div className="panel-button-row">
                            <button className="secondary-button" onClick={onCancelPrompt}>
                              Cancel
                            </button>
                            <button className="primary-button" onClick={onSavePrompt}>
                              Save and enable
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="active-card-footer">
        <div>
          <div className="readiness-note">
            {readiness.ready ? (
              <>
                <Check size={14} />
                This tab is ready to build.
              </>
            ) : (
              <>
                <AlertCircle size={14} />
                Enable the required subfeatures and complete their prompts before building this tab.
              </>
            )}
          </div>
        </div>
        <div className="active-card-footer-actions">
          {status === "built" ? (
            <span className="built-inline-indicator">
              <Check size={14} />
              Built
            </span>
          ) : null}
          <button className="primary-button build-button" disabled={!readiness.ready} onClick={onBuild}>
            <WandSparkles size={16} />
            Build
          </button>
        </div>
      </div>
    </article>
  );
}

function LaunchSummary({
  snapshot,
  requiredCardsRemaining,
  optionalCardsRemaining,
  onLaunch
}: {
  snapshot: OnboardingSnapshot;
  requiredCardsRemaining: LibraryCardDefinition[];
  optionalCardsRemaining: LibraryCardDefinition[];
  onLaunch: () => void;
}) {
  return (
    <div className="launch-summary-stack launch-summary-stack--solo">
      <div className="launch-card">
        <div className="panel-header">
          <div>
            <h2>Launch</h2>
            <p>Build the required tabs, then create the website.</p>
          </div>
        </div>
        <div className="launch-stats">
          <div className="launch-stat">
            <span>Required left</span>
            <strong>{requiredCardsRemaining.length}</strong>
          </div>
          <div className="launch-stat">
            <span>Optional left</span>
            <strong>{optionalCardsRemaining.length}</strong>
          </div>
        </div>
        {requiredCardsRemaining.length ? (
          <div className="info-block">
            <small>Still required</small>
            <div className="chip-wrap">
              {requiredCardsRemaining.map((card) => (
                <span key={card.id} className="mini-chip mini-chip--warning">
                  {card.label}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="info-tip">
            <Check size={14} />
            <span>The required tabs are built. You can launch now.</span>
          </div>
        )}
        <button className="launch-button" disabled={!snapshot.launchReady} onClick={onLaunch}>
          <Rocket size={18} />
          Launch website
        </button>
      </div>
    </div>
  );
}

function LaunchSuccessScreen({
  role,
  builtCards,
  optionalCardsRemaining,
  snapshot,
  onReset
}: {
  role: RoleDefinition;
  builtCards: LibraryCardDefinition[];
  optionalCardsRemaining: LibraryCardDefinition[];
  snapshot: OnboardingSnapshot;
  onReset: () => void;
}) {
  const launchedCards = builtCards
    .map((card) => ({
      card,
      enabledSubfeatures: card.subfeatures.filter((subfeature) => snapshot.subfeatureToggles[card.id]?.[subfeature.id])
    }))
    .filter((item) => item.enabledSubfeatures.length > 0);

  const [activeView, setActiveView] = useState<LaunchedShellView>("home");
  const [peopleViewId, setPeopleViewId] = useState<LeadViewId>("all-leads");
  const [activeDemoProfile, setActiveDemoProfile] = useState<NegotiationShellProfile>("seller_agent");
  const [showProfileSwitch, setShowProfileSwitch] = useState(false);
  const negotiationFeature = useNegotiationFeatureState(DEMO_LISTING_ID);

  const people = useMemo(() => getDashboardPeopleForRole(role.id), [role.id]);
  const peopleViewItems = getPeopleViewList(peopleViewId, role.id);
  const activeDemoAccount = getProfileOption(activeDemoProfile);
  const greetingName =
    role.id === "company-owner"
      ? "James"
      : role.id === "company-admin"
        ? "Baylee"
        : role.id === "office-owner"
          ? "Jamie"
          : role.id === "office-admin"
            ? "Morgan"
            : role.id === "lender"
              ? "Taylor"
              : "Baylee";
  const hour = new Date().getHours();
  const greetingLabel = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const newLeads = people.filter((person) => person.isNewLead).slice(0, 3);
  const keepInTouchLeads = people.filter((person) => person.keepInTouch).slice(0, 4);
  const opportunityLeads = people.filter((person) => person.opportunities?.length).slice(0, 4);
  const opportunityCounts = {
    highInterest: people.filter((person) => person.opportunities?.includes("High Interest")).length,
    likelySellers: people.filter((person) => person.opportunities?.includes("Likely Seller")).length,
    backToSite: people.filter((person) => person.opportunities?.includes("Back to Site")).length
  };
  const tasks = people
    .flatMap((person) => person.tasks.map((task) => ({ ...task, personName: person.name })))
    .filter((task) => !task.completed)
    .slice(0, 5);
  const taskCounts = {
    Call: tasks.filter((task) => task.type === "Call").length,
    Text: tasks.filter((task) => task.type === "Text").length,
    Email: tasks.filter((task) => task.type === "Email").length,
    Other: tasks.filter((task) => task.type === "Other").length
  };
  const appointments = people
    .flatMap((person) =>
      person.appointments.map((appointment) => ({
        ...appointment,
        personName: person.name
      }))
    )
    .filter((appointment) => appointment.type === "Appointment");
  const showings = people
    .flatMap((person) =>
      person.appointments.map((appointment) => ({
        ...appointment,
        personName: person.name
      }))
    )
    .filter((appointment) => appointment.type === "Showing");
  const transactions = people
    .flatMap((person) =>
      person.transaction
        ? [
            {
              ...person.transaction,
              personName: person.name
            }
          ]
        : []
    )
    .slice(0, 4);
  const myListings = listingInsights.slice(0, 3);
  const launchedSubfeatureIds = new Set(
    launchedCards.flatMap(({ enabledSubfeatures }) => enabledSubfeatures.map((subfeature) => subfeature.id))
  );
  const widgetAvailability = {
    newLeads: launchedSubfeatureIds.has("people"),
    opportunities:
      launchedSubfeatureIds.has("showing") ||
      launchedSubfeatureIds.has("offers") ||
      launchedSubfeatureIds.has("transactions"),
    keepInTouch: launchedSubfeatureIds.has("people") || launchedSubfeatureIds.has("segments"),
    transactions: launchedSubfeatureIds.has("transactions"),
    tasks: launchedSubfeatureIds.has("tasks"),
    appointments: launchedSubfeatureIds.has("calendar") || launchedSubfeatureIds.has("showing"),
    listings: launchedSubfeatureIds.has("websites"),
    hotSheets: launchedSubfeatureIds.has("websites")
  };

  useEffect(() => {
    if (activeView === "crm-people" && !launchedSubfeatureIds.has("people")) {
      setActiveView("home");
    }
  }, [activeView, launchedSubfeatureIds]);

  function handleSelectDemoProfile(profile: NegotiationShellProfile) {
    setActiveDemoProfile(profile);
    setShowProfileSwitch(false);
  }

  return (
    <>
      <LoftyLaunchedShell
        activeView={activeView}
        activeProfileEmail={activeDemoAccount.email}
        activeProfileName={activeDemoAccount.name}
        onNavigateHome={() => setActiveView("home")}
        onNavigateMessages={() => setActiveView("messages")}
        onNavigateNegotiation={() => setActiveView("negotiation")}
        onNavigatePeople={() => setActiveView("crm-people")}
        onOpenProfileSwitch={() => setShowProfileSwitch(true)}
      >
        {activeView === "home" ? (
        <div className="lofty-shell-section">
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <div>
                <h1>
                  👋 {greetingLabel}, {greetingName}!
                </h1>
                <div className="dashboard-subtitle-row">
                  <span>My Dashboard</span>
                  <ChevronDown size={14} />
                </div>
              </div>
              <div className="dashboard-header-actions">
                <button className="dashboard-filter-chip">
                  Today&apos;s Priorities
                  <ChevronDown size={14} />
                </button>
                <button className="dashboard-grid-button" aria-label="Dashboard layout">
                  <LayoutGrid size={16} />
                </button>
                <button className="secondary-button" onClick={onReset}>
                  Start another setup
                </button>
              </div>
            </div>

            <DashboardHome
              updates={dashboardUpdates}
              newLeads={newLeads}
              keepInTouchLeads={keepInTouchLeads}
              opportunityLeads={opportunityLeads}
              opportunityCounts={opportunityCounts}
              tasks={tasks}
              taskCounts={taskCounts}
              appointments={appointments}
              showings={showings}
              transactions={transactions}
              listings={myListings}
              hotSheets={hotSheetItems}
              widgetAvailability={widgetAvailability}
            />
          </div>
        </div>
        ) : activeView === "crm-people" ? (
          <div className="lofty-shell-section">
            <div className="lofty-shell-toolbar">
              <button className="secondary-button" onClick={onReset}>
                Start another setup
              </button>
            </div>
            <div className="dashboard-page">
              <PeopleWorkspace
                role={role}
                peopleViewId={peopleViewId}
                onChangeView={setPeopleViewId}
                people={peopleViewItems}
              />
            </div>
          </div>
        ) : activeView === "messages" ? (
          <MessagesWorkspace
            profile={activeDemoProfile}
            feature={negotiationFeature}
            onOpenProfileSwitch={() => setShowProfileSwitch(true)}
          />
        ) : (
          <NegotiationWorkspace
            profile={activeDemoProfile}
            feature={negotiationFeature}
            onOpenProfileSwitch={() => setShowProfileSwitch(true)}
          />
        )}
      </LoftyLaunchedShell>
      {showProfileSwitch ? (
        <ProfileSwitchModal
          activeProfile={activeDemoProfile}
          onClose={() => setShowProfileSwitch(false)}
          onSelectProfile={handleSelectDemoProfile}
        />
      ) : null}
    </>
  );
}

function DashboardHome({
  updates,
  newLeads,
  keepInTouchLeads,
  opportunityLeads,
  opportunityCounts,
  tasks,
  taskCounts,
  appointments,
  showings,
  transactions,
  listings,
  hotSheets,
  widgetAvailability
}: {
  updates: typeof dashboardUpdates;
  newLeads: DashboardPerson[];
  keepInTouchLeads: DashboardPerson[];
  opportunityLeads: DashboardPerson[];
  opportunityCounts: {
    highInterest: number;
    likelySellers: number;
    backToSite: number;
  };
  tasks: Array<{ id: string; type: string; title: string; timeLabel: string; personName: string }>;
  taskCounts: Record<"Call" | "Text" | "Email" | "Other", number>;
  appointments: Array<{ id: string; title: string; timeLabel: string; personName: string; incomplete?: boolean }>;
  showings: Array<{ id: string; title: string; timeLabel: string; personName: string; incomplete?: boolean }>;
  transactions: Array<{ id: string; address: string; status: string; checklistCount: number; personName: string }>;
  listings: typeof listingInsights;
  hotSheets: typeof hotSheetItems;
  widgetAvailability: {
    newLeads: boolean;
    opportunities: boolean;
    keepInTouch: boolean;
    transactions: boolean;
    tasks: boolean;
    appointments: boolean;
    listings: boolean;
    hotSheets: boolean;
  };
}) {
  const [scheduleTab, setScheduleTab] = useState<"appointments" | "showings">("appointments");
  const scheduleItems = scheduleTab === "appointments" ? appointments : showings;
  const scheduleTotal = scheduleItems.length;
  const scheduleIncomplete = scheduleItems.filter((item) => item.incomplete).length;
  const untouchedCount = newLeads.filter((lead) => lead.untouched).length;
  const transactionNearDeadline = transactions.filter((item) => item.status === "Near Deadline").length;
  const transactionExpired = transactions.filter((item) => item.status === "Expired").length;

  return (
    <div className="dashboard-grid">
      <DashboardWidget className="dashboard-widget--updates" title="New Updates" actions={<span>Announcements</span>}>
        <div className="update-list">
          {updates.map((update) => (
            <div key={update.id} className="update-item">
              <div className={`update-thumb update-thumb--${update.accent}`} />
              <div className="update-copy">
                <strong>{update.title}</strong>
                <p>{update.description}</p>
              </div>
            </div>
          ))}
        </div>
      </DashboardWidget>

      <DashboardWidget
        title="Today's New Leads"
        actions={
          <div className="widget-icon-actions">
            <HelpCircle size={15} />
            <Settings2 size={15} />
          </div>
        }
      >
        {widgetAvailability.newLeads ? (
          <>
            <div className="dashboard-progress-track">
              <div className="dashboard-progress-fill" style={{ width: `${Math.min((untouchedCount / Math.max(newLeads.length, 1)) * 100, 100)}%` }} />
            </div>
            <p className="widget-summary">Total: {newLeads.length} ({untouchedCount} untouched)</p>
            <div className="widget-section-title">Leads waiting to be contacted</div>
            <div className="lead-list">
              {newLeads.map((lead) => (
                <div key={lead.id} className="lead-list-item">
                  <div>
                    <strong>{lead.name}</strong>
                    <span>{lead.leadType}</span>
                    <small>{lead.source}</small>
                  </div>
                  <div className="lead-score-badge">{lead.score}</div>
                </div>
              ))}
            </div>
            <button className="widget-link-row">
              View All
              <ChevronRight size={14} />
            </button>
          </>
        ) : (
          <EmptyWidgetState message="Build CRM > People to surface new lead triage here." />
        )}
      </DashboardWidget>

      <DashboardWidget title="Today's Opportunities" actions={<HelpCircle size={15} />}>
        {widgetAvailability.opportunities ? (
          <>
            <div className="widget-metric-row">
              <WidgetMetric label="High Interest" value={opportunityCounts.highInterest} />
              <WidgetMetric label="Likely Sellers" value={opportunityCounts.likelySellers} />
              <WidgetMetric label="Back to Site" value={opportunityCounts.backToSite} />
            </div>
            <div className="opportunity-list">
              {opportunityLeads.map((lead) => (
                <div key={lead.id} className="opportunity-item">
                  <div>
                    <strong>{lead.name}</strong>
                    <span>{lead.lastActivity}</span>
                  </div>
                  <div className="chip-wrap">
                    {lead.opportunities?.map((tag) => (
                      <span key={tag} className="mini-chip mini-chip--success">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyWidgetState message="Build Sales subfeatures to surface high-intent opportunities here." />
        )}
      </DashboardWidget>

      <DashboardWidget title="Need Keep In Touch" actions={<HelpCircle size={15} />}>
        {widgetAvailability.keepInTouch ? (
          <>
            <div className="widget-metric-row">
              <WidgetMetric label="Birthday" value={keepInTouchLeads.filter((lead) => lead.keepInTouch === "Birthday").length} />
              <WidgetMetric label="Follow-Up" value={keepInTouchLeads.filter((lead) => lead.keepInTouch === "Follow-Up").length} />
            </div>
            <div className="compact-list">
              {keepInTouchLeads.map((lead) => (
                <div key={lead.id} className="compact-list-item">
                  <div>
                    <strong>{lead.name}</strong>
                    <span>{lead.roles.join(" · ")}</span>
                    <small>{lead.birthdayLabel ?? lead.followUpLabel}</small>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyWidgetState message="Build CRM relationship features to see follow-up reminders here." />
        )}
      </DashboardWidget>

      <DashboardWidget
        title="Transactions"
        actions={
          <div className="widget-icon-actions">
            <HelpCircle size={15} />
            <Settings2 size={15} />
          </div>
        }
      >
        {widgetAvailability.transactions ? (
          <>
            <div className="widget-metric-row">
              <WidgetMetric label="Near Deadline" value={transactionNearDeadline} />
              <WidgetMetric label="Expired" value={transactionExpired} />
            </div>
            <div className="compact-list">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="compact-list-item">
                  <div>
                    <strong>{transaction.address}</strong>
                    <span>{transaction.personName}</span>
                    <small>{transaction.checklistCount} tasks near deadline</small>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyWidgetState message="Build Sales > Transactions to monitor active deals here." />
        )}
      </DashboardWidget>

      <DashboardWidget title="Today's Tasks" actions={<HelpCircle size={15} />}>
        {widgetAvailability.tasks ? (
          <>
            <div className="task-chip-row">
              <TaskPill label="Call" value={taskCounts.Call} tint="blue" />
              <TaskPill label="Text" value={taskCounts.Text} tint="blue-light" />
              <TaskPill label="Email" value={taskCounts.Email} tint="green" />
              <TaskPill label="Other" value={taskCounts.Other} tint="orange" />
            </div>
            <div className="compact-list">
              {tasks.map((task) => (
                <div key={task.id} className="task-list-item">
                  <div className="task-list-main">
                    <span className="task-list-icon">{task.type === "Call" ? <Phone size={14} /> : task.type === "Text" ? <MessageSquare size={14} /> : task.type === "Email" ? <Mail size={14} /> : <Circle size={6} fill="currentColor" strokeWidth={0} />}</span>
                    <div>
                      <strong>{task.title}</strong>
                      <span>{task.personName}</span>
                    </div>
                  </div>
                  <small>{task.timeLabel}</small>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyWidgetState message="Build CRM > Tasks to see your daily action list here." />
        )}
      </DashboardWidget>

      <DashboardWidget
        title="Appointments"
        actions={
          <div className="widget-tab-switch">
            <button
              className={scheduleTab === "appointments" ? "widget-tab-switch-button widget-tab-switch-button--active" : "widget-tab-switch-button"}
              onClick={() => setScheduleTab("appointments")}
            >
              Appointments
            </button>
            <button
              className={scheduleTab === "showings" ? "widget-tab-switch-button widget-tab-switch-button--active" : "widget-tab-switch-button"}
              onClick={() => setScheduleTab("showings")}
            >
              Showings
            </button>
          </div>
        }
      >
        {widgetAvailability.appointments ? (
          <>
            <div className="dashboard-progress-track">
              <div className="dashboard-progress-fill dashboard-progress-fill--green" style={{ width: `${Math.min((scheduleIncomplete / Math.max(scheduleTotal, 1)) * 100, 100)}%` }} />
            </div>
            <p className="widget-summary">
              Total: {scheduleTotal} ({scheduleIncomplete} incomplete)
            </p>
            <div className="compact-list">
              {scheduleItems.map((item) => (
                <div key={item.id} className="compact-list-item">
                  <div>
                    <strong>{item.personName}</strong>
                    <span>{item.timeLabel}</span>
                    <small>{item.title}</small>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyWidgetState message="Build Calendar or Showing tools to see meetings here." />
        )}
      </DashboardWidget>

      <DashboardWidget title="My Listings">
        {widgetAvailability.listings ? (
          <div className="compact-list">
            {listings.map((listing) => (
              <div key={listing.id} className="compact-list-item">
                <div>
                  <strong>{listing.title}</strong>
                  <span>{listing.location}</span>
                  <small>{listing.trend}</small>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyWidgetState message="Build the website tab to bring listing activity into the dashboard." />
        )}
      </DashboardWidget>

      <DashboardWidget title="Hot Sheets">
        {widgetAvailability.hotSheets ? (
          <div className="compact-list">
            {hotSheets.map((sheet) => (
              <div key={sheet.id} className="compact-list-item compact-list-item--split">
                <strong>{sheet.label}</strong>
                <span className="listing-count-badge">+{sheet.count} Listings</span>
              </div>
            ))}
          </div>
        ) : (
          <EmptyWidgetState message="Build Content > Websites to surface listing watchlists here." />
        )}
      </DashboardWidget>
    </div>
  );
}

function PeopleWorkspace({
  role,
  peopleViewId,
  onChangeView,
  people
}: {
  role: RoleDefinition;
  peopleViewId: LeadViewId;
  onChangeView: (viewId: LeadViewId) => void;
  people: DashboardPerson[];
}) {
  const views: Array<{ id: LeadViewId; label: string }> = [
    { id: "all-leads", label: "All Leads" },
    { id: "my-leads", label: "My Leads" },
    { id: "lead-pond", label: "Lead Pond" },
    { id: "partial-leads", label: "Partial Leads" }
  ];

  return (
    <section className="people-workspace">
      <div className="people-workspace-header">
        <div>
          <p className="section-kicker">CRM</p>
          <h2>People</h2>
          <p>
            Based on the Lofty People Page, this view keeps lead source, stage, segments, and recent activity together
            so the next action is obvious.
          </p>
        </div>
        <div className="chip-wrap">
          <span className="mini-chip mini-chip--success">{people.length} visible leads</span>
          <span className="mini-chip">{role.name}</span>
        </div>
      </div>

      <div className="people-view-tabs">
        {views.map((view) => (
          <button
            key={view.id}
            className={peopleViewId === view.id ? "people-view-tab people-view-tab--active" : "people-view-tab"}
            onClick={() => onChangeView(view.id)}
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="people-table-shell">
        <div className="people-table-header">
          <span>Name</span>
          <span>Contact info</span>
          <span>Lead type</span>
          <span>Source</span>
          <span>Stage</span>
          <span>Score</span>
          <span>Last touch</span>
          <span>Last reply</span>
          <span>Communication update</span>
          <span>Interested listing</span>
          <span>Tags / segments</span>
          <span>Assigned agent</span>
        </div>

        <div className="people-table-body">
          {people.map((person) => (
            <article key={person.id} className="people-row">
              <div className="people-cell people-cell--name">
                <strong>{person.name}</strong>
                <span>{person.roles.join(" · ")}</span>
              </div>
              <div className="people-cell">
                <strong>{person.phone}</strong>
                <span>{person.email}</span>
              </div>
              <div className="people-cell">
                <span>{person.leadType}</span>
              </div>
              <div className="people-cell">
                <span>{person.source}</span>
              </div>
              <div className="people-cell">
                <span>{person.stage}</span>
              </div>
              <div className="people-cell">
                <div className="lead-score-badge">{person.score}</div>
              </div>
              <div className="people-cell">
                <span>{person.lastTouch}</span>
              </div>
              <div className="people-cell">
                <span>{person.lastReply}</span>
              </div>
              <div className="people-cell">
                <strong>{person.communicationSummary}</strong>
                <span>{person.lastActivity ?? "No recent activity"}</span>
              </div>
              <div className="people-cell">
                <strong>{person.interestedListing}</strong>
                <span>{person.savedSearch ?? "Lead profile ready"}</span>
              </div>
              <div className="people-cell">
                <div className="chip-wrap">
                  {person.segments?.slice(0, 2).map((segment) => (
                    <span key={segment} className="mini-chip">
                      {segment}
                    </span>
                  ))}
                </div>
              </div>
              <div className="people-cell people-cell--owner">
                <strong>{person.assignedAgent}</strong>
                <button className="widget-link-row">
                  Open lead
                  <ChevronRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubfeatureWorkspace({
  role,
  card,
  subfeature,
  optionalCardsRemaining,
  people
}: {
  role: RoleDefinition;
  card: LibraryCardDefinition | null;
  subfeature: LibraryCardDefinition["subfeatures"][number] | null;
  optionalCardsRemaining: LibraryCardDefinition[];
  people: DashboardPerson[];
}) {
  const activeCount =
    subfeature?.id === "tasks"
      ? people.flatMap((person) => person.tasks).length
      : subfeature?.id === "calendar" || subfeature?.id === "showing"
        ? people.flatMap((person) => person.appointments).length
        : subfeature?.id === "transactions"
          ? people.filter((person) => person.transaction).length
          : people.length;

  return (
    <section className="subfeature-workspace">
      <div className="subfeature-workspace-hero">
        <p className="section-kicker">{card?.label ?? "Workspace"}</p>
        <h2>{subfeature?.name ?? "Ready"}</h2>
        <p>{subfeature?.setupSummary ?? `${role.name} users can now work inside the tabs you launched.`}</p>
      </div>

      <div className="subfeature-workspace-grid">
        <article className="success-card">
          <h2>What this page is for</h2>
          <p>{subfeature?.example ?? "This page is ready to use inside your launched Lofty workspace."}</p>
        </article>
        <article className="success-card">
          <h2>Available records</h2>
          <div className="launch-stat">
            <span>Live items</span>
            <strong>{activeCount}</strong>
          </div>
        </article>
        <article className="success-card">
          <h2>Still optional</h2>
          <div className="chip-wrap">
            {optionalCardsRemaining.length ? (
              optionalCardsRemaining.map((item) => (
                <span key={item.id} className="mini-chip mini-chip--warning">
                  {item.label}
                </span>
              ))
            ) : (
              <span className="muted-copy">No optional tabs are left.</span>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function DashboardWidget({
  title,
  actions,
  children,
  className = ""
}: {
  title: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`dashboard-widget ${className}`.trim()}>
      <div className="dashboard-widget-header">
        <h2>{title}</h2>
        {actions ? <div className="dashboard-widget-actions">{actions}</div> : null}
      </div>
      {children}
    </article>
  );
}

function WidgetMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="widget-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TaskPill({ label, value, tint }: { label: string; value: number; tint: "blue" | "blue-light" | "green" | "orange" }) {
  return (
    <div className={`task-pill task-pill--${tint}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function EmptyWidgetState({ message }: { message: string }) {
  return (
    <div className="widget-empty-state">
      <Bell size={18} />
      <p>{message}</p>
    </div>
  );
}

function DragPreview({ card }: { card: LibraryCardDefinition }) {
  return (
    <div className="drag-preview">
      <WandSparkles size={16} />
      <span>{card.label}</span>
    </div>
  );
}

function ModalFrame({
  title,
  subtitle,
  onClose,
  children
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <button className="icon-button" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default App;
