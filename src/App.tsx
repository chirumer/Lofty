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
  ArrowUpRight,
  Check,
  GripVertical,
  Layers3,
  Lock,
  Rocket,
  Search,
  Sparkles,
  WandSparkles,
  X
} from "lucide-react";
import {
  buildInitialCardStates,
  buildInitialConfigStore,
  buildInitialToggleStore,
  buildPromptDefaults,
  deriveLaunchReady,
  getAccessibleCards,
  getCardById,
  getLockedCards,
  getRecommendedCards,
  getRoleById,
  getSubfeature,
  isCardRequiredForRole,
  libraryCardDefinitions,
  roleDefinitions,
  roleSelectionCopy
} from "./data";
import type {
  CardState,
  CardToggleStore,
  LibraryCardDefinition,
  LibraryCardId,
  OnboardingSnapshot,
  PromptValues,
  RoleDefinition,
  RoleId,
  SubfeatureDefinition
} from "./types";

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
  const [snapshot, setSnapshot] = useState<OnboardingSnapshot>(() => loadSnapshot());
  const [selectedCardId, setSelectedCardId] = useState<LibraryCardId | null>(null);
  const [selectedSubfeatureId, setSelectedSubfeatureId] = useState<string | null>(null);
  const [draggingCardId, setDraggingCardId] = useState<LibraryCardId | null>(null);
  const [cardQuery, setCardQuery] = useState("");
  const [mobileLibraryOpen, setMobileLibraryOpen] = useState(false);
  const [showLaunchConfirm, setShowLaunchConfirm] = useState(false);
  const [promptValues, setPromptValues] = useState<PromptValues>({});

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  }, [snapshot]);

  const selectedRole = useMemo(
    () => (snapshot.selectedRole ? getRoleById(snapshot.selectedRole) : null),
    [snapshot.selectedRole]
  );

  const accessibleCards = useMemo(
    () => (snapshot.selectedRole ? getAccessibleCards(snapshot.selectedRole) : []),
    [snapshot.selectedRole]
  );

  const lockedCards = useMemo(
    () => (snapshot.selectedRole ? getLockedCards(snapshot.selectedRole) : []),
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

  const selectedCard = useMemo(() => {
    const preferredId = selectedCardId ?? snapshot.activeCardId;
    return preferredId ? getCardById(preferredId) : null;
  }, [selectedCardId, snapshot.activeCardId]);

  const selectedSubfeature =
    selectedCard && selectedSubfeatureId
      ? selectedCard.subfeatures.find((item) => item.id === selectedSubfeatureId) ?? null
      : null;

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

  const recommendedCards = useMemo(
    () => (snapshot.selectedRole ? getRecommendedCards(snapshot.selectedRole).map(getCardById) : []),
    [snapshot.selectedRole]
  );

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

  function savePrompt() {
    if (!snapshot.pendingPrompt || !pendingSubfeature) {
      return;
    }

    const missingRequiredFields = pendingSubfeature.promptFields.filter((field) => {
      if (!field.required) {
        return false;
      }
      const value = promptValues[field.id];
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
          [subfeatureId]: promptValues
        }
      },
      cardStates: {
        ...current.cardStates,
        [cardId]: current.cardStates[cardId] === "built" ? "draft" : "draft"
      },
      pendingPrompt: null
    }));
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
      <div className="app-shell">
        <main className="page-shell">
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
      onSelectCard={(cardId) => {
        setSelectedCardId(cardId);
        setSelectedSubfeatureId(null);
      }}
      onOpenCard={activateCard}
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
          </header>

          <section className="overview-strip">
            <div className="overview-card overview-card--summary">
              <span>{selectedRole.name}</span>
              <strong>{launchProgress}% launch progress</strong>
              <p>
                {accessibleCards.filter((card) => snapshot.cardStates[card.id] === "built").length} built cards,{" "}
                {requiredCardsRemaining.length} required cards still open.
              </p>
            </div>
            <div className="overview-card">
              <div className="overview-card-title">
                <h2>Recommended path</h2>
                <p>These cards are the best place to start for this role.</p>
              </div>
              <div className="chip-wrap">
                {recommendedCards.map((card) => (
                  <button key={card.id} className="template-pill" onClick={() => activateCard(card.id)}>
                    <Sparkles size={14} />
                    {card.label}
                  </button>
                ))}
              </div>
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
                      selectedSubfeatureId={selectedSubfeatureId}
                      onSelectSubfeature={(subfeatureId) => {
                        setSelectedCardId(activeCard.id);
                        setSelectedSubfeatureId(subfeatureId);
                      }}
                      onToggleSubfeature={(subfeature, nextValue) => handleToggleSubfeature(activeCard.id, subfeature, nextValue)}
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
                    <h3>Library Cards</h3>
                    <p>Tap a card to preview it or open it in the workspace.</p>
                  </div>
                  <button className="icon-button" onClick={() => setMobileLibraryOpen(false)}>
                    <X size={16} />
                  </button>
                </div>
                {libraryPanel}
              </div>
            </div>
          ) : null}

          {snapshot.pendingPrompt && pendingSubfeature ? (
            <SubfeaturePromptModal
              card={getCardById(snapshot.pendingPrompt.cardId)}
              subfeature={pendingSubfeature}
              values={promptValues}
              onChange={(fieldId, value) =>
                setPromptValues((current) => ({
                  ...current,
                  [fieldId]: value
                }))
              }
              onCancel={closePrompt}
              onSave={savePrompt}
            />
          ) : null}

          {showLaunchConfirm ? (
            <ModalFrame
              title="Launch with optional cards still open?"
              subtitle="You have built the required cards. Optional cards can still be added later."
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
  onOpenCard,
  selectedCardId
}: {
  cards: LibraryCardDefinition[];
  selectedRoleId: RoleId;
  snapshot: OnboardingSnapshot;
  query: string;
  onQueryChange: (value: string) => void;
  onSelectCard: (cardId: LibraryCardId) => void;
  onOpenCard: (cardId: LibraryCardId) => void;
  selectedCardId: LibraryCardId | null;
}) {
  return (
    <div className="layer-library">
      <div className="panel-header">
        <div>
          <h2>Layer Library</h2>
          <p>These are the only eight setup cards in the builder. Drag one into the workspace to configure it.</p>
        </div>
      </div>

      <div className="library-controls">
        <label className="search-field">
          <Search size={15} />
          <input
            type="text"
            value={query}
            placeholder="Search cards or subfeatures"
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
            onOpen={() => onOpenCard(card.id)}
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
  onSelect,
  onOpen
}: {
  card: LibraryCardDefinition;
  roleId: RoleId;
  status: CardState;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
}) {
  const available = card.allowedRoles.includes(roleId);
  const Icon = card.icon;
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `library:${card.id}`,
    disabled: !available
  });

  const statusLabel =
    status === "built" ? "Built" : status === "draft" ? "Draft" : status === "not-started" ? "Not started" : status;

  return (
    <div
      ref={setNodeRef}
      className={`library-layer-card ${selected ? "library-layer-card--selected" : ""} ${!available ? "library-layer-card--locked" : ""}`}
      style={{ transform: CSS.Translate.toString(transform), opacity: isDragging ? 0.6 : 1 }}
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
          <span className={`status-dot status-dot--${status === "draft" ? "in-progress" : status}`} />
          {available ? (
            <button className="icon-button drag-handle" aria-label={`Drag ${card.label}`} {...listeners} {...attributes}>
              <GripVertical size={16} />
            </button>
          ) : (
            <button className="icon-button" onClick={onSelect} aria-label={`Why ${card.label} is locked`}>
              <Lock size={14} />
            </button>
          )}
          <button
            className={`icon-button library-open-button ${available ? "library-open-button--primary" : ""}`}
            onClick={available ? onOpen : onSelect}
            aria-label={available ? `Open ${card.label}` : `Why ${card.label} is locked`}
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <div className="library-tab-body">
        <p>{card.description}</p>
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
      <h3>Drag a card here to start</h3>
      <p>Choose a card from the library. Your website will be built one card at a time.</p>
    </div>
  );
}

function ActiveCard({
  card,
  roleId,
  status,
  toggles,
  configs,
  readiness,
  selectedSubfeatureId,
  onSelectSubfeature,
  onToggleSubfeature,
  onBuild
}: {
  card: LibraryCardDefinition;
  roleId: RoleId;
  status: CardState;
  toggles: CardToggleStore;
  configs: Record<string, PromptValues>;
  readiness: ReturnType<typeof getCardReadiness>;
  selectedSubfeatureId: string | null;
  onSelectSubfeature: (subfeatureId: string) => void;
  onToggleSubfeature: (subfeature: SubfeatureDefinition, nextValue: boolean) => void;
  onBuild: () => void;
}) {
  const Icon = card.icon;

  return (
    <article className="active-card">
      <div className="active-card-header">
        <div>
          <p className="section-kicker">Active card</p>
          <div className="active-card-title-row">
            <span className="active-card-icon">
              <Icon size={18} />
            </span>
            <h2>{card.label}</h2>
          </div>
          <p>{card.description}</p>
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
      </div>

      <div className="active-card-layout">
        <div className="active-card-subfeatures">
          <div className="section-label-row">
            <h3>Subfeatures</h3>
            <span>{readiness.enabledAllowedSubfeatures.length} enabled</span>
          </div>
          <div className="feature-list">
            {card.subfeatures.map((subfeature) => {
              const allowed = subfeature.allowedRoles.includes(roleId);
              const enabled = toggles[subfeature.id] ?? false;
              return (
                <div
                  key={subfeature.id}
                  className={`subfeature-row ${selectedSubfeatureId === subfeature.id ? "subfeature-row--selected" : ""} ${!allowed ? "subfeature-row--locked" : ""}`}
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
                    <p>{subfeature.description}</p>
                    <small>{allowed ? subfeature.setupSummary : subfeature.lockedReason}</small>
                  </div>
                  <button
                    type="button"
                    className={`toggle-button ${enabled ? "toggle-button--on" : ""}`}
                    disabled={!allowed}
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleSubfeature(subfeature, !enabled);
                    }}
                  >
                    <span />
                    {allowed ? (enabled ? "On" : "Off") : "Locked"}
                  </button>
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
                This card is ready to build.
              </>
            ) : (
              <>
                <AlertCircle size={14} />
                Enable the required subfeatures and complete their prompts before building this card.
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
            <p>Build the required cards, then create the website.</p>
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
            <span>The required cards are built. You can launch now.</span>
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

function SubfeaturePromptModal({
  card,
  subfeature,
  values,
  onChange,
  onCancel,
  onSave
}: {
  card: LibraryCardDefinition;
  subfeature: SubfeatureDefinition;
  values: PromptValues;
  onChange: (fieldId: string, value: string | boolean) => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <ModalFrame
      title={`Turn on ${subfeature.name}`}
      subtitle={`${subfeature.setupSummary} Add the minimum information below to enable it inside ${card.label}.`}
      onClose={onCancel}
    >
      <div className="prompt-stack">
        <div className="info-block">
          <small>What this helps with</small>
          <strong>{subfeature.example}</strong>
        </div>

        <div className="field-stack">
          {subfeature.promptFields.map((field) => (
            <label key={field.id} className="field-block">
              <div className="field-label-row">
                <span>{field.label}</span>
                {field.required ? <small>Required</small> : <small>Optional</small>}
              </div>

              {field.type === "select" ? (
                <select value={String(values[field.id] ?? "")} onChange={(event) => onChange(field.id, event.target.value)}>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  value={String(values[field.id] ?? "")}
                  placeholder={field.placeholder}
                  onChange={(event) => onChange(field.id, event.target.value)}
                />
              ) : field.type === "toggle" ? (
                <button
                  type="button"
                  className={`toggle-button ${values[field.id] ? "toggle-button--on" : ""}`}
                  onClick={() => onChange(field.id, !Boolean(values[field.id]))}
                >
                  <span />
                  {values[field.id] ? "On" : "Off"}
                </button>
              ) : (
                <input
                  type="text"
                  value={String(values[field.id] ?? "")}
                  placeholder={field.placeholder}
                  onChange={(event) => onChange(field.id, event.target.value)}
                />
              )}

              <p>{field.helperText}</p>
            </label>
          ))}
        </div>

        <div className="panel-button-row">
          <button className="secondary-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="primary-button" onClick={onSave}>
            Save and enable
          </button>
        </div>
      </div>
    </ModalFrame>
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

  const [activeCardId, setActiveCardId] = useState<LibraryCardId | null>(launchedCards[0]?.card.id ?? null);
  const [activeSubfeatureId, setActiveSubfeatureId] = useState<string | null>(
    launchedCards[0]?.enabledSubfeatures[0]?.id ?? null
  );

  useEffect(() => {
    if (!launchedCards.length) {
      setActiveCardId(null);
      setActiveSubfeatureId(null);
      return;
    }

    const activeCardStillExists = launchedCards.some((item) => item.card.id === activeCardId);
    if (!activeCardStillExists) {
      setActiveCardId(launchedCards[0].card.id);
      setActiveSubfeatureId(launchedCards[0].enabledSubfeatures[0]?.id ?? null);
      return;
    }

    const currentCard = launchedCards.find((item) => item.card.id === activeCardId);
    const currentSubfeatureStillExists = currentCard?.enabledSubfeatures.some((item) => item.id === activeSubfeatureId);
    if (!currentSubfeatureStillExists) {
      setActiveSubfeatureId(currentCard?.enabledSubfeatures[0]?.id ?? null);
    }
  }, [activeCardId, activeSubfeatureId, launchedCards]);

  const activeCardGroup = launchedCards.find((item) => item.card.id === activeCardId) ?? launchedCards[0] ?? null;
  const activeSubfeature =
    activeCardGroup?.enabledSubfeatures.find((item) => item.id === activeSubfeatureId) ??
    activeCardGroup?.enabledSubfeatures[0] ??
    null;

  return (
    <section className="launched-site">
      <header className="launched-site-header">
        <BrandMark className="launched-brand-mark" />

        {launchedCards.length ? (
          <nav className="launched-nav" aria-label="Website navigation">
            {launchedCards.map(({ card, enabledSubfeatures }) => {
              const active = activeCardId === card.id;
              return (
                <div key={card.id} className={`launched-nav-item ${active ? "launched-nav-item--active" : ""}`}>
                  <button
                    type="button"
                    className="launched-nav-trigger"
                    onClick={() => {
                      setActiveCardId(card.id);
                      setActiveSubfeatureId(enabledSubfeatures[0]?.id ?? null);
                    }}
                  >
                    {card.label}
                  </button>

                  {enabledSubfeatures.length ? (
                    <div className="launched-nav-dropdown">
                      {enabledSubfeatures.map((subfeature) => {
                        const selected = activeCardId === card.id && activeSubfeatureId === subfeature.id;
                        return (
                          <button
                            key={subfeature.id}
                            type="button"
                            className={`launched-dropdown-item ${selected ? "launched-dropdown-item--active" : ""}`}
                            onClick={() => {
                              setActiveCardId(card.id);
                              setActiveSubfeatureId(subfeature.id);
                            }}
                          >
                            {subfeature.name}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        ) : null}
      </header>

      <div className="launched-site-body">
        <article className="launched-feature-stage">
          <div className="launched-stage-surface">
            <p className="section-kicker">Website created</p>
            <h1>{activeSubfeature?.name ?? "Your Lofty launch is ready"}</h1>
            <p>
              {activeCardGroup
                ? `${activeCardGroup.card.label} is live with the subfeatures you enabled during setup.`
                : `The required cards are built, and ${role.name.toLowerCase()} users can now work inside the setup you assembled.`}
            </p>
            <div className="success-actions launched-stage-actions">
              <button className="secondary-button launched-reset-button" onClick={onReset}>
                Start another setup
              </button>
            </div>
          </div>
        </article>

        <article className="success-card">
          <h2>What was built</h2>
          <div className="chip-wrap">
            {builtCards.map((card) => (
              <span key={card.id} className="mini-chip mini-chip--success">
                {card.label}
              </span>
            ))}
          </div>
        </article>

        <article className="success-card">
          <h2>Enabled navigation</h2>
          <div className="chip-wrap">
            {launchedCards.length ? (
              launchedCards.flatMap(({ card, enabledSubfeatures }) =>
                enabledSubfeatures.map((subfeature) => (
                  <span key={`${card.id}-${subfeature.id}`} className="mini-chip mini-chip--success">
                    {card.label}: {subfeature.name}
                  </span>
                ))
              )
            ) : (
              <span className="muted-copy">No subfeatures were enabled for navigation.</span>
            )}
          </div>
        </article>

        <article className="success-card">
          <h2>Still optional</h2>
          <div className="chip-wrap">
            {optionalCardsRemaining.length ? (
              optionalCardsRemaining.map((card) => (
                <span key={card.id} className="mini-chip mini-chip--warning">
                  {card.label}
                </span>
              ))
            ) : (
              <span className="muted-copy">No optional cards are left.</span>
            )}
          </div>
        </article>
      </div>
    </section>
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
