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

type DashboardWorkflowTask = {
  id: string;
  title: string;
  personName: string;
  timeLabel: string;
  plannedStartMinutes: number;
  durationLabel: string;
  taskType: "Call" | "Text" | "Email" | "Other" | "Appointment" | "Showing";
  dueState: "overdue" | "today";
  dueLabel: string;
  priorityScore: number;
  reason: string;
  context: string;
  detailSummary: string;
  suggestedScript: string;
  nextStep: string;
  interestedListing: string;
  contactLine: string;
  statusTone: "urgent" | "action" | "watch";
  statusLabel: string;
  metadata: string[];
  hasMeetingPrep: boolean;
  transactionStatus: string | null;
  appointmentLabel: string | null;
  isScheduledEvent?: boolean;
};

function parseClockTime(label: string) {
  const match = label.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i);
  if (!match) {
    return null;
  }
  const hours = Number(match[1]) % 12;
  const minutes = Number(match[2]);
  const meridiem = match[3].toUpperCase();
  return (meridiem === "PM" ? hours + 12 : hours) * 60 + minutes;
}

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
                  <h1>👋 Hi, Ryan!</h1>
                </div>
              </div>

              <DashboardHome
                updates={dashboardUpdates}
                people={people}
                newLeads={newLeads}
                keepInTouchLeads={keepInTouchLeads}
                opportunityLeads={opportunityLeads}
                opportunityCounts={opportunityCounts}
                tasks={tasks}
                appointments={appointments}
                showings={showings}
                transactions={transactions}
                listings={enabledListings}
                hotSheets={hotSheetItems}
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
  people,
  newLeads,
  keepInTouchLeads,
  opportunityLeads,
  opportunityCounts,
  tasks,
  appointments,
  showings,
  transactions,
  listings,
  hotSheets
}: {
  updates: typeof dashboardUpdates;
  people: DashboardPerson[];
  newLeads: DashboardPerson[];
  keepInTouchLeads: DashboardPerson[];
  opportunityLeads: DashboardPerson[];
  opportunityCounts: {
    highInterest: number;
    likelySellers: number;
    backToSite: number;
  };
  tasks: Array<{ id: string; type: string; title: string; timeLabel: string; personName: string }>;
  appointments: Array<{ id: string; title: string; timeLabel: string; personName: string; incomplete?: boolean }>;
  showings: Array<{ id: string; title: string; timeLabel: string; personName: string; incomplete?: boolean }>;
  transactions: Array<{ id: string; address: string; status: string; checklistCount: number; personName: string }>;
  listings: LaunchedListing[];
  hotSheets: typeof hotSheetItems;
}) {
  const [scheduleTab, setScheduleTab] = useState<"appointments" | "showings">("appointments");
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [deferredTaskIds, setDeferredTaskIds] = useState<string[]>([]);
  const [promotedSoonIds, setPromotedSoonIds] = useState<string[]>([]);

  const untouchedCount = newLeads.filter((lead) => lead.untouched).length;
  const transactionNearDeadline = transactions.filter((item) => item.status === "Near Deadline").length;
  const transactionExpired = transactions.filter((item) => item.status === "Expired").length;
  const scheduleItems = scheduleTab === "appointments" ? appointments : showings;
  const sortedScheduleItems = [...scheduleItems].sort((left, right) => {
    const leftTime = parseClockTime(left.timeLabel) ?? Number.MAX_SAFE_INTEGER;
    const rightTime = parseClockTime(right.timeLabel) ?? Number.MAX_SAFE_INTEGER;
    return leftTime - rightTime;
  });
  const scheduleTotal = scheduleItems.length;
  const scheduleIncomplete = scheduleItems.filter((item) => item.incomplete).length;
  const enabledListingsPreview = listings.slice(0, 3);
  const hotSheetPreview = hotSheets.slice(0, 4);

  const peopleByName = useMemo(() => new Map(people.map((person) => [person.name, person])), [people]);

  const workflowTasks = useMemo(() => {
    const parseTimeLabel = (label: string) => parseClockTime(label);

    const formatMinutes = (minutes: number) => {
      const normalized = ((minutes % (24 * 60)) + 24 * 60) % (24 * 60);
      const hour24 = Math.floor(normalized / 60);
      const mins = normalized % 60;
      const meridiem = hour24 >= 12 ? "PM" : "AM";
      const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
      return `${hour12}:${String(mins).padStart(2, "0")} ${meridiem}`;
    };

    const inferDurationMinutes = (taskType: DashboardWorkflowTask["taskType"]) => {
      switch (taskType) {
        case "Call":
          return 15;
        case "Text":
          return 10;
        case "Email":
          return 20;
        case "Appointment":
          return 45;
        case "Showing":
          return 60;
        default:
          return 30;
      }
    };

    const scheduledEvents: DashboardWorkflowTask[] = people
      .flatMap((person) =>
        person.appointments
          .filter((appointment) => appointment.incomplete)
          .map((appointment, index) => {
            const startMinutes = parseTimeLabel(appointment.timeLabel) ?? 9 * 60 + index * 60;
            const durationMinutes = inferDurationMinutes(appointment.type);
            return {
              id: `schedule-${appointment.id}`,
              title: appointment.title,
              personName: person.name,
              timeLabel: formatMinutes(startMinutes),
              plannedStartMinutes: startMinutes,
              durationLabel: `${durationMinutes} min`,
              taskType: appointment.type,
              dueState: "today" as const,
              dueLabel: appointment.type === "Showing" ? "Showing today" : "Meeting today",
              priorityScore: 300 + person.score,
              reason:
                appointment.type === "Showing"
                  ? "A showing is already booked, so prep and confirmation come before everything else."
                  : "This appointment is time-bound, so it should anchor the start of the workflow.",
              context: `${person.stage} · ${person.source} · score ${person.score}`,
              detailSummary: `${person.communicationSummary} ${person.lastActivity ?? ""}`.trim(),
              suggestedScript: `Hi ${person.name}, confirming we are still set for ${appointment.title.toLowerCase()} at ${appointment.timeLabel}. Let me know if anything changed before we begin.`,
              nextStep: "Confirm the meeting, prep the context, and send anything they need before it starts.",
              interestedListing: person.interestedListing,
              contactLine: `${person.phone} · ${person.email}`,
              statusTone: "watch" as const,
              statusLabel: appointment.type,
              metadata: [person.roles.join(" · "), person.lastReply],
              hasMeetingPrep: Boolean(appointment.incomplete),
              transactionStatus: person.transaction?.status ?? null,
              appointmentLabel: `${appointment.type} · ${appointment.timeLabel}`,
              isScheduledEvent: true
            };
          })
      )
      .sort((left, right) => {
        const leftTime = parseTimeLabel(left.appointmentLabel?.split(" · ")[1] ?? left.timeLabel) ?? 0;
        const rightTime = parseTimeLabel(right.appointmentLabel?.split(" · ")[1] ?? right.timeLabel) ?? 0;
        return leftTime - rightTime;
      });

    const taskItems = tasks
      .map((task, index) => {
        const person = peopleByName.get(task.personName);
        if (!person) {
          return null;
        }
        const taskType = task.type as DashboardWorkflowTask["taskType"];

        const activeAppointment = person.appointments.find((appointment) => appointment.incomplete);
        const activeTransaction = person.transaction;
        const hasHighIntent = Boolean(person.opportunities?.includes("High Interest"));
        const hasSellerSignal = Boolean(person.opportunities?.includes("Likely Seller"));
        const isUntouched = Boolean(person.untouched);
        const isExpiredDeal = activeTransaction?.status === "Expired";
        const isPrepHeavy = Boolean(activeAppointment?.incomplete);

        const explicitTime = parseTimeLabel(task.timeLabel);
        let priorityScore = person.score + Math.max(24 - index * 2, 0);
        let dueState: "overdue" | "today" = "today";
        let dueLabel = "Do today";

        if (isUntouched) {
          priorityScore += 28;
          dueState = "overdue";
          dueLabel = "First touch overdue";
        }

        if (isExpiredDeal) {
          priorityScore += 26;
          dueState = "overdue";
          dueLabel = "Deal at risk";
        } else if (activeTransaction?.status === "Near Deadline") {
          priorityScore += 18;
        }

        if (taskType === "Call") {
          priorityScore += 14;
        }
        if (hasHighIntent) {
          priorityScore += 16;
        }
        if (hasSellerSignal) {
          priorityScore += 10;
        }
        if (isPrepHeavy) {
          priorityScore += 8;
        }
        if (task.timeLabel === "Anytime") {
          priorityScore -= 4;
        }
        if (explicitTime !== null) {
          priorityScore += 10;
        }

        const reasonParts = [
          isUntouched ? "No follow-up has gone out yet." : person.communicationSummary,
          hasHighIntent ? "They are actively engaging with listings." : person.lastActivity,
          isExpiredDeal
            ? "There is an expired transaction that needs intervention."
            : activeTransaction?.status === "Near Deadline"
              ? `${activeTransaction.checklistCount} checklist items are near deadline.`
              : activeAppointment?.incomplete
                ? `${activeAppointment.type} needs prep today.`
                : null
        ].filter(Boolean) as string[];

        const suggestedScript =
          taskType === "Call"
            ? `Hi ${person.name}, this is Ryan from Lofty. I wanted to follow up on ${person.interestedListing.toLowerCase()} and help you with the next step today.`
            : taskType === "Text"
              ? `Hi ${person.name}, I pulled the update you asked for on ${person.interestedListing}. If you want, I can send the next best options right away.`
              : taskType === "Email"
                ? `Hi ${person.name}, here is a quick recap for ${person.savedSearch ?? person.interestedListing}. I included the next listings and what I recommend you look at first.`
                : `Prepare the deliverable for ${person.name}, then send a quick confirmation so the conversation keeps moving.`;

        const nextStep =
          taskType === "Call"
            ? "Confirm needs, book the next conversation, and log objections."
            : taskType === "Text"
              ? "Send the text, watch for a reply, and promote the lead if they respond."
              : taskType === "Email"
                ? "Send the recap and schedule a reminder if there is no reply by end of day."
                : "Finish the packet, then trigger a follow-up touch from the same thread.";

        return {
          id: task.id,
          title: task.title,
          personName: person.name,
          timeLabel: explicitTime !== null ? formatMinutes(explicitTime) : task.timeLabel,
          plannedStartMinutes: explicitTime ?? -1,
          durationLabel: `${inferDurationMinutes(taskType)} min`,
          taskType,
          dueState,
          dueLabel,
          priorityScore,
          reason: reasonParts[0] ?? "This item is ready for action today.",
          context: `${person.stage} · ${person.source} · score ${person.score}`,
          detailSummary: reasonParts.slice(0, 2).join(" "),
          suggestedScript,
          nextStep,
          interestedListing: person.interestedListing,
          contactLine: `${person.phone} · ${person.email}`,
          statusTone: dueState === "overdue" ? "urgent" : hasHighIntent ? "action" : "watch",
          statusLabel: dueState === "overdue" ? "Overdue" : taskType,
          metadata: [
            person.roles.join(" · "),
            person.segments?.[0] ?? person.leadType,
            person.lastReply
          ],
          hasMeetingPrep: isPrepHeavy,
          transactionStatus: activeTransaction?.status ?? null,
          appointmentLabel: activeAppointment ? `${activeAppointment.type} · ${activeAppointment.timeLabel}` : null
        };
      })
      .filter(Boolean) as DashboardWorkflowTask[];

    const sortedTasks = taskItems.sort((left, right) => right.priorityScore - left.priorityScore);
    const occupiedStarts = new Set(
      scheduledEvents
        .map((item) => parseTimeLabel(item.appointmentLabel?.split(" · ")[1] ?? item.timeLabel))
        .filter((value): value is number => value !== null)
    );
    let fallbackMinutes = 9 * 60 + 15;

    const scheduledTasks = sortedTasks.map((item) => {
      if (parseTimeLabel(item.timeLabel) !== null) {
        return item;
      }

      while (occupiedStarts.has(fallbackMinutes)) {
        fallbackMinutes += 45;
      }
      const assignedMinutes = fallbackMinutes;
      occupiedStarts.add(assignedMinutes);
      fallbackMinutes += 45;

      return {
        ...item,
        timeLabel: formatMinutes(assignedMinutes),
        plannedStartMinutes: assignedMinutes
      };
    });

    return [...scheduledEvents, ...scheduledTasks].sort((left, right) => {
      if (left.plannedStartMinutes !== right.plannedStartMinutes) {
        return left.plannedStartMinutes - right.plannedStartMinutes;
      }
      if (left.isScheduledEvent && !right.isScheduledEvent) return -1;
      if (!left.isScheduledEvent && right.isScheduledEvent) return 1;
      return right.priorityScore - left.priorityScore;
    });
  }, [people, peopleByName, tasks]);

  const completedSet = useMemo(() => new Set(completedTaskIds), [completedTaskIds]);
  const deferredSet = useMemo(() => new Set(deferredTaskIds), [deferredTaskIds]);
  const promotedSet = useMemo(() => new Set(promotedSoonIds), [promotedSoonIds]);

  const todayFlow = workflowTasks.filter((task) => !deferredSet.has(task.id));

  const deferredTasks = workflowTasks
    .filter((task) => deferredSet.has(task.id) && !completedSet.has(task.id))
    .map((task) => ({
      id: `deferred-${task.id}`,
      sourceTaskId: task.id,
      title: task.title,
      subtitle: `${task.personName} · ${task.context}`,
      dueLabel: "Deferred from today",
      reason: "Return this to today’s flow when you have capacity.",
      tone: "watch" as const
    }));

  const mustDoSoonBase = [
    ...transactions
      .filter((transaction) => transaction.status === "Near Deadline")
      .map((transaction) => ({
        id: `soon-transaction-${transaction.id}`,
        title: `Review ${transaction.address}`,
        subtitle: `${transaction.personName} · ${transaction.checklistCount} items near deadline`,
        dueLabel: "Before next deadline",
        reason: "Protect the deal before checklist pressure turns urgent.",
        tone: "watch" as const
      })),
    ...keepInTouchLeads.map((lead) => ({
      id: `soon-relationship-${lead.id}`,
      title: `Follow up with ${lead.name}`,
      subtitle: `${lead.keepInTouch === "Birthday" ? lead.birthdayLabel : lead.followUpLabel} · ${lead.roles.join(" · ")}`,
      dueLabel: lead.keepInTouch === "Birthday" ? "This week" : "Soon",
      reason: "Keep warm relationships moving without crowding today’s queue.",
      tone: "neutral" as const
    })),
    ...opportunityLeads
      .filter((lead) => !todayFlow.some((task) => task.personName === lead.name))
      .map((lead) => ({
        id: `soon-opportunity-${lead.id}`,
        title: `Work ${lead.name}'s ${lead.opportunities?.[0]?.toLowerCase() ?? "signal"}`,
        subtitle: `${lead.interestedListing} · score ${lead.score}`,
        dueLabel: "Next up",
        reason: "High-signal behavior is worth pulling into today if capacity opens up.",
        tone: "action" as const
      }))
  ];

  const mustDoSoon = [...mustDoSoonBase.filter((item) => !promotedSet.has(item.id)), ...deferredTasks].slice(0, 6);
  const promotedSoonItems = mustDoSoonBase.filter((item) => promotedSet.has(item.id) && !completedSet.has(item.id));

  const promotedIntoToday: DashboardWorkflowTask[] = promotedSoonItems.map((item, index) => ({
    id: item.id,
    title: item.title,
    personName: item.subtitle.split(" · ")[0] ?? "Shared workflow",
    timeLabel: item.dueLabel,
    plannedStartMinutes: 16 * 60 + index * 30,
    durationLabel: "20 min",
    taskType: "Other" as const,
    dueState: "today" as const,
    dueLabel: "Promoted",
    priorityScore: 999 - index,
    reason: item.reason,
    context: item.subtitle,
    detailSummary: item.reason,
    suggestedScript: `Use this promoted item to move ${item.subtitle.split(" · ")[0] ?? "the workflow"} forward while it is top of mind.`,
    nextStep: "Handle the action, then either complete it or return it to the soon list.",
    interestedListing: item.subtitle,
    contactLine: "Use the linked CRM record for exact contact details.",
    statusTone: item.tone === "action" ? "action" as const : "watch" as const,
    statusLabel: item.dueLabel,
    metadata: [item.reason],
    hasMeetingPrep: false,
    transactionStatus: null,
    appointmentLabel: null,
    isScheduledEvent: false
  }));

  const visibleTodayFlow = [...promotedIntoToday, ...todayFlow]
    .sort((left, right) => {
      const leftCompleted = completedSet.has(left.id) ? 1 : 0;
      const rightCompleted = completedSet.has(right.id) ? 1 : 0;
      if (leftCompleted !== rightCompleted) {
        return leftCompleted - rightCompleted;
      }
      return left.plannedStartMinutes - right.plannedStartMinutes || right.priorityScore - left.priorityScore;
    })
    .slice(0, 8);
  const nextBestAction = visibleTodayFlow.find((task) => !completedSet.has(task.id)) ?? null;

  useEffect(() => {
    if (!visibleTodayFlow.length) {
      setExpandedTaskId(null);
      return;
    }
    if (
      !expandedTaskId ||
      !visibleTodayFlow.some((task) => task.id === expandedTaskId) ||
      completedSet.has(expandedTaskId)
    ) {
      setExpandedTaskId(nextBestAction?.id ?? visibleTodayFlow[0].id);
    }
  }, [completedSet, expandedTaskId, nextBestAction, visibleTodayFlow]);

  const moveToNextTask = (taskId: string) => {
    const currentIndex = visibleTodayFlow.findIndex((task) => task.id === taskId);
    const nextTask =
      visibleTodayFlow.slice(currentIndex + 1).find((task) => !completedSet.has(task.id)) ??
      visibleTodayFlow.find((task) => !completedSet.has(task.id)) ??
      null;
    setExpandedTaskId(nextTask ? nextTask.id : null);
  };

  const handleCompleteTask = (taskId: string) => {
    setCompletedTaskIds((current) => (current.includes(taskId) ? current : [...current, taskId]));
    if (taskId.startsWith("soon-")) {
      setPromotedSoonIds((current) => current.filter((id) => id !== taskId));
    }
  };

  const handleDeferTask = (taskId: string) => {
    if (taskId.startsWith("soon-")) {
      setPromotedSoonIds((current) => current.filter((id) => id !== taskId));
      moveToNextTask(taskId);
      return;
    }
    setDeferredTaskIds((current) => (current.includes(taskId) ? current : [...current, taskId]));
    moveToNextTask(taskId);
  };

  const handlePromoteSoon = (itemId: string) => {
    setPromotedSoonIds((current) => (current.includes(itemId) ? current : [...current, itemId]));
    setExpandedTaskId(itemId);
  };

  const backgroundPanels = [
    {
      id: "pipeline",
      title: "Pipeline Overview",
      summary: "Keep the pipeline in view without stealing attention from active work.",
      content: (
        <div className="workflow-metric-grid">
          <WorkflowMetric label="Hot leads" value={opportunityCounts.highInterest} tone="amber" />
          <WorkflowMetric label="Deals at risk" value={transactionExpired} tone="red" />
          <WorkflowMetric label="Pipeline" value={transactions.length + opportunityLeads.length} tone="blue" />
        </div>
      )
    },
    {
      id: "inventory",
      title: "Inventory Watch",
      summary: "Keep listing movement accessible for conversations, not dominant.",
      content: (
        <div className="workflow-background-split">
          <div className="workflow-background-stack">
            {enabledListingsPreview.map((listing) => (
              <div key={listing.id} className="workflow-background-row">
                <div>
                  <strong>{listing.address}</strong>
                  <span>{formatListingLocation(listing)}</span>
                </div>
                <small>{listing.trend}</small>
              </div>
            ))}
          </div>
          <div className="workflow-background-stack">
            {hotSheetPreview.map((sheet) => (
              <div key={sheet.id} className="workflow-background-row workflow-background-row--compact">
                <strong>{sheet.label}</strong>
                <span className="listing-count-badge">+{sheet.count}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "updates",
      title: "Updates",
      summary: "Passive product and service notes that can wait until the core work is done.",
      content: (
        <div className="workflow-background-list">
          {updates.map((update) => (
            <div key={update.id} className="workflow-background-row">
              <div>
                <strong>{update.title}</strong>
                <span>{update.description}</span>
              </div>
              <span className={`dashboard-accent-dot dashboard-accent-dot--${update.accent}`} />
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="workflow-dashboard">
      <div className="workflow-top-summary">
        <WorkflowMetric
          label="Overdue"
          value={visibleTodayFlow.filter((task) => task.dueState === "overdue" && !completedSet.has(task.id)).length}
          tone="amber"
        />
        <WorkflowMetric
          label="Due today"
          value={visibleTodayFlow.filter((task) => !completedSet.has(task.id)).length}
          tone="blue"
        />
        <WorkflowMetric label="Do soon" value={mustDoSoon.length} tone="green" />
      </div>

      <div className="workflow-layout">
        <main className="workflow-main-column">
          <section className="workflow-primary-card workflow-next-best">
            <div className="workflow-section-head">
              <div>
                <h3>Next Best Action</h3>
                <p>One recommended move, with enough context to start immediately.</p>
              </div>
              {nextBestAction ? (
                <DashboardStatusPill label={nextBestAction.statusLabel} tone={nextBestAction.statusTone} />
              ) : null}
            </div>

            {nextBestAction ? (
              <>
                <div className={`workflow-next-best-body workflow-next-best-body--${nextBestAction.dueState}`}>
                  <div className="workflow-next-best-title">
                    <strong>{nextBestAction.title}</strong>
                    <span>{nextBestAction.personName} · {nextBestAction.context}</span>
                  </div>
                  <p>{nextBestAction.reason}</p>
                </div>
                <div className="workflow-next-best-actions">
                  <div className="workflow-action-buttons">
                    <button className="workflow-primary-button" onClick={() => setExpandedTaskId(nextBestAction.id)}>
                      Start
                    </button>
                    <button className="workflow-secondary-button" onClick={() => handleCompleteTask(nextBestAction.id)}>
                      Complete
                    </button>
                    <button className="workflow-secondary-button" onClick={() => handleDeferTask(nextBestAction.id)}>
                      Snooze
                    </button>
                    <button className="workflow-ghost-button" onClick={() => handleDeferTask(nextBestAction.id)}>
                      Skip
                    </button>
                  </div>
                  <div className="workflow-quick-channel-row">
                    <span>{nextBestAction.timeLabel} · {nextBestAction.durationLabel} · {nextBestAction.contactLine}</span>
                    <div className="workflow-quick-icons">
                      <button aria-label="Call task"><Phone size={15} /></button>
                      <button aria-label="Text task"><MessageSquare size={15} /></button>
                      <button aria-label="Email task"><Mail size={15} /></button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <EmptyWidgetState message="There is nothing left in today’s flow right now. Promote something from Must Do Soon or check the background panels." />
            )}
          </section>

          <section className="workflow-primary-card">
            <div className="workflow-section-head workflow-section-head--tight">
              <div>
                <h3>Today&apos;s Flow</h3>
                <p>Work top to bottom. Open one task, act, then move to the next.</p>
              </div>
              <div className="workflow-flow-stats">
                <span>{visibleTodayFlow.filter((task) => !completedSet.has(task.id)).length} active</span>
                <span>{visibleTodayFlow.filter((task) => task.isScheduledEvent && !completedSet.has(task.id)).length} appointments first</span>
                <span>{completedTaskIds.length} done</span>
              </div>
            </div>

            <div className="workflow-flow-list">
              {visibleTodayFlow.length ? (
                visibleTodayFlow.map((task, index) => (
                  <WorkflowTaskRow
                    key={task.id}
                    index={index}
                    task={task}
                    isCompleted={completedSet.has(task.id)}
                    isExpanded={expandedTaskId === task.id}
                    isCurrent={task.id === nextBestAction?.id}
                    onToggle={() => setExpandedTaskId((current) => (current === task.id ? null : task.id))}
                    onStart={() => setExpandedTaskId(task.id)}
                    onComplete={() => handleCompleteTask(task.id)}
                    onDefer={() => handleDeferTask(task.id)}
                  />
                ))
              ) : (
                <div className="workflow-empty-inline">
                  <Check size={16} />
                  <span>You cleared today&apos;s flow. Pull in a task from Must Do Soon if you want to keep going.</span>
                </div>
              )}
            </div>
          </section>
        </main>

        <aside className="workflow-side-column">
          <section className="workflow-secondary-card">
            <div className="workflow-section-head workflow-section-head--tight">
              <div>
                <h3>{scheduleTab === "appointments" ? "Appointments" : "Showings"}</h3>
                <p>Upcoming meetings stay nearby, ordered by the time they happen.</p>
              </div>
            </div>
            <div className="workflow-background-tabs">
              <button
                className={scheduleTab === "appointments" ? "workflow-background-tab is-active" : "workflow-background-tab"}
                onClick={() => setScheduleTab("appointments")}
              >
                Appointments
              </button>
              <button
                className={scheduleTab === "showings" ? "workflow-background-tab is-active" : "workflow-background-tab"}
                onClick={() => setScheduleTab("showings")}
              >
                Showings
              </button>
            </div>
            <div className="workflow-background-list">
              {sortedScheduleItems.slice(0, 4).map((item) => (
                <div key={item.id} className="workflow-background-row">
                  <div>
                    <strong>{item.personName}</strong>
                    <span>{item.title}</span>
                  </div>
                  <div className="workflow-background-row-side">
                    {item.incomplete ? <DashboardStatusPill label="Prep" tone="watch" /> : null}
                    <small>{item.timeLabel}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="workflow-secondary-card">
            <div className="workflow-section-head workflow-section-head--tight">
              <div>
                <h3>Must Do Soon</h3>
                <p>Important work that should stay nearby, but not on top of today’s queue.</p>
              </div>
            </div>
            <div className="workflow-soon-list">
              {mustDoSoon.length ? (
                mustDoSoon.map((item) => (
                  <div key={item.id} className="workflow-soon-row">
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                      <small>{item.reason}</small>
                    </div>
                    <div className="workflow-soon-actions">
                      <small>{item.dueLabel}</small>
                      {!item.id.startsWith("deferred-") ? (
                        <button className="workflow-promote-button" onClick={() => handlePromoteSoon(item.id)}>
                          Promote
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))
              ) : (
                <EmptyWidgetState message="Nothing is waiting in the soon lane right now." />
              )}
            </div>
          </section>

          {backgroundPanels.map((panel, index) => (
            <details key={panel.id} className="workflow-secondary-card workflow-background-panel" open={index < 2}>
              <summary className="workflow-background-summary">
                <div>
                  <strong>{panel.title}</strong>
                  <span>{panel.summary}</span>
                </div>
                <ChevronDown size={16} />
              </summary>
              <div className="workflow-background-content">{panel.content}</div>
            </details>
          ))}
        </aside>
      </div>
    </div>
  );
}

function WorkflowTaskRow({
  task,
  isCompleted,
  index,
  isExpanded,
  isCurrent,
  onToggle,
  onStart,
  onComplete,
  onDefer
}: {
  task: DashboardWorkflowTask;
  isCompleted: boolean;
  index: number;
  isExpanded: boolean;
  isCurrent: boolean;
  onToggle: () => void;
  onStart: () => void;
  onComplete: () => void;
  onDefer: () => void;
}) {
  return (
    <article className={`workflow-task ${isExpanded ? "is-expanded" : ""} ${isCurrent ? "is-current" : ""} ${task.dueState === "overdue" ? "is-urgent" : ""} ${isCompleted ? "is-complete" : ""}`.trim()}>
      <button className="workflow-task-summary" onClick={onToggle}>
        <div className="workflow-task-order">{index + 1}</div>
        <div className="workflow-task-main">
          <div className="workflow-task-line">
            <strong>{task.title}</strong>
            {isCompleted ? <DashboardStatusPill label="Completed" tone="success" /> : <DashboardStatusPill label={task.statusLabel} tone={task.statusTone} />}
          </div>
          <span>{task.personName} · {task.context}</span>
          <div className="workflow-task-meta">
            <small>{task.dueLabel}</small>
            <small>{task.timeLabel}</small>
            <small>{task.durationLabel}</small>
            {task.appointmentLabel ? <small>{task.appointmentLabel}</small> : null}
          </div>
        </div>
        <div className="workflow-task-side">
          <small>{isCompleted ? "Done" : task.dueState === "overdue" ? "Do now" : "Up next"}</small>
          <ChevronDown size={16} className={isExpanded ? "is-open" : ""} />
        </div>
      </button>

      {isExpanded && !isCompleted ? (
        <div className="workflow-task-detail">
          <div className="workflow-task-detail-grid">
            <div className="workflow-task-detail-block">
              <span className="workflow-detail-label">Context</span>
              <p>{task.detailSummary}</p>
              <div className="workflow-chip-row">
                <span>{task.interestedListing}</span>
                <span>{task.contactLine}</span>
                {task.transactionStatus ? <span>{task.transactionStatus}</span> : null}
              </div>
            </div>
            <div className="workflow-task-detail-block">
              <span className="workflow-detail-label">Suggested script</span>
              <p>{task.suggestedScript}</p>
              <small>{task.nextStep}</small>
            </div>
          </div>

          <div className="workflow-task-actionbar">
            <div className="workflow-inline-actions">
              <button className="workflow-inline-button" onClick={onStart}>
                {task.taskType === "Call" ? <Phone size={15} /> : task.taskType === "Text" ? <MessageSquare size={15} /> : task.taskType === "Email" ? <Mail size={15} /> : <ArrowRight size={15} />}
                {task.taskType}
              </button>
              <button className="workflow-inline-button" onClick={onStart}>
                <MessageSquare size={15} />
                Note
              </button>
              <button className="workflow-inline-button" onClick={onStart}>
                <Mail size={15} />
                Follow-up
              </button>
            </div>
            <div className="workflow-inline-actions">
              <button className="workflow-secondary-button" onClick={onDefer}>
                Snooze
              </button>
              <button className="workflow-primary-button" onClick={onComplete}>
                Mark Complete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function WorkflowMetric({
  label,
  value,
  tone
}: {
  label: string;
  value: number;
  tone: "amber" | "red" | "blue" | "green";
}) {
  return (
    <div className={`workflow-metric workflow-metric--${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
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
  summary,
  actions,
  children,
  className = ""
}: {
  title: string;
  summary?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`dashboard-widget ${className}`.trim()}>
      <div className="dashboard-widget-header">
        <div className="dashboard-widget-title-group">
          <h2>{title}</h2>
          {summary ? <p>{summary}</p> : null}
        </div>
        {actions ? <div className="dashboard-widget-actions">{actions}</div> : null}
      </div>
      {children}
    </article>
  );
}

function DashboardStatTile({
  label,
  value,
  tone
}: {
  label: string;
  value: number;
  tone: "urgent" | "action" | "watch";
}) {
  return (
    <div className={`dashboard-stat-tile dashboard-stat-tile--${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function DashboardPriorityRow({
  label,
  title,
  meta,
  action,
  tone
}: {
  label: string;
  title: string;
  meta: string;
  action: string;
  tone: "urgent" | "action" | "watch";
}) {
  return (
    <div className={`dashboard-priority-row dashboard-priority-row--${tone}`}>
      <div className="dashboard-priority-main">
        <DashboardStatusPill label={label} tone={tone} />
        <div>
          <strong>{title}</strong>
          <span>{meta}</span>
        </div>
      </div>
      <small>{action}</small>
    </div>
  );
}

function DashboardStatusPill({
  label,
  tone
}: {
  label: string;
  tone: "urgent" | "action" | "watch" | "success" | "neutral";
}) {
  return <span className={`dashboard-status-pill dashboard-status-pill--${tone}`}>{label}</span>;
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
