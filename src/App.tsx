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
  ExternalLink,
  HelpCircle,
  LayoutGrid,
  Mail,
  MessageSquare,
  Layers3,
  Lock,
  Phone,
  Plus,
  Rocket,
  Search,
  Settings2,
  WandSparkles,
  X
} from "lucide-react";
import {
  buildAutoselectedCardStates,
  buildAutoselectedConfigStore,
  buildAutoselectedToggleStore,
  buildInitialCardStates,
  buildInitialConfigStore,
  buildInitialToggleStore,
  buildLaunchedNavItems,
  buildPromptDefaults,
  dashboardUpdates,
  deriveLaunchReady,
  formatListingLocation,
  getAccessibleCards,
  getCardById,
  getDashboardPeopleForRole,
  getPeopleViewList,
  getRoleById,
  getSubfeature,
  hotSheetItems,
  isCardRequiredForRole,
  libraryCardDefinitions,
  roleDefinitions,
  roleSelectionCopy
} from "./data";
import type {
  CardState,
  CardToggleStore,
  DashboardPerson,
  LaunchedListing,
  LaunchedMlsFeed,
  LaunchedListingType,
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
import SmartPlansWorkspace from "./components/SmartPlansWorkspace";
import {
  getProfileOption,
  MessagesWorkspace,
  type NegotiationShellProfile,
  NegotiationWorkspace,
  ProfileSwitchModal,
  useNegotiationFeatureState
} from "./components/NegotiationFeatureViews";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import testUser from "./config/test-user.json";
import demoMlxListings from "./config/demo-mlx-listings.json";
import demoPocketListings from "./config/demo-pocket-listings.json";
import dialog1Image from "../dialog1.png";
import dialog2Image from "../dialog2.png";

const STORAGE_KEY = "lofty-role-aware-setup-builder-v4";

type MlsFeedFormValues = {
  sourceName: string;
  agentId: string;
  referenceId: string;
  enabled: boolean;
};

type PocketListingFormValues = {
  sourceName: string;
  contactName: string;
  availability: string;
  headline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  neighborhood: string;
  trend: string;
  imageUrl: string;
  description: string;
  enabled: boolean;
};

type ContentEditorState =
  | {
      mode: "create" | "edit";
      kind: "mls-feed";
      feedId?: string;
    }
  | {
      mode: "create" | "edit";
      kind: "pocket-listing";
      listingId?: string;
    }
  | null;

type WebsiteGuideStep = "idle" | "blocked" | "highlight-listings";

const emptyMlsFeedFormValues: MlsFeedFormValues = {
  sourceName: "",
  agentId: "",
  referenceId: "",
  enabled: true
};

const emptyPocketListingFormValues: PocketListingFormValues = {
  sourceName: "",
  contactName: "",
  availability: "",
  headline: "",
  address: "",
  city: "",
  state: "AZ",
  zip: "",
  price: "",
  bedrooms: "",
  bathrooms: "",
  squareFeet: "",
  neighborhood: "",
  trend: "",
  imageUrl: "",
  description: "",
  enabled: true
};

const emptySnapshot: OnboardingSnapshot = {
  selectedRole: null,
  activeCardId: null,
  cardStates: {},
  subfeatureToggles: {},
  subfeatureConfigs: {},
  phase: "role-selection",
  templatePreset: null,
  pendingPrompt: null,
  launchReady: false,
  launchedMlsFeeds: [],
  launchedListings: []
};

function normalizeSnapshot(snapshot: OnboardingSnapshot): OnboardingSnapshot {
  const launchedListings = snapshot.launchedListings ?? [];
  const migratedSnapshot: OnboardingSnapshot = {
    ...snapshot,
    launchedMlsFeeds:
      snapshot.launchedMlsFeeds && snapshot.launchedMlsFeeds.length
        ? snapshot.launchedMlsFeeds
        : launchedListings
            .filter((listing) => listing.type === "mlx")
            .map((listing) => ({
              id: listing.id,
              sourceName: listing.sourceName,
              agentId: listing.agentId ?? "",
              referenceId: listing.referenceId ?? "",
              enabled: listing.enabled
            })),
    launchedListings: launchedListings.filter((listing) => listing.type === "pocket")
  };

  return {
    ...migratedSnapshot,
    launchReady: deriveLaunchReady(migratedSnapshot)
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

function buildMlsFeedFormValues(feed?: LaunchedMlsFeed): MlsFeedFormValues {
  if (feed) {
    return {
      sourceName: feed.sourceName,
      agentId: feed.agentId,
      referenceId: feed.referenceId,
      enabled: feed.enabled
    };
  }

  return {
    ...emptyMlsFeedFormValues,
    sourceName: "Phoenix Valley MLS"
  };
}

function buildPocketListingFormValues(listing?: LaunchedListing): PocketListingFormValues {
  if (listing) {
    return {
      sourceName: listing.sourceName,
      contactName: listing.contactName ?? "",
      availability: listing.availability ?? "",
      headline: listing.headline,
      address: listing.address,
      city: listing.city,
      state: listing.state,
      zip: listing.zip,
      price: String(listing.price),
      bedrooms: String(listing.bedrooms),
      bathrooms: String(listing.bathrooms),
      squareFeet: String(listing.squareFeet),
      neighborhood: listing.neighborhood,
      trend: listing.trend,
      imageUrl: listing.imageUrl,
      description: listing.description,
      enabled: listing.enabled
    };
  }

  return {
    ...emptyPocketListingFormValues,
    sourceName: "Private Client Circle"
  };
}

function createMlsFeedId() {
  return `mlx-feed-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createPocketListingId() {
  return `pocket-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function buildMlsFeedFromForm(values: MlsFeedFormValues, existingFeedId?: string): LaunchedMlsFeed {
  return {
    id: existingFeedId ?? createMlsFeedId(),
    sourceName: values.sourceName.trim(),
    agentId: values.agentId.trim(),
    referenceId: values.referenceId.trim(),
    enabled: values.enabled
  };
}

function buildPocketListingFromForm(values: PocketListingFormValues, existingListingId?: string): LaunchedListing {
  return {
    id: existingListingId ?? createPocketListingId(),
    type: "pocket",
    sourceName: values.sourceName.trim(),
    contactName: values.contactName.trim() || undefined,
    availability: values.availability.trim() || undefined,
    headline: values.headline.trim(),
    address: values.address.trim(),
    city: values.city.trim(),
    state: values.state.trim().toUpperCase(),
    zip: values.zip.trim(),
    price: Number(values.price),
    bedrooms: Number(values.bedrooms),
    bathrooms: Number(values.bathrooms),
    squareFeet: Number(values.squareFeet),
    neighborhood: values.neighborhood.trim(),
    trend: values.trend.trim(),
    imageUrl: values.imageUrl.trim(),
    description: values.description.trim(),
    enabled: values.enabled
  };
}

function getDemoMlsFeedFormValues(existingCount: number): MlsFeedFormValues {
  const demoListing = demoMlxListings[existingCount % demoMlxListings.length];
  return {
    ...emptyMlsFeedFormValues,
    sourceName: demoListing.sourceName.replace("MLX", "MLS"),
    agentId: demoListing.agentId ?? "",
    referenceId: demoListing.referenceId ?? "",
    enabled: true
  };
}

function getDemoPocketListingFormValues(existingCount: number): PocketListingFormValues {
  const demoListing = demoPocketListings[existingCount % demoPocketListings.length];

  return {
    ...emptyPocketListingFormValues,
    ...demoListing,
    price: String(demoListing.price),
    bedrooms: String(demoListing.bedrooms),
    bathrooms: String(demoListing.bathrooms),
    squareFeet: String(demoListing.squareFeet),
    enabled: true
  };
}

function getListingTypeLabel(listingType: LaunchedListingType) {
  return listingType === "mlx" ? "MLS feed" : "Pocket listing";
}

function validateMlsFeedForm(values: MlsFeedFormValues) {
  const requiredFields = [
    ["sourceName", values.sourceName],
    ["agentId", values.agentId],
    ["referenceId", values.referenceId]
  ];

  return requiredFields.every(([, value]) => String(value ?? "").trim() !== "");
}

function validatePocketListingForm(values: PocketListingFormValues) {
  const requiredFields = [
    ["sourceName", values.sourceName],
    ["contactName", values.contactName],
    ["availability", values.availability],
    ["headline", values.headline],
    ["address", values.address],
    ["city", values.city],
    ["state", values.state],
    ["zip", values.zip],
    ["price", values.price],
    ["bedrooms", values.bedrooms],
    ["bathrooms", values.bathrooms],
    ["squareFeet", values.squareFeet],
    ["neighborhood", values.neighborhood],
    ["trend", values.trend],
    ["imageUrl", values.imageUrl],
    ["description", values.description]
  ];

  return requiredFields.every(([, value]) => String(value ?? "").trim() !== "");
}

function deriveListingsFromMlsFeeds(feeds: LaunchedMlsFeed[]): LaunchedListing[] {
  return feeds.map((feed, index) => {
    const demoListing = demoMlxListings[index % demoMlxListings.length];

    return {
      ...demoListing,
      id: `mlx-derived-${feed.id}`,
      type: "mlx",
      sourceName: feed.sourceName,
      agentId: feed.agentId,
      referenceId: feed.referenceId,
      enabled: feed.enabled
    };
  });
}

function createBuilderSnapshot(roleId: RoleId, mode: "empty" | "auto"): OnboardingSnapshot {
  return normalizeSnapshot({
    ...emptySnapshot,
    selectedRole: roleId,
    cardStates: mode === "auto" ? buildAutoselectedCardStates(roleId) : buildInitialCardStates(),
    subfeatureToggles: mode === "auto" ? buildAutoselectedToggleStore(roleId) : buildInitialToggleStore(roleId),
    subfeatureConfigs: mode === "auto" ? buildAutoselectedConfigStore(roleId) : buildInitialConfigStore(roleId),
    phase: "builder"
  });
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
    setSnapshot(loadSnapshot());
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
    setSnapshot(createBuilderSnapshot(role.id, "auto"));
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

  function resetSelections() {
    if (!snapshot.selectedRole) {
      return;
    }
    setSnapshot(createBuilderSnapshot(snapshot.selectedRole, "empty"));
    setSelectedCardId(null);
    setSelectedSubfeatureId(null);
    setCardQuery("");
    setMobileLibraryOpen(false);
    setShowLaunchConfirm(false);
    setPromptValues({});
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function autoBuildSelections() {
    if (!snapshot.selectedRole) {
      return;
    }
    setSnapshot(createBuilderSnapshot(snapshot.selectedRole, "auto"));
    setSelectedCardId(null);
    setSelectedSubfeatureId(null);
    setCardQuery("");
    setMobileLibraryOpen(false);
    setShowLaunchConfirm(false);
    setPromptValues({});
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
            onUpdateSnapshot={updateSnapshot}
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
              <button className="secondary-button" onClick={resetSelections}>
                Reset selections
              </button>
              <button className="secondary-button" onClick={autoBuildSelections}>
                Auto build
              </button>
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
  onReset,
  onUpdateSnapshot
}: {
  role: RoleDefinition;
  builtCards: LibraryCardDefinition[];
  optionalCardsRemaining: LibraryCardDefinition[];
  snapshot: OnboardingSnapshot;
  onReset: () => void;
  onUpdateSnapshot: (updater: (current: OnboardingSnapshot) => OnboardingSnapshot) => void;
}) {
  const launchedCards = builtCards
    .map((card) => ({
      card,
      enabledSubfeatures: card.subfeatures.filter((subfeature) => snapshot.subfeatureToggles[card.id]?.[subfeature.id])
    }))
    .filter((item) => item.enabledSubfeatures.length > 0);
  const launchedNavItems = useMemo(() => buildLaunchedNavItems(launchedCards), [launchedCards]);

  const [activeView, setActiveView] = useState<LaunchedShellView>("home");
  const [peopleViewId, setPeopleViewId] = useState<LeadViewId>("all-leads");
  const [activeDemoProfile, setActiveDemoProfile] = useState<NegotiationShellProfile>("seller_agent");
  const [showProfileSwitch, setShowProfileSwitch] = useState(false);
  const [contentEditor, setContentEditor] = useState<ContentEditorState>(null);
  const [showIdxPreview, setShowIdxPreview] = useState(false);
  const [websiteGuideStep, setWebsiteGuideStep] = useState<WebsiteGuideStep>("idle");
  const negotiationFeature = useNegotiationFeatureState(DEMO_LISTING_ID);

  const people = useMemo(() => getDashboardPeopleForRole(role.id), [role.id]);
  const peopleViewItems = getPeopleViewList(peopleViewId, role.id);
  const activeDemoAccount = getProfileOption(activeDemoProfile);
  const greetingName = testUser.name;
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
  const launchedSubfeatureIds = new Set(
    launchedCards.flatMap(({ enabledSubfeatures }) => enabledSubfeatures.map((subfeature) => subfeature.id))
  );
  const launchedMlsFeeds = snapshot.launchedMlsFeeds ?? [];
  const launchedPocketListings = snapshot.launchedListings ?? [];
  const derivedMlsListings = useMemo(() => deriveListingsFromMlsFeeds(launchedMlsFeeds), [launchedMlsFeeds]);
  const enabledListings = [
    ...derivedMlsListings.filter((listing) => listing.enabled),
    ...launchedPocketListings.filter((listing) => listing.enabled)
  ];
  const canOpenListings = launchedSubfeatureIds.has("my-listings");
  const canOpenWebsites = launchedSubfeatureIds.has("websites");
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
    listings: canOpenListings,
    hotSheets: launchedSubfeatureIds.has("websites")
  };

  useEffect(() => {
    if (activeView === "crm-people" && !launchedSubfeatureIds.has("people")) {
      setActiveView("home");
    }
    if (activeView === "automation-smart-plans" && !launchedSubfeatureIds.has("smart-plans")) {
      setActiveView("home");
    }
  }, [activeView, launchedSubfeatureIds]);

  useEffect(() => {
    if (activeView === "listings" && !canOpenListings) {
      setActiveView("home");
    }
    if ((activeView === "websites" || activeView === "idx-builder") && !canOpenWebsites) {
      setActiveView("home");
    }
  }, [activeView, canOpenListings, canOpenWebsites]);

  useEffect(() => {
    if (activeView !== "websites" && websiteGuideStep !== "idle") {
      setWebsiteGuideStep("idle");
    }
  }, [activeView, websiteGuideStep]);

  function updateLaunchedMlsFeeds(updater: (current: LaunchedMlsFeed[]) => LaunchedMlsFeed[]) {
    onUpdateSnapshot((current) => ({
      ...current,
      launchedMlsFeeds: updater(current.launchedMlsFeeds ?? [])
    }));
  }

  function updatePocketListings(updater: (current: LaunchedListing[]) => LaunchedListing[]) {
    onUpdateSnapshot((current) => ({
      ...current,
      launchedListings: updater(current.launchedListings ?? [])
    }));
  }

  function handleSaveMlsFeed(nextFeed: LaunchedMlsFeed) {
    updateLaunchedMlsFeeds((current) => {
      const existingIndex = current.findIndex((feed) => feed.id === nextFeed.id);
      if (existingIndex === -1) {
        return [nextFeed, ...current];
      }
      const updatedFeeds = [...current];
      updatedFeeds[existingIndex] = nextFeed;
      return updatedFeeds;
    });
    setContentEditor(null);
  }

  function handleToggleMlsFeed(feedId: string, enabled: boolean) {
    updateLaunchedMlsFeeds((current) =>
      current.map((feed) => (feed.id === feedId ? { ...feed, enabled } : feed))
    );
  }

  function handleSavePocketListing(nextListing: LaunchedListing) {
    updatePocketListings((current) => {
      const existingIndex = current.findIndex((listing) => listing.id === nextListing.id);
      if (existingIndex === -1) {
        return [nextListing, ...current];
      }
      const updatedListings = [...current];
      updatedListings[existingIndex] = nextListing;
      return updatedListings;
    });
    setContentEditor(null);
  }

  function handleTogglePocketListing(listingId: string, enabled: boolean) {
    updatePocketListings((current) =>
      current.map((listing) => (listing.id === listingId ? { ...listing, enabled } : listing))
    );
  }

  function handleCreateIdxWebsite() {
    if (enabledListings.length === 0) {
      setWebsiteGuideStep("blocked");
      return;
    }
    setShowIdxPreview(true);
  }

  function handleConfirmIdxPreview() {
    setShowIdxPreview(false);
    setWebsiteGuideStep("idle");
    setActiveView("idx-builder");
  }

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
        headerItems={launchedNavItems}
        onStartAnotherSetup={onReset}
        onNavigateHome={() => setActiveView("home")}
        onNavigateMessages={() => setActiveView("messages")}
        onNavigateNegotiation={() => setActiveView("negotiation")}
        onNavigatePeople={() => setActiveView("crm-people")}
        onNavigateSmartPlans={() => setActiveView("automation-smart-plans")}
        onNavigateListings={() => {
          setWebsiteGuideStep("idle");
          setActiveView("listings");
        }}
        onNavigateWebsites={() => setActiveView("websites")}
        onOpenProfileSwitch={() => setShowProfileSwitch(true)}
        forcedOpenMenu={websiteGuideStep === "highlight-listings" ? "Content" : null}
        guidedSubmenuParentLabel={websiteGuideStep === "highlight-listings" ? "Content" : null}
        highlightedSubmenuLabel={websiteGuideStep === "highlight-listings" ? "Listings" : null}
        submenuGuide={
          websiteGuideStep === "highlight-listings"
            ? {
                imageSrc: dialog2Image.src,
                text: "Configure Listings here"
              }
            : null
        }
        forcedUtilityId={activeView === "idx-builder" ? "ai" : undefined}
        utilityPanelOverride={
          activeView === "idx-builder"
            ? {
                itemId: "ai",
                title: "AI Copilots",
                content: (
                  <div className="idx-builder-sidebar">
                    <span className="section-kicker">IDX Builder</span>
                    <h3>AI Copilots are standing by</h3>
                    <p>The builder canvas is ready. Kick off the first pass when you want the website draft generated.</p>
                    <button className="primary-button idx-builder-sidebar__button">
                      <WandSparkles size={16} />
                      Start building
                    </button>
                  </div>
                )
              }
            : null
        }
        shellGuidedOverlay={
          websiteGuideStep === "blocked"
            ? {
                mode: "blocked",
                onClick: () => setWebsiteGuideStep("highlight-listings"),
                content: (
                  <div className="mascot-callout mascot-callout--overlay">
                    <img src={dialog1Image.src} alt="" aria-hidden="true" />
                    <div className="mascot-callout__bubble">No Listings configured yet..</div>
                  </div>
                )
              }
            : null
        }
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
                listings={enabledListings}
                hotSheets={hotSheetItems}
                widgetAvailability={widgetAvailability}
              />
            </div>
          </div>
        ) : activeView === "crm-people" ? (
          <div className="lofty-shell-section">
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
        ) : activeView === "negotiation" ? (
          <NegotiationWorkspace
            profile={activeDemoProfile}
            feature={negotiationFeature}
            onOpenProfileSwitch={() => setShowProfileSwitch(true)}
          />
        ) : activeView === "automation-smart-plans" ? (
          <div className="lofty-shell-section">
            <SmartPlansWorkspace role={role} />
          </div>
        ) : activeView === "listings" ? (
          <ListingsWorkspace
            mlsFeeds={launchedMlsFeeds}
            pocketListings={launchedPocketListings}
            enabledListingCount={enabledListings.length}
            onCreateMlsFeed={() => setContentEditor({ mode: "create", kind: "mls-feed" })}
            onEditMlsFeed={(feed) => setContentEditor({ mode: "edit", kind: "mls-feed", feedId: feed.id })}
            onToggleMlsFeed={handleToggleMlsFeed}
            onCreatePocketListing={() => setContentEditor({ mode: "create", kind: "pocket-listing" })}
            onEditPocketListing={(listing) => setContentEditor({ mode: "edit", kind: "pocket-listing", listingId: listing.id })}
            onTogglePocketListing={handleTogglePocketListing}
          />
        ) : activeView === "websites" ? (
          <WebsitesWorkspace
            enabledListingCount={enabledListings.length}
            guideStep={websiteGuideStep}
            onCreateIdxWebsite={handleCreateIdxWebsite}
          />
        ) : (
          <IdxBuilderWorkspace enabledListings={enabledListings} />
        )}
      </LoftyLaunchedShell>
      {showProfileSwitch ? (
        <ProfileSwitchModal
          activeProfile={activeDemoProfile}
          onClose={() => setShowProfileSwitch(false)}
          onSelectProfile={handleSelectDemoProfile}
        />
      ) : null}
      {contentEditor?.kind === "mls-feed" ? (
        <MlsFeedEditorModal
          existingFeed={contentEditor.feedId ? launchedMlsFeeds.find((feed) => feed.id === contentEditor.feedId) ?? null : null}
          existingCount={launchedMlsFeeds.length}
          onClose={() => setContentEditor(null)}
          onSave={handleSaveMlsFeed}
        />
      ) : null}
      {contentEditor?.kind === "pocket-listing" ? (
        <PocketListingEditorModal
          existingListing={
            contentEditor.listingId
              ? launchedPocketListings.find((listing) => listing.id === contentEditor.listingId) ?? null
              : null
          }
          existingCount={launchedPocketListings.length}
          onClose={() => setContentEditor(null)}
          onSave={handleSavePocketListing}
        />
      ) : null}
      {showIdxPreview ? (
        <IdxPreviewModal listings={enabledListings} onClose={() => setShowIdxPreview(false)} onConfirm={handleConfirmIdxPreview} />
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
  listings: LaunchedListing[];
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

      <DashboardWidget title="Listings">
        {widgetAvailability.listings ? (
          listings.length ? (
            <div className="compact-list">
              {listings.map((listing) => (
                <div key={listing.id} className="compact-list-item">
                  <div>
                    <strong>{listing.address}</strong>
                    <span>{formatListingLocation(listing)}</span>
                    <small>{listing.trend}</small>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyWidgetState message="No enabled listings yet. Open Content > Listings to configure MLS feeds or pocket listings for your website." />
          )
        ) : (
          <EmptyWidgetState message="Build Content > Listings to bring property activity into the dashboard." />
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

function ListingsWorkspace({
  mlsFeeds,
  pocketListings,
  enabledListingCount,
  onCreateMlsFeed,
  onEditMlsFeed,
  onToggleMlsFeed,
  onCreatePocketListing,
  onEditPocketListing,
  onTogglePocketListing
}: {
  mlsFeeds: LaunchedMlsFeed[];
  pocketListings: LaunchedListing[];
  enabledListingCount: number;
  onCreateMlsFeed: () => void;
  onEditMlsFeed: (feed: LaunchedMlsFeed) => void;
  onToggleMlsFeed: (feedId: string, enabled: boolean) => void;
  onCreatePocketListing: () => void;
  onEditPocketListing: (listing: LaunchedListing) => void;
  onTogglePocketListing: (listingId: string, enabled: boolean) => void;
}) {
  return (
    <section className="listings-workspace">
      <div className="listings-workspace__hero">
        <div>
          <p className="section-kicker">Content</p>
          <h2>Listings</h2>
          <p>Configure MLS feeds and pocket listings here. Enabled feeds and properties will populate the dashboard and your IDX website preview.</p>
        </div>
        <div className="chip-wrap">
          <span className="mini-chip mini-chip--success">{enabledListingCount} enabled</span>
          <span className="mini-chip">{mlsFeeds.length + pocketListings.length} saved</span>
        </div>
      </div>

      <div className="listings-workspace__grid">
        <MlsFeedCollectionCard
          feeds={mlsFeeds}
          onAdd={onCreateMlsFeed}
          onEdit={onEditMlsFeed}
          onToggleFeed={onToggleMlsFeed}
        />
        <PocketListingCollectionCard
          title="Pocket listings"
          subtitle="Add off-market inventory and keep it ready for previews and private website builds."
          listings={pocketListings}
          addButtonLabel="New pocket listing"
          onAdd={onCreatePocketListing}
          onEdit={onEditPocketListing}
          onToggleListing={onTogglePocketListing}
        />
      </div>
    </section>
  );
}

function MlsFeedCollectionCard({
  feeds,
  onAdd,
  onEdit,
  onToggleFeed
}: {
  feeds: LaunchedMlsFeed[];
  onAdd: () => void;
  onEdit: (feed: LaunchedMlsFeed) => void;
  onToggleFeed: (feedId: string, enabled: boolean) => void;
}) {
  return (
    <article className="listing-collection-card">
      <div className="listing-collection-card__header">
        <div>
          <h3>MLS feeds</h3>
          <p>Connect MLS feeds that should provide listing inventory to your website preview and dashboard.</p>
        </div>
        <button className="secondary-button" onClick={onAdd}>
          <Plus size={16} />
          New MLS feed
        </button>
      </div>

      {feeds.length ? (
        <div className="listing-management-list">
          {feeds.map((feed) => (
            <article key={feed.id} className="listing-management-card">
              <div className="chip-wrap">
                <span className="mini-badge">MLS feed</span>
                <span className={`mini-badge ${feed.enabled ? "mini-badge--built" : ""}`}>{feed.enabled ? "Enabled" : "Disabled"}</span>
              </div>
              <div className="listing-management-card__body">
                <div className="listing-management-card__title-row">
                  <div>
                    <strong>{feed.sourceName}</strong>
                    <span>Feed ID {feed.referenceId}</span>
                  </div>
                  <strong className="listing-management-card__price">Agent ID {feed.agentId}</strong>
                </div>
                <p>Sample MLS listings from this feed will power the dashboard, IDX preview, and builder handoff.</p>
                <div className="listing-management-card__meta">
                  <span>Source {feed.sourceName}</span>
                  <span>Reference {feed.referenceId}</span>
                </div>
                <small>Feed configuration stays local in this demo and uses fixture-backed listings for preview output.</small>
              </div>
              <div className="listing-management-card__actions">
                <button className="secondary-button" onClick={() => onEdit(feed)}>
                  Edit feed
                </button>
                <button
                  type="button"
                  className={`toggle-button toggle-button--switch ${feed.enabled ? "toggle-button--on" : ""}`}
                  aria-pressed={feed.enabled}
                  onClick={() => onToggleFeed(feed.id, !feed.enabled)}
                >
                  <span />
                  <span className="sr-only">{feed.enabled ? "Disable MLS feed" : "Enable MLS feed"}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="workspace-empty-card">
          <Layers3 size={24} />
          <h4>No MLS feeds configured</h4>
          <p>Use the feed setup form to connect your first MLS feed. Demo fill will preload a sample feed you can save immediately.</p>
        </div>
      )}
    </article>
  );
}

function PocketListingCollectionCard({
  title,
  subtitle,
  listings,
  addButtonLabel,
  onAdd,
  onEdit,
  onToggleListing
}: {
  title: string;
  subtitle: string;
  listings: LaunchedListing[];
  addButtonLabel: string;
  onAdd: () => void;
  onEdit: (listing: LaunchedListing) => void;
  onToggleListing: (listingId: string, enabled: boolean) => void;
}) {
  return (
    <article className="listing-collection-card">
      <div className="listing-collection-card__header">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <button className="secondary-button" onClick={onAdd}>
          <Plus size={16} />
          {addButtonLabel}
        </button>
      </div>

      {listings.length ? (
        <div className="listing-management-list">
          {listings.map((listing) => (
            <article key={listing.id} className="listing-management-card">
              <div className="listing-management-card__image-wrap">
                <img src={listing.imageUrl} alt={listing.address} />
                <div className="chip-wrap">
                  <span className="mini-badge">{getListingTypeLabel(listing.type)}</span>
                  <span className={`mini-badge ${listing.enabled ? "mini-badge--built" : ""}`}>{listing.enabled ? "Enabled" : "Disabled"}</span>
                </div>
              </div>
              <div className="listing-management-card__body">
                <div className="listing-management-card__title-row">
                  <div>
                    <strong>{listing.address}</strong>
                    <span>{formatListingLocation(listing)}</span>
                  </div>
                  <strong className="listing-management-card__price">{formatCurrency(listing.price)}</strong>
                </div>
                <p>{listing.headline}</p>
                <div className="listing-management-card__meta">
                  <span>{listing.bedrooms} BR</span>
                  <span>{listing.bathrooms} BA</span>
                  <span>{listing.squareFeet.toLocaleString()} sqft</span>
                  <span>{listing.neighborhood}</span>
                </div>
                <small>{listing.trend}</small>
              </div>
              <div className="listing-management-card__actions">
                <button className="secondary-button" onClick={() => onEdit(listing)}>
                  Edit details
                </button>
                <button
                  type="button"
                  className={`toggle-button toggle-button--switch ${listing.enabled ? "toggle-button--on" : ""}`}
                  aria-pressed={listing.enabled}
                  onClick={() => onToggleListing(listing.id, !listing.enabled)}
                >
                  <span />
                  <span className="sr-only">{listing.enabled ? "Disable listing" : "Enable listing"}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="workspace-empty-card">
          <Layers3 size={24} />
          <h4>No {title.toLowerCase()} configured</h4>
          <p>Use the setup form to add your first property. Demo fill will preload sample data you can save immediately.</p>
        </div>
      )}
    </article>
  );
}

function WebsitesWorkspace({
  enabledListingCount,
  guideStep,
  onCreateIdxWebsite
}: {
  enabledListingCount: number;
  guideStep: WebsiteGuideStep;
  onCreateIdxWebsite: () => void;
}) {
  return (
    <section className="websites-workspace">
      <div className={`websites-empty-state ${guideStep === "blocked" ? "websites-empty-state--guided" : ""}`.trim()}>
        <div className="websites-empty-state__copy">
          <p className="section-kicker">Content</p>
          <h2>Websites</h2>
          <p>No websites created yet.</p>
          <small>
            {enabledListingCount
              ? `${enabledListingCount} enabled listing${enabledListingCount === 1 ? "" : "s"} ready for IDX preview.`
              : "Enable at least one MLS feed or pocket listing before creating an IDX website."}
          </small>
        </div>
        <div className="websites-empty-state__cta-wrap">
          <button className="launch-button websites-empty-state__cta" onClick={onCreateIdxWebsite}>
            <ExternalLink size={16} />
            create an IDX website
          </button>
        </div>
      </div>
    </section>
  );
}

function IdxBuilderWorkspace({ enabledListings }: { enabledListings: LaunchedListing[] }) {
  return (
    <section className="idx-builder-workspace">
      <div className="idx-builder-workspace__hero">
        <div>
          <p className="section-kicker">Websites</p>
          <h2>IDX Builder</h2>
          <p>The website builder shell is ready. The content canvas stays empty for now while the AI sidebar takes over the next step.</p>
        </div>
        <div className="chip-wrap">
          <span className="mini-chip mini-chip--success">{enabledListings.length} preview listings connected</span>
        </div>
      </div>
      <div className="idx-builder-canvas idx-builder-canvas--disabled">
        <div className="idx-builder-canvas__veil" />
        <div className="idx-builder-canvas__copy">
          <h3>IDX builder content goes here</h3>
          <p>The canvas is intentionally greyed out until the AI Copilots sidebar starts generating the first website draft.</p>
          <div className="chip-wrap">
            {enabledListings.map((listing) => (
              <span key={listing.id} className="mini-chip">
                {listing.address}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MlsFeedEditorModal({
  existingFeed,
  existingCount,
  onClose,
  onSave
}: {
  existingFeed: LaunchedMlsFeed | null;
  existingCount: number;
  onClose: () => void;
  onSave: (feed: LaunchedMlsFeed) => void;
}) {
  const [formValues, setFormValues] = useState<MlsFeedFormValues>(buildMlsFeedFormValues(existingFeed ?? undefined));

  useEffect(() => {
    setFormValues(buildMlsFeedFormValues(existingFeed ?? undefined));
  }, [existingFeed]);

  const isValid = validateMlsFeedForm(formValues);

  function updateField(field: keyof MlsFeedFormValues, value: string | boolean) {
    setFormValues((current) => ({
      ...current,
      [field]: value
    }));
  }

  return (
    <ModalFrame
      title={`${existingFeed ? "Edit" : "Create"} MLS feed`}
      subtitle="Set up the MLS feed connection that should supply demo-backed listings for website creation."
      onClose={onClose}
      panelClassName="modal-panel--wide"
    >
      <div className="listing-editor-modal">
        <div className="listing-editor-modal__actions">
          <button className="secondary-button" onClick={() => setFormValues(getDemoMlsFeedFormValues(existingCount))}>
            <WandSparkles size={16} />
            Demo fill
          </button>
          <button
            type="button"
            className={`toggle-button ${formValues.enabled ? "toggle-button--on" : ""}`}
            onClick={() => updateField("enabled", !formValues.enabled)}
          >
            {formValues.enabled ? "Enabled for website" : "Save disabled"}
          </button>
        </div>

        <div className="listing-form-grid">
          <label className="field-block">
            <div className="field-label-row">
              <span>MLS source</span>
              <small>Required</small>
            </div>
            <input value={formValues.sourceName} onChange={(event) => updateField("sourceName", event.target.value)} />
            <p>Name of the MLS feed that should supply listings to the website preview.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Listing Agent ID</span>
              <small>Required</small>
            </div>
            <input value={formValues.agentId} onChange={(event) => updateField("agentId", event.target.value)} />
            <p>Enter the agent identifier used to match listings from this feed.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Feed reference ID</span>
              <small>Required</small>
            </div>
            <input value={formValues.referenceId} onChange={(event) => updateField("referenceId", event.target.value)} />
            <p>Use the MLS, IDX, or internal feed identifier that distinguishes this connection.</p>
          </label>
        </div>

        <div className="panel-button-row">
          <button className="secondary-button" onClick={onClose}>
            Cancel
          </button>
          <button
            className="primary-button"
            disabled={!isValid}
            onClick={() => onSave(buildMlsFeedFromForm(formValues, existingFeed?.id))}
          >
            Save MLS feed
          </button>
        </div>
      </div>
    </ModalFrame>
  );
}

function PocketListingEditorModal({
  existingListing,
  existingCount,
  onClose,
  onSave
}: {
  existingListing: LaunchedListing | null;
  existingCount: number;
  onClose: () => void;
  onSave: (listing: LaunchedListing) => void;
}) {
  const [formValues, setFormValues] = useState<PocketListingFormValues>(buildPocketListingFormValues(existingListing ?? undefined));

  useEffect(() => {
    setFormValues(buildPocketListingFormValues(existingListing ?? undefined));
  }, [existingListing]);

  const isValid = validatePocketListingForm(formValues);

  function updateField(field: keyof PocketListingFormValues, value: string | boolean) {
    setFormValues((current) => ({
      ...current,
      [field]: value
    }));
  }

  return (
    <ModalFrame
      title={`${existingListing ? "Edit" : "Create"} Pocket listing`}
      subtitle="Set up the off-market property details that should be available for website creation."
      onClose={onClose}
      panelClassName="modal-panel--wide"
    >
      <div className="listing-editor-modal">
        <div className="listing-editor-modal__actions">
          <button className="secondary-button" onClick={() => setFormValues(getDemoPocketListingFormValues(existingCount))}>
            <WandSparkles size={16} />
            Demo fill
          </button>
          <button
            type="button"
            className={`toggle-button ${formValues.enabled ? "toggle-button--on" : ""}`}
            onClick={() => updateField("enabled", !formValues.enabled)}
          >
            {formValues.enabled ? "Enabled for website" : "Save disabled"}
          </button>
        </div>

        <div className="listing-form-grid">
          <label className="field-block">
            <div className="field-label-row">
              <span>Pocket source</span>
              <small>Required</small>
            </div>
            <input value={formValues.sourceName} onChange={(event) => updateField("sourceName", event.target.value)} />
            <p>Private network or office channel this listing belongs to.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Seller contact</span>
              <small>Required</small>
            </div>
            <input value={formValues.contactName} onChange={(event) => updateField("contactName", event.target.value)} />
            <p>Primary contact for the off-market opportunity.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Availability</span>
              <small>Required</small>
            </div>
            <input value={formValues.availability} onChange={(event) => updateField("availability", event.target.value)} />
            <p>Set expectations for private tours and timing.</p>
          </label>

          <label className="field-block field-block--wide">
            <div className="field-label-row">
              <span>Headline</span>
              <small>Required</small>
            </div>
            <input value={formValues.headline} onChange={(event) => updateField("headline", event.target.value)} />
            <p>Short summary that will appear in the preview and listing cards.</p>
          </label>

          <label className="field-block field-block--wide">
            <div className="field-label-row">
              <span>Street address</span>
              <small>Required</small>
            </div>
            <input value={formValues.address} onChange={(event) => updateField("address", event.target.value)} />
            <p>Use the public-facing property address for website previews.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>City</span>
              <small>Required</small>
            </div>
            <input value={formValues.city} onChange={(event) => updateField("city", event.target.value)} />
            <p>City used in dashboard and IDX cards.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>State</span>
              <small>Required</small>
            </div>
            <input value={formValues.state} onChange={(event) => updateField("state", event.target.value)} />
            <p>Two-letter state code.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>ZIP</span>
              <small>Required</small>
            </div>
            <input value={formValues.zip} onChange={(event) => updateField("zip", event.target.value)} />
            <p>ZIP code for the listing address.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Price</span>
              <small>Required</small>
            </div>
            <input type="number" min="0" value={formValues.price} onChange={(event) => updateField("price", event.target.value)} />
            <p>Use the current list price that should appear in the website preview.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Bedrooms</span>
              <small>Required</small>
            </div>
            <input type="number" min="0" value={formValues.bedrooms} onChange={(event) => updateField("bedrooms", event.target.value)} />
            <p>Total bedrooms.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Bathrooms</span>
              <small>Required</small>
            </div>
            <input type="number" min="0" step="0.5" value={formValues.bathrooms} onChange={(event) => updateField("bathrooms", event.target.value)} />
            <p>Total bathrooms.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Square feet</span>
              <small>Required</small>
            </div>
            <input type="number" min="0" value={formValues.squareFeet} onChange={(event) => updateField("squareFeet", event.target.value)} />
            <p>Interior living area.</p>
          </label>

          <label className="field-block">
            <div className="field-label-row">
              <span>Neighborhood</span>
              <small>Required</small>
            </div>
            <input value={formValues.neighborhood} onChange={(event) => updateField("neighborhood", event.target.value)} />
            <p>Helps the preview feel grounded in place.</p>
          </label>

          <label className="field-block field-block--wide">
            <div className="field-label-row">
              <span>Listing trend</span>
              <small>Required</small>
            </div>
            <input value={formValues.trend} onChange={(event) => updateField("trend", event.target.value)} />
            <p>Short dashboard-friendly status or momentum note.</p>
          </label>

          <label className="field-block field-block--wide">
            <div className="field-label-row">
              <span>Hero image URL</span>
              <small>Required</small>
            </div>
            <input value={formValues.imageUrl} onChange={(event) => updateField("imageUrl", event.target.value)} />
            <p>Used in the listing setup cards and IDX preview modal.</p>
          </label>

          <label className="field-block field-block--wide">
            <div className="field-label-row">
              <span>Description</span>
              <small>Required</small>
            </div>
            <textarea value={formValues.description} onChange={(event) => updateField("description", event.target.value)} />
            <p>Longer description shown in the property preview before the IDX builder opens.</p>
          </label>
        </div>

        <div className="panel-button-row">
          <button className="secondary-button" onClick={onClose}>
            Cancel
          </button>
          <button
            className="primary-button"
            disabled={!isValid}
            onClick={() => onSave(buildPocketListingFromForm(formValues, existingListing?.id))}
          >
            Save pocket listing
          </button>
        </div>
      </div>
    </ModalFrame>
  );
}

function IdxPreviewModal({
  listings,
  onClose,
  onConfirm
}: {
  listings: LaunchedListing[];
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <ModalFrame
      title="Preview listings for the IDX website"
      subtitle="Review the enabled properties that will seed the website before opening the builder."
      onClose={onClose}
      panelClassName="modal-panel--wide"
    >
      <div className="idx-preview-modal">
        <div className="idx-preview-list">
          {listings.map((listing) => (
            <article key={listing.id} className="idx-preview-card">
              <img src={listing.imageUrl} alt={listing.address} />
              <div className="idx-preview-card__body">
                <div className="idx-preview-card__header">
                  <div>
                    <strong>{listing.address}</strong>
                    <span>{formatListingLocation(listing)}</span>
                  </div>
                  <strong>{formatCurrency(listing.price)}</strong>
                </div>
                <div className="chip-wrap">
                  <span className="mini-badge">{getListingTypeLabel(listing.type)}</span>
                  <span className="mini-badge">{listing.bedrooms} BR</span>
                  <span className="mini-badge">{listing.bathrooms} BA</span>
                  <span className="mini-badge">{listing.squareFeet.toLocaleString()} sqft</span>
                </div>
                <p>{listing.headline}</p>
                <small>{listing.description}</small>
              </div>
            </article>
          ))}
        </div>
        <div className="panel-button-row">
          <button className="secondary-button" onClick={onClose}>
            Back
          </button>
          <button className="primary-button" onClick={onConfirm}>
            Open builder
          </button>
        </div>
      </div>
    </ModalFrame>
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
  children,
  panelClassName = ""
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
  panelClassName?: string;
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={`modal-panel ${panelClassName}`.trim()} onClick={(event) => event.stopPropagation()}>
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
