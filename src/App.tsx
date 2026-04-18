import { useEffect, useMemo, useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useDroppable,
  useDraggable,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDashed,
  CircleHelp,
  ClipboardList,
  GripVertical,
  Lock,
  MoveRight,
  PanelsTopLeft,
  Pin,
  Plus,
  Sparkles,
  Trash2,
  WandSparkles,
  X
} from "lucide-react";
import {
  getFeatureById,
  getLayerById,
  getRoleById,
  isRoleAdmin,
  layerDefinitions,
  roleDefinitions,
  templateDefinitions
} from "./data";
import type {
  FeatureDefinition,
  LayerConfigValues,
  LayerDefinition,
  LayerId,
  OnboardingSnapshot,
  RoleDefinition,
  RoleId,
  SavedTemplate,
  SetupPhase,
  TemplateDefinition
} from "./types";

const STORAGE_KEY = "lofty-onboarding-studio-v1";

const topNavItems = ["CRM", "Sales", "Marketing", "Content", "Automation", "Reporting", "Marketplace", "AI Copilots"];

const emptySnapshot: OnboardingSnapshot = {
  selectedRole: null,
  activeLayers: [],
  skippedLayers: [],
  completedLayers: [],
  pinnedLayers: [],
  hiddenLayers: [],
  featureOrder: {},
  layerConfigs: {},
  stepCompletion: {},
  savedTemplates: [],
  phase: "role-selection"
};

function normalizeConfigDefaults(layer: LayerDefinition): LayerConfigValues {
  return Object.fromEntries(
    layer.configSchema.map((field) => [field.id, field.defaultValue ?? (field.type === "toggle" ? false : "")])
  );
}

function isLayerAvailableForRole(layer: LayerDefinition, roleId: RoleId) {
  return layer.roles.includes(roleId);
}

function isLayerRequiredForRole(layer: LayerDefinition, roleId: RoleId) {
  return layer.requiredFor.includes(roleId);
}

function canSkipLayer(layer: LayerDefinition, roleId: RoleId) {
  return layer.skippableFor.includes(roleId);
}

function computeRecommendedLayers(roleId: RoleId) {
  return layerDefinitions
    .filter((layer) => layer.roles.includes(roleId))
    .sort((left, right) => {
      const leftRequired = Number(isLayerRequiredForRole(left, roleId));
      const rightRequired = Number(isLayerRequiredForRole(right, roleId));
      if (leftRequired !== rightRequired) {
        return rightRequired - leftRequired;
      }
      return left.dependencies.length - right.dependencies.length;
    })
    .map((layer) => layer.id);
}

function computePermissionSet(roleId: RoleId) {
  const available = layerDefinitions.filter((layer) => layer.roles.includes(roleId));
  const locked = layerDefinitions.filter((layer) => !layer.roles.includes(roleId));
  return {
    availableLayers: available,
    lockedLayers: locked,
    requiredLayers: available.filter((layer) => isLayerRequiredForRole(layer, roleId)),
    optionalLayers: available.filter((layer) => !isLayerRequiredForRole(layer, roleId))
  };
}

function loadSnapshot(): OnboardingSnapshot {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return emptySnapshot;
    }
    const parsed = JSON.parse(raw) as OnboardingSnapshot;
    return { ...emptySnapshot, ...parsed };
  } catch {
    return emptySnapshot;
  }
}

function App() {
  const [snapshot, setSnapshot] = useState<OnboardingSnapshot>(() => loadSnapshot());
  const [selectedLayerId, setSelectedLayerId] = useState<LayerId | null>(snapshot.activeLayers[0] ?? null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("minimal-launch-setup");
  const [draggingLayerId, setDraggingLayerId] = useState<LayerId | null>(null);
  const [drawerLayerId, setDrawerLayerId] = useState<LayerId | null>(null);
  const [configLayerId, setConfigLayerId] = useState<LayerId | null>(null);
  const [showAccessPreview, setShowAccessPreview] = useState(false);
  const [showTemplateBuilder, setShowTemplateBuilder] = useState(false);
  const [websiteBuildState, setWebsiteBuildState] = useState<"idle" | "building" | "ready">("idle");
  const [templateDraft, setTemplateDraft] = useState({ name: "", description: "" });
  const [expandedLeftLayers, setExpandedLeftLayers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  }, [snapshot]);

  const selectedRole = useMemo(
    () => (snapshot.selectedRole ? getRoleById(snapshot.selectedRole) : null),
    [snapshot.selectedRole]
  );

  const permissionSet = useMemo(
    () => (snapshot.selectedRole ? computePermissionSet(snapshot.selectedRole) : null),
    [snapshot.selectedRole]
  );

  const recommendedOrder = useMemo(
    () => (snapshot.selectedRole ? computeRecommendedLayers(snapshot.selectedRole) : []),
    [snapshot.selectedRole]
  );

  const activeLayerDefinitions = snapshot.activeLayers.map(getLayerById);
  const selectedLayer = selectedLayerId ? getLayerById(selectedLayerId) : activeLayerDefinitions[0] ?? null;
  const drawerLayer = drawerLayerId ? getLayerById(drawerLayerId) : null;
  const configLayer = configLayerId ? getLayerById(configLayerId) : null;

  const templatesForRole = useMemo(() => {
    if (!snapshot.selectedRole) {
      return [];
    }
    const systemTemplates = templateDefinitions.filter((template) => template.roleIds.includes(snapshot.selectedRole!));
    const userTemplates = snapshot.savedTemplates.filter((template) => template.roleIds.includes(snapshot.selectedRole!));
    return [...systemTemplates, ...userTemplates];
  }, [snapshot.savedTemplates, snapshot.selectedRole]);

  const stepCompletionForRole = snapshot.stepCompletion;
  const completedRequiredLayersCount =
    permissionSet?.requiredLayers.filter((layer) => snapshot.completedLayers.includes(layer.id)).length ?? 0;
  const totalRequiredLayers = permissionSet?.requiredLayers.length ?? 0;
  const readinessRatio =
    totalRequiredLayers === 0 ? 0 : completedRequiredLayersCount / Math.max(totalRequiredLayers, 1);
  const optionalBoost =
    permissionSet?.optionalLayers.length
      ? snapshot.completedLayers.filter((layerId) =>
          permissionSet.optionalLayers.some((layer) => layer.id === layerId)
        ).length /
        Math.max(permissionSet.optionalLayers.length, 1)
      : 0;
  const launchReadinessScore = Math.min(100, Math.round(readinessRatio * 82 + optionalBoost * 18));

  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 6 } }), useSensor(TouchSensor));

  function updateSnapshot(updater: (current: OnboardingSnapshot) => OnboardingSnapshot) {
    setSnapshot((current) => updater(current));
  }

  function handleRoleSelect(role: RoleDefinition) {
    const template = templateDefinitions.find((item) => item.roleIds.includes(role.id) && item.id === "minimal-launch-setup")
      ?? templateDefinitions.find((item) => item.roleIds.includes(role.id));
    const availableLayers = computePermissionSet(role.id).availableLayers.map((layer) => layer.id);
    const nextActiveLayers = template
      ? template.activeLayers.filter((layerId) => availableLayers.includes(layerId))
      : computeRecommendedLayers(role.id).slice(0, 4);

    const nextConfigs = Object.fromEntries(
      availableLayers.map((layerId) => {
        const layer = getLayerById(layerId);
        return [layerId, normalizeConfigDefaults(layer)];
      })
    );

    updateSnapshot(() => ({
      ...emptySnapshot,
      selectedRole: role.id,
      phase: "overview",
      activeLayers: nextActiveLayers,
      pinnedLayers: template?.pinnedLayers?.filter((layerId) => availableLayers.includes(layerId)) ?? [],
      hiddenLayers: [],
      layerConfigs: nextConfigs
    }));

    setSelectedLayerId(nextActiveLayers[0] ?? availableLayers[0] ?? null);
    setSelectedTemplateId(template?.id ?? "");
    setShowAccessPreview(true);
    setWebsiteBuildState("idle");
  }

  function applyTemplate(template: TemplateDefinition | SavedTemplate) {
    if (!snapshot.selectedRole) {
      return;
    }
    const availableLayerIds = computePermissionSet(snapshot.selectedRole).availableLayers.map((layer) => layer.id);
    const filteredActive = template.activeLayers.filter((layerId) => availableLayerIds.includes(layerId));
    const filteredPinned = (template.pinnedLayers ?? []).filter((layerId) => availableLayerIds.includes(layerId));
    const filteredSkipped = (template.skippedLayers ?? []).filter((layerId) => availableLayerIds.includes(layerId));
    updateSnapshot((current) => ({
      ...current,
      activeLayers: filteredActive,
      pinnedLayers: filteredPinned,
      skippedLayers: filteredSkipped,
      hiddenLayers: current.hiddenLayers.filter((layerId) => !filteredActive.includes(layerId))
    }));
    setSelectedLayerId(filteredActive[0] ?? null);
    setSelectedTemplateId(template.id);
  }

  function toggleLayerHidden(layerId: LayerId) {
    updateSnapshot((current) => {
      const hidden = new Set(current.hiddenLayers);
      if (hidden.has(layerId)) {
        hidden.delete(layerId);
      } else {
        hidden.add(layerId);
      }
      return { ...current, hiddenLayers: [...hidden] };
    });
  }

  function toggleLayerPinned(layerId: LayerId) {
    updateSnapshot((current) => {
      const pinned = new Set(current.pinnedLayers);
      if (pinned.has(layerId)) {
        pinned.delete(layerId);
      } else {
        pinned.add(layerId);
      }
      return { ...current, pinnedLayers: [...pinned] };
    });
  }

  function addLayerToWorkspace(layerId: LayerId) {
    updateSnapshot((current) => {
      if (current.activeLayers.includes(layerId)) {
        return current;
      }
      return {
        ...current,
        activeLayers: [...current.activeLayers, layerId],
        hiddenLayers: current.hiddenLayers.filter((item) => item !== layerId),
        skippedLayers: current.skippedLayers.filter((item) => item !== layerId)
      };
    });
    setSelectedLayerId(layerId);
    setDrawerLayerId(null);
  }

  function removeLayerFromWorkspace(layerId: LayerId) {
    updateSnapshot((current) => ({
      ...current,
      activeLayers: current.activeLayers.filter((item) => item !== layerId),
      pinnedLayers: current.pinnedLayers.filter((item) => item !== layerId)
    }));
    if (selectedLayerId === layerId) {
      const nextLayer = snapshot.activeLayers.find((item) => item !== layerId) ?? null;
      setSelectedLayerId(nextLayer);
    }
  }

  function skipLayer(layerId: LayerId) {
    updateSnapshot((current) => {
      const skipped = new Set(current.skippedLayers);
      skipped.add(layerId);
      return {
        ...current,
        skippedLayers: [...skipped],
        activeLayers: current.activeLayers.filter((item) => item !== layerId),
        pinnedLayers: current.pinnedLayers.filter((item) => item !== layerId)
      };
    });
  }

  function unskipLayer(layerId: LayerId) {
    updateSnapshot((current) => ({
      ...current,
      skippedLayers: current.skippedLayers.filter((item) => item !== layerId)
    }));
  }

  function markStep(layerId: LayerId, stepId: string, checked: boolean) {
    updateSnapshot((current) => {
      const stepKey = `${layerId}:${stepId}`;
      const nextStepCompletion = { ...current.stepCompletion, [stepKey]: checked };
      const layer = getLayerById(layerId);
      const allRequiredDone = layer.steps
        .filter((step) => step.required)
        .every((step) => nextStepCompletion[`${layerId}:${step.id}`]);
      const completedSet = new Set(current.completedLayers);
      if (allRequiredDone) {
        completedSet.add(layerId);
      } else {
        completedSet.delete(layerId);
      }
      return {
        ...current,
        stepCompletion: nextStepCompletion,
        completedLayers: [...completedSet]
      };
    });
  }

  function updateLayerConfig(layerId: LayerId, key: string, value: string | boolean) {
    updateSnapshot((current) => ({
      ...current,
      layerConfigs: {
        ...current.layerConfigs,
        [layerId]: {
          ...normalizeConfigDefaults(getLayerById(layerId)),
          ...current.layerConfigs[layerId],
          [key]: value
        }
      }
    }));
  }

  function resetToRoleSelection() {
    setSnapshot(emptySnapshot);
    setSelectedLayerId(null);
    setDrawerLayerId(null);
    setConfigLayerId(null);
    setShowAccessPreview(false);
    setShowTemplateBuilder(false);
    setWebsiteBuildState("idle");
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function handleDragStart(event: DragStartEvent) {
    const activeId = String(event.active.id);
    if (activeId.startsWith("catalog:")) {
      setDraggingLayerId(activeId.replace("catalog:", "") as LayerId);
      return;
    }
    if (activeId.startsWith("active:")) {
      setDraggingLayerId(activeId.replace("active:", "") as LayerId);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setDraggingLayerId(null);
    if (!over) {
      return;
    }
    const activeId = String(active.id);
    const overId = String(over.id);
    if (activeId.startsWith("catalog:")) {
      const layerId = activeId.replace("catalog:", "") as LayerId;
      if (overId === "workspace" || overId.startsWith("active:")) {
        addLayerToWorkspace(layerId);
      }
      return;
    }
    if (activeId.startsWith("active:") && overId.startsWith("active:")) {
      const dragged = activeId.replace("active:", "") as LayerId;
      const overLayer = overId.replace("active:", "") as LayerId;
      if (dragged === overLayer) {
        return;
      }
      updateSnapshot((current) => {
        const oldIndex = current.activeLayers.indexOf(dragged);
        const newIndex = current.activeLayers.indexOf(overLayer);
        if (oldIndex < 0 || newIndex < 0) {
          return current;
        }
        return {
          ...current,
          activeLayers: arrayMove(current.activeLayers, oldIndex, newIndex)
        };
      });
      return;
    }
    if (activeId.startsWith("active:") && overId === "workspace") {
      return;
    }
  }

  function handleBuildWebsite() {
    setWebsiteBuildState("building");
    window.setTimeout(() => {
      setWebsiteBuildState("ready");
      updateSnapshot((current) => ({ ...current, phase: "website-live" }));
    }, 1800);
  }

  function saveTemplate() {
    if (!snapshot.selectedRole || !templateDraft.name.trim()) {
      return;
    }
    const newTemplate: SavedTemplate = {
      id: `saved-${Date.now()}`,
      name: templateDraft.name.trim(),
      description: templateDraft.description.trim() || "Custom role-aware setup template",
      roleIds: [snapshot.selectedRole],
      activeLayers: snapshot.activeLayers,
      pinnedLayers: snapshot.pinnedLayers,
      skippedLayers: snapshot.skippedLayers,
      createdAt: Date.now()
    };
    updateSnapshot((current) => ({
      ...current,
      savedTemplates: [newTemplate, ...current.savedTemplates]
    }));
    setTemplateDraft({ name: "", description: "" });
    setShowTemplateBuilder(false);
  }

  const availableLayers = permissionSet?.availableLayers ?? [];
  const lockedLayers = permissionSet?.lockedLayers ?? [];
  const visibleCatalogLayers = availableLayers.filter((layer) => !snapshot.hiddenLayers.includes(layer.id));
  const canOpenReview = Boolean(snapshot.selectedRole) && (snapshot.activeLayers.length > 0 || snapshot.completedLayers.length > 0);
  const canBuildWebsite =
    snapshot.selectedRole !== null &&
    snapshot.completedLayers.includes("profile-branding") &&
    snapshot.completedLayers.includes("website") &&
    websiteBuildState === "idle";

  return (
    <div className="app-shell">
      <TopNavigation />
      <main className="page-shell">
        {snapshot.phase === "role-selection" || !selectedRole ? (
          <RoleSelectionScreen onSelect={handleRoleSelect} />
        ) : snapshot.phase === "website-live" && websiteBuildState === "ready" ? (
          <WebsitePreview
            role={selectedRole}
            layerConfigs={snapshot.layerConfigs}
            readiness={launchReadinessScore}
            completedLayers={snapshot.completedLayers.map(getLayerById)}
            onBack={() => updateSnapshot((current) => ({ ...current, phase: "review" }))}
          />
        ) : (
          <div className="experience-shell">
            <header className="experience-header">
              <div>
                <p className="section-kicker">Lofty guided setup</p>
                <h1>Who are you setting this up for? <span>{selectedRole.title}</span></h1>
                <p>
                  This onboarding only shows the layers and features {selectedRole.title.toLowerCase()} users can actually
                  access. It teaches the product while it configures the account.
                </p>
              </div>
              <div className="header-actions">
                <button className="secondary-button" onClick={() => setShowAccessPreview(true)}>
                  <CircleHelp size={16} />
                  Access preview
                </button>
                {isRoleAdmin(selectedRole.id) ? (
                  <button className="secondary-button" onClick={() => setShowTemplateBuilder(true)}>
                    <ClipboardList size={16} />
                    Save template
                  </button>
                ) : null}
                <button className="ghost-button" onClick={resetToRoleSelection}>
                  Change role
                </button>
              </div>
            </header>

            <OverviewBar
              role={selectedRole}
              templates={templatesForRole}
              selectedTemplateId={selectedTemplateId}
              onTemplateSelect={(template) => applyTemplate(template)}
              onPhaseChange={(phase) => updateSnapshot((current) => ({ ...current, phase }))}
              currentPhase={snapshot.phase}
              canOpenReview={canOpenReview}
              readinessScore={launchReadinessScore}
              completedCount={snapshot.completedLayers.length}
              activeCount={snapshot.activeLayers.length}
              skippedCount={snapshot.skippedLayers.length}
            />

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              <div className="three-column-layout">
                <aside className="panel left-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Available layers</h2>
                      <p>Only layers available to {selectedRole.title.toLowerCase()} users appear here.</p>
                    </div>
                    <span className="count-badge">{visibleCatalogLayers.length}</span>
                  </div>

                  <div className="catalog-section">
                    {visibleCatalogLayers.map((layer) => (
                      <CatalogLayerCard
                        key={layer.id}
                        layer={layer}
                        roleId={selectedRole.id}
                        active={snapshot.activeLayers.includes(layer.id)}
                        hidden={snapshot.hiddenLayers.includes(layer.id)}
                        pinned={snapshot.pinnedLayers.includes(layer.id)}
                        expanded={Boolean(expandedLeftLayers[layer.id])}
                        onToggleExpand={() =>
                          setExpandedLeftLayers((current) => ({ ...current, [layer.id]: !current[layer.id] }))
                        }
                        onSelect={() => {
                          setSelectedLayerId(layer.id);
                          setDrawerLayerId(layer.id);
                        }}
                        onAdd={() => addLayerToWorkspace(layer.id)}
                        onHide={() => toggleLayerHidden(layer.id)}
                        onPin={() => toggleLayerPinned(layer.id)}
                      />
                    ))}
                  </div>

                  {snapshot.hiddenLayers.length ? (
                    <div className="mini-section">
                      <h3>Hidden optional layers</h3>
                      <div className="chip-wrap">
                        {snapshot.hiddenLayers.map((layerId) => {
                          const layer = getLayerById(layerId);
                          return (
                            <button key={layerId} className="mini-chip" onClick={() => toggleLayerHidden(layerId)}>
                              <Plus size={12} />
                              {layer.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  {lockedLayers.length ? (
                    <div className="mini-section">
                      <h3>Locked for this role</h3>
                      <div className="locked-stack">
                        {lockedLayers.slice(0, 5).map((layer) => (
                          <button
                            key={layer.id}
                            className="locked-layer-card"
                            onClick={() => {
                              setSelectedLayerId(layer.id);
                              setDrawerLayerId(layer.id);
                            }}
                          >
                            <div>
                              <strong>{layer.name}</strong>
                              <span>{layer.lockedExplanation ?? "This layer is managed by a higher-permission role."}</span>
                            </div>
                            <Lock size={14} />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </aside>

                <section className="panel center-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Active setup workspace</h2>
                      <p>Drag layers here to build a personalized setup path, then reorder them as needed.</p>
                    </div>
                    <button
                      className="secondary-button"
                      onClick={() => updateSnapshot((current) => ({ ...current, phase: "configure" }))}
                    >
                      <PanelsTopLeft size={16} />
                      Focus configure
                    </button>
                  </div>

                  <WorkspaceDropZone isEmpty={snapshot.activeLayers.length === 0}>
                    <SortableContext items={snapshot.activeLayers.map((layerId) => `active:${layerId}`)} strategy={rectSortingStrategy}>
                      <div className="workspace-list">
                        {snapshot.activeLayers.length === 0 ? (
                          <EmptyWorkspace
                            recommendedLayers={recommendedOrder.slice(0, 4).map(getLayerById)}
                            onAdd={addLayerToWorkspace}
                          />
                        ) : (
                          activeLayerDefinitions.map((layer) => (
                            <ActiveLayerCard
                              key={layer.id}
                              layer={layer}
                              roleId={selectedRole.id}
                              completed={snapshot.completedLayers.includes(layer.id)}
                              skipped={snapshot.skippedLayers.includes(layer.id)}
                              pinned={snapshot.pinnedLayers.includes(layer.id)}
                              selected={selectedLayerId === layer.id}
                              configValues={{
                                ...normalizeConfigDefaults(layer),
                                ...snapshot.layerConfigs[layer.id]
                              }}
                              stepCompletion={stepCompletionForRole}
                              onSelect={() => setSelectedLayerId(layer.id)}
                              onRemove={() => removeLayerFromWorkspace(layer.id)}
                              onOpenConfig={() => setConfigLayerId(layer.id)}
                              onOpenGuide={() => setDrawerLayerId(layer.id)}
                              onPin={() => toggleLayerPinned(layer.id)}
                              onSkip={() => skipLayer(layer.id)}
                              onStepToggle={(stepId, checked) => markStep(layer.id, stepId, checked)}
                              canSkip={canSkipLayer(layer, selectedRole.id)}
                            />
                          ))
                        )}
                      </div>
                    </SortableContext>
                  </WorkspaceDropZone>

                  {snapshot.skippedLayers.length ? (
                    <div className="skipped-panel">
                      <div className="skipped-header">
                        <h3>Skipped layers</h3>
                        <p>These are optional for this role. You can bring them back any time.</p>
                      </div>
                      <div className="chip-wrap">
                        {snapshot.skippedLayers.map((layerId) => {
                          const layer = getLayerById(layerId);
                          return (
                            <button key={layerId} className="mini-chip" onClick={() => unskipLayer(layerId)}>
                              <Plus size={12} />
                              Restore {layer.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  <div className="review-strip">
                    <div className="review-card">
                      <span>Launch readiness</span>
                      <strong>{launchReadinessScore}%</strong>
                      <p>Required layers completed: {completedRequiredLayersCount} of {totalRequiredLayers}</p>
                    </div>
                    <div className="review-card">
                      <span>What is live after launch</span>
                      <p>Website, CRM access, communication, and only the features your role can use.</p>
                    </div>
                    <div className="review-actions">
                      <button
                        className="secondary-button"
                        onClick={() => updateSnapshot((current) => ({ ...current, phase: "review" }))}
                      >
                        Review setup
                      </button>
                      <button className="primary-button" disabled={!canBuildWebsite} onClick={handleBuildWebsite}>
                        {websiteBuildState === "building" ? (
                          <>
                            <CircleDashed className="spin" size={16} />
                            Building website...
                          </>
                        ) : (
                          <>
                            <WandSparkles size={16} />
                            Build website
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </section>

                <aside className="panel right-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Explanation panel</h2>
                      <p>Selected layer guidance in simple English.</p>
                    </div>
                  </div>

                  {selectedLayer ? (
                    <ExplanationPanel
                      layer={selectedLayer}
                      roleId={selectedRole.id}
                      configValues={{
                        ...normalizeConfigDefaults(selectedLayer),
                        ...snapshot.layerConfigs[selectedLayer.id]
                      }}
                      completed={snapshot.completedLayers.includes(selectedLayer.id)}
                      available={isLayerAvailableForRole(selectedLayer, selectedRole.id)}
                      onOpenGuide={() => setDrawerLayerId(selectedLayer.id)}
                      onConfigure={() => isLayerAvailableForRole(selectedLayer, selectedRole.id) && setConfigLayerId(selectedLayer.id)}
                    />
                  ) : (
                    <div className="placeholder-panel">
                      <CircleHelp size={22} />
                      <p>Select a layer to see what it does, why it matters, and what it unlocks later in Lofty.</p>
                    </div>
                  )}

                  <ReadinessSummary
                    role={selectedRole}
                    readinessScore={launchReadinessScore}
                    completedLayers={snapshot.completedLayers.map(getLayerById)}
                    skippedLayers={snapshot.skippedLayers.map(getLayerById)}
                    remainingLayers={permissionSet?.requiredLayers.filter((layer) => !snapshot.completedLayers.includes(layer.id)) ?? []}
                    canBuildWebsite={canBuildWebsite}
                    onBuildWebsite={handleBuildWebsite}
                    buildState={websiteBuildState}
                  />
                </aside>
              </div>

              <DragOverlay>
                {draggingLayerId ? <DragPreview layer={getLayerById(draggingLayerId)} /> : null}
              </DragOverlay>
            </DndContext>

            {showAccessPreview && permissionSet ? (
              <AccessPreviewModal
                role={selectedRole}
                permissionSet={permissionSet}
                onClose={() => setShowAccessPreview(false)}
              />
            ) : null}

            {drawerLayer ? (
              <LayerDrawer
                layer={drawerLayer}
                roleId={selectedRole.id}
                available={isLayerAvailableForRole(drawerLayer, selectedRole.id)}
                onClose={() => setDrawerLayerId(null)}
              />
            ) : null}

            {configLayer ? (
              <ConfigModal
                layer={configLayer}
                values={{
                  ...normalizeConfigDefaults(configLayer),
                  ...snapshot.layerConfigs[configLayer.id]
                }}
                onChange={(key, value) => updateLayerConfig(configLayer.id, key, value)}
                onClose={() => setConfigLayerId(null)}
              />
            ) : null}

            {showTemplateBuilder && selectedRole ? (
              <TemplateBuilderModal
                role={selectedRole}
                activeLayers={snapshot.activeLayers.map(getLayerById)}
                draft={templateDraft}
                onDraftChange={setTemplateDraft}
                onClose={() => setShowTemplateBuilder(false)}
                onSave={saveTemplate}
              />
            ) : null}
          </div>
        )}
      </main>
    </div>
  );
}

function TopNavigation() {
  return (
    <header className="top-nav">
      <div className="brand-mark">
        <div className="brand-logo">
          <span className="brand-cut" />
        </div>
        <div className="brand-copy">
          <strong>Lofty</strong>
          <span>Onboarding Studio</span>
        </div>
      </div>
      <nav className="nav-links" aria-label="Primary">
        {topNavItems.map((item) => (
          <a key={item} href="#" onClick={(event) => event.preventDefault()}>
            {item}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="nav-chip">Setup tour</button>
      </div>
    </header>
  );
}

function RoleSelectionScreen({ onSelect }: { onSelect: (role: RoleDefinition) => void }) {
  return (
    <section className="role-selection-page">
      <div className="hero-copy">
        <p className="section-kicker">Role-aware setup</p>
        <h1>Who are you setting this up for?</h1>
        <p>
          Choose one role first. The rest of the onboarding only shows the Lofty layers, features, and controls that role
          can actually use.
        </p>
      </div>

      <div className="role-grid">
        {roleDefinitions.map((role) => {
          const Icon = role.icon;
          return (
            <button key={role.id} className="role-card" onClick={() => onSelect(role)}>
              <div className="role-icon">
                <Icon size={22} />
              </div>
              <div className="role-card-copy">
                <div className="role-title-row">
                  <strong>{role.title}</strong>
                  <span>{role.accessLabel}</span>
                </div>
                <p>{role.description}</p>
                <div className="role-meta">
                  <div>
                    <small>What they do</small>
                    <span>{role.subtitle}</span>
                  </div>
                  <div>
                    <small>Setup focus</small>
                    <span>{role.setupFocus}</span>
                  </div>
                </div>
                <div className="role-card-footer">
                  <span>See only the layers this role can access</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function OverviewBar({
  role,
  templates,
  selectedTemplateId,
  onTemplateSelect,
  onPhaseChange,
  currentPhase,
  canOpenReview,
  readinessScore,
  completedCount,
  activeCount,
  skippedCount
}: {
  role: RoleDefinition;
  templates: (TemplateDefinition | SavedTemplate)[];
  selectedTemplateId: string;
  onTemplateSelect: (template: TemplateDefinition | SavedTemplate) => void;
  onPhaseChange: (phase: SetupPhase) => void;
  currentPhase: SetupPhase;
  canOpenReview: boolean;
  readinessScore: number;
  completedCount: number;
  activeCount: number;
  skippedCount: number;
}) {
  return (
    <section className="overview-bar">
      <div className="overview-summary-card">
        <span>{role.title}</span>
        <strong>{readinessScore}% launch readiness</strong>
        <p>Completed {completedCount} layers, active {activeCount}, skipped {skippedCount}.</p>
      </div>
      <div className="template-strip">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`template-pill ${selectedTemplateId === template.id ? "template-pill--active" : ""}`}
            onClick={() => onTemplateSelect(template)}
          >
            <Sparkles size={14} />
            <span>{template.name}</span>
          </button>
        ))}
      </div>
      <div className="phase-tabs">
        {(["overview", "configure", "review"] as SetupPhase[]).map((phase) => (
          <button
            key={phase}
            className={`phase-tab ${currentPhase === phase ? "phase-tab--active" : ""}`}
            onClick={() => {
              if (phase === "review" && !canOpenReview) {
                return;
              }
              onPhaseChange(phase);
            }}
            disabled={phase === "review" && !canOpenReview}
          >
            {phase}
          </button>
        ))}
      </div>
    </section>
  );
}

function CatalogLayerCard({
  layer,
  roleId,
  active,
  hidden,
  pinned,
  expanded,
  onToggleExpand,
  onSelect,
  onAdd,
  onHide,
  onPin
}: {
  layer: LayerDefinition;
  roleId: RoleId;
  active: boolean;
  hidden: boolean;
  pinned: boolean;
  expanded: boolean;
  onToggleExpand: () => void;
  onSelect: () => void;
  onAdd: () => void;
  onHide: () => void;
  onPin: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `catalog:${layer.id}`,
    data: { layerId: layer.id }
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1
  };

  return (
    <div ref={setNodeRef} style={style} className={`catalog-layer-card ${active ? "catalog-layer-card--active" : ""}`}>
      <div className="catalog-layer-top">
        <button className="icon-button drag-handle" aria-label={`Drag ${layer.name}`} {...listeners} {...attributes}>
          <GripVertical size={16} />
        </button>
        <button className="catalog-layer-main" onClick={onSelect}>
          <div className="catalog-layer-copy">
            <div className="catalog-layer-title">
              <strong>{layer.name}</strong>
              <span>{isLayerRequiredForRole(layer, roleId) ? "Required" : "Optional"}</span>
            </div>
            <p>{layer.shortDescription}</p>
          </div>
        </button>
      </div>
      <div className="catalog-layer-actions">
        <button className="mini-action" onClick={onToggleExpand}>
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          Details
        </button>
        <button className={`mini-action ${pinned ? "mini-action--active" : ""}`} onClick={onPin}>
          <Pin size={14} />
          Pin
        </button>
        <button className="mini-action" onClick={onHide}>
          <X size={14} />
          {hidden ? "Show" : "Hide"}
        </button>
        <button className="mini-action mini-action--primary" onClick={onAdd} disabled={active}>
          <Plus size={14} />
          {active ? "In workspace" : "Add"}
        </button>
      </div>
      {expanded ? (
        <div className="catalog-layer-details">
          <p>{layer.description}</p>
          <ul>
            {layer.featureIds.map((featureId) => (
              <li key={featureId}>{getFeatureById(featureId).name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function WorkspaceDropZone({ children, isEmpty }: { children: React.ReactNode; isEmpty: boolean }) {
  const { setNodeRef, isOver } = useDroppable({ id: "workspace" });
  return (
    <div ref={setNodeRef} className={`workspace-dropzone ${isOver ? "workspace-dropzone--over" : ""} ${isEmpty ? "workspace-dropzone--empty" : ""}`}>
      {children}
    </div>
  );
}

function EmptyWorkspace({
  recommendedLayers,
  onAdd
}: {
  recommendedLayers: LayerDefinition[];
  onAdd: (layerId: LayerId) => void;
}) {
  return (
    <div className="empty-workspace">
      <div className="empty-workspace-copy">
        <Bot size={28} />
        <h3>Drag a layer here to begin setup</h3>
        <p>
          Start with one of the recommended layers below, or drag from the left panel to build your own setup path.
        </p>
      </div>
      <div className="chip-wrap">
        {recommendedLayers.map((layer) => (
          <button key={layer.id} className="mini-chip" onClick={() => onAdd(layer.id)}>
            <Plus size={12} />
            {layer.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function ActiveLayerCard({
  layer,
  roleId,
  completed,
  skipped,
  pinned,
  selected,
  configValues,
  stepCompletion,
  onSelect,
  onRemove,
  onOpenConfig,
  onOpenGuide,
  onPin,
  onSkip,
  onStepToggle,
  canSkip
}: {
  layer: LayerDefinition;
  roleId: RoleId;
  completed: boolean;
  skipped: boolean;
  pinned: boolean;
  selected: boolean;
  configValues: LayerConfigValues;
  stepCompletion: Record<string, boolean>;
  onSelect: () => void;
  onRemove: () => void;
  onOpenConfig: () => void;
  onOpenGuide: () => void;
  onPin: () => void;
  onSkip: () => void;
  onStepToggle: (stepId: string, checked: boolean) => void;
  canSkip: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: `active:${layer.id}`
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.55 : 1
  };

  const requiredDone = layer.steps.filter((step) => step.required).every((step) => stepCompletion[`${layer.id}:${step.id}`]);

  return (
    <article ref={setNodeRef} style={style} className={`active-layer-card ${selected ? "active-layer-card--selected" : ""}`}>
      <div className="active-layer-header">
        <div className="active-layer-header-left">
          <button className="icon-button drag-handle" aria-label={`Reorder ${layer.name}`} {...listeners} {...attributes}>
            <GripVertical size={16} />
          </button>
          <button className="active-layer-header-copy" onClick={onSelect}>
            <div className="active-layer-title">
              <strong>{layer.name}</strong>
              <div className="status-row">
                {completed ? <span className="status-pill status-pill--done">Complete</span> : null}
                {pinned ? <span className="status-pill">Pinned</span> : null}
                {!completed ? <span className="status-pill status-pill--pending">{isLayerRequiredForRole(layer, roleId) ? "Required" : "Optional"}</span> : null}
              </div>
            </div>
            <p>{layer.shortDescription}</p>
          </button>
        </div>
        <div className="active-layer-actions">
          <button className="mini-action" onClick={onOpenGuide}>
            <CircleHelp size={14} />
            Guide
          </button>
          <button className="mini-action" onClick={onOpenConfig}>
            <Sparkles size={14} />
            Configure
          </button>
          <button className={`mini-action ${pinned ? "mini-action--active" : ""}`} onClick={onPin}>
            <Pin size={14} />
            Pin
          </button>
          {canSkip ? (
            <button className="mini-action" onClick={onSkip}>
              <CircleDashed size={14} />
              Skip
            </button>
          ) : null}
          <button className="mini-action" onClick={onRemove}>
            <Trash2 size={14} />
            Remove
          </button>
        </div>
      </div>

      <div className="layer-card-body">
        <div className="layer-card-column">
          <h4>Setup steps</h4>
          <div className="steps-list">
            {layer.steps.map((step) => {
              const checked = Boolean(stepCompletion[`${layer.id}:${step.id}`]);
              const feature = step.featureId ? getFeatureById(step.featureId) : null;
              return (
                <label key={step.id} className={`step-item ${checked ? "step-item--checked" : ""}`}>
                  <input type="checkbox" checked={checked} onChange={(event) => onStepToggle(step.id, event.target.checked)} />
                  <div>
                    <div className="step-title-row">
                      <strong>{step.title}</strong>
                      {step.required ? <span>Required</span> : <span>Optional</span>}
                    </div>
                    <p>{step.description}</p>
                    {feature ? <small>{feature.description}</small> : null}
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <div className="layer-card-column">
          <h4>Configured right now</h4>
          <div className="config-summary">
            {layer.configSchema.map((field) => (
              <div key={field.id} className="config-row">
                <span>{field.label}</span>
                <strong>
                  {typeof configValues[field.id] === "boolean"
                    ? configValues[field.id]
                      ? "On"
                      : "Off"
                    : String(configValues[field.id] || "Not set")}
                </strong>
              </div>
            ))}
          </div>

          <div className="education-mini-card">
            <p className="education-label">Why this matters</p>
            <strong>{layer.whyItMatters}</strong>
            <p>{layer.example}</p>
          </div>
        </div>
      </div>

      <div className="layer-card-footer">
        <span>
          {requiredDone ? (
            <>
              <Check size={14} />
              This layer is ready for launch.
            </>
          ) : (
            <>
              <AlertCircle size={14} />
              Finish the required steps to mark this layer complete.
            </>
          )}
        </span>
      </div>
      {skipped ? <div className="screenreader-only">This layer is skipped.</div> : null}
    </article>
  );
}

function ExplanationPanel({
  layer,
  roleId,
  configValues,
  completed,
  available,
  onOpenGuide,
  onConfigure
}: {
  layer: LayerDefinition;
  roleId: RoleId;
  configValues: LayerConfigValues;
  completed: boolean;
  available: boolean;
  onOpenGuide: () => void;
  onConfigure: () => void;
}) {
  const featureItems = layer.featureIds.map(getFeatureById);
  return (
    <div className="explanation-panel">
      <div className={`explanation-card ${available ? "" : "explanation-card--locked"}`}>
        <div className="explanation-heading">
          <div>
            <p className="section-kicker">{available ? "Selected layer" : "Locked layer"}</p>
            <h3>{layer.name}</h3>
          </div>
          {completed ? <BadgeCheck size={22} /> : available ? <Sparkles size={22} /> : <Lock size={20} />}
        </div>
        <p>{layer.description}</p>
        {!available ? (
          <div className="locked-inline-note">
            <Lock size={14} />
            <span>{layer.lockedExplanation ?? "This layer belongs to a different permission level."}</span>
          </div>
        ) : null}

        <div className="explanation-grid">
          <div>
            <small>What it is</small>
            <strong>{layer.whatItIs}</strong>
          </div>
          <div>
            <small>Why it matters</small>
            <strong>{layer.whyItMatters}</strong>
          </div>
          <div>
            <small>When to use it</small>
            <strong>{layer.whenToUse}</strong>
          </div>
          <div>
            <small>Who can use it</small>
            <strong>{layer.whoCanUseLabel}</strong>
          </div>
        </div>
      </div>

      <div className="explanation-card">
        <h4>What this unlocks later</h4>
        <ul className="plain-list">
          {layer.unlocks.map((unlock) => (
            <li key={unlock}>
              <MoveRight size={14} />
              {unlock}
            </li>
          ))}
        </ul>
      </div>

      <div className="explanation-card">
        <h4>Features inside this layer</h4>
        <div className="feature-stack">
          {featureItems.map((feature) => (
            <FeatureTile key={feature.id} feature={feature} roleId={roleId} />
          ))}
        </div>
      </div>

      <div className="explanation-card">
        <h4>Plain-English example</h4>
        <p>{layer.example}</p>
        <small>If you skip this: {layer.skipImpact}</small>
      </div>

      {available ? (
        <div className="panel-button-row">
          <button className="secondary-button" onClick={onOpenGuide}>
            <CircleHelp size={16} />
            Layer detail drawer
          </button>
          <button className="primary-button" onClick={onConfigure}>
            <Sparkles size={16} />
            Feature config modal
          </button>
        </div>
      ) : null}

      <div className="explanation-card">
        <h4>Current config preview</h4>
        <div className="config-summary">
          {layer.configSchema.map((field) => (
            <div key={field.id} className="config-row">
              <span>{field.label}</span>
              <strong>
                {typeof configValues[field.id] === "boolean"
                  ? configValues[field.id]
                    ? "On"
                    : "Off"
                  : String(configValues[field.id] || "Not set")}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureTile({ feature, roleId }: { feature: FeatureDefinition; roleId: RoleId }) {
  const available = feature.whoCanUse.includes(roleId);
  return (
    <div className={`feature-tile ${available ? "" : "feature-tile--locked"}`}>
      <div className="feature-tile-header">
        <strong>{feature.name}</strong>
        {available ? <span>Available</span> : <span>Locked</span>}
      </div>
      <p>{feature.description}</p>
      <small>{available ? feature.example : "Hidden because this role does not control this part of Lofty."}</small>
    </div>
  );
}

function ReadinessSummary({
  role,
  readinessScore,
  completedLayers,
  skippedLayers,
  remainingLayers,
  canBuildWebsite,
  onBuildWebsite,
  buildState
}: {
  role: RoleDefinition;
  readinessScore: number;
  completedLayers: LayerDefinition[];
  skippedLayers: LayerDefinition[];
  remainingLayers: LayerDefinition[];
  canBuildWebsite: boolean;
  onBuildWebsite: () => void;
  buildState: "idle" | "building" | "ready";
}) {
  return (
    <div className="readiness-summary">
      <div className="readiness-score-ring">
        <div className="score-ring-inner">
          <span>{readinessScore}%</span>
          <small>Launch readiness</small>
        </div>
      </div>

      <div className="readiness-card">
        <h4>What {role.title} now has access to</h4>
        <ul className="plain-list">
          {role.accessSummary.map((item) => (
            <li key={item}>
              <Check size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="readiness-card">
        <h4>Completed layers</h4>
        <div className="chip-wrap">
          {completedLayers.length ? completedLayers.map((layer) => <span key={layer.id} className="mini-chip mini-chip--success">{layer.name}</span>) : <span className="muted-copy">Nothing marked complete yet.</span>}
        </div>
      </div>

      <div className="readiness-card">
        <h4>What remains</h4>
        <div className="chip-wrap">
          {remainingLayers.length ? remainingLayers.map((layer) => <span key={layer.id} className="mini-chip mini-chip--warning">{layer.name}</span>) : <span className="muted-copy">All required layers are finished.</span>}
        </div>
      </div>

      {skippedLayers.length ? (
        <div className="readiness-card">
          <h4>Skipped layers</h4>
          <div className="chip-wrap">
            {skippedLayers.map((layer) => (
              <span key={layer.id} className="mini-chip">{layer.name}</span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="build-card">
        <div>
          <p className="section-kicker">Final step</p>
          <h4>Build website</h4>
          <p>
            Once profile, website, and the core setup are ready, Lofty can build the first website experience from your
            setup choices.
          </p>
        </div>
        <button className="primary-button" disabled={!canBuildWebsite || buildState === "building"} onClick={onBuildWebsite}>
          {buildState === "building" ? (
            <>
              <CircleDashed className="spin" size={16} />
              Building...
            </>
          ) : (
            <>
              <WandSparkles size={16} />
              Build website
            </>
          )}
        </button>
        {!canBuildWebsite ? (
          <small>Complete Profile & Branding and Website first so Lofty has enough context to generate the site.</small>
        ) : null}
      </div>
    </div>
  );
}

function AccessPreviewModal({
  role,
  permissionSet,
  onClose
}: {
  role: RoleDefinition;
  permissionSet: ReturnType<typeof computePermissionSet>;
  onClose: () => void;
}) {
  return (
    <ModalFrame title={`${role.title} access preview`} subtitle="This role sees only the layers and controls it can actually use." onClose={onClose}>
      <div className="modal-grid">
        <div className="modal-card">
          <h4>Accessible layers</h4>
          <div className="chip-wrap">
            {permissionSet.availableLayers.map((layer) => (
              <span key={layer.id} className="mini-chip mini-chip--success">{layer.name}</span>
            ))}
          </div>
        </div>
        <div className="modal-card">
          <h4>Locked layers</h4>
          <div className="locked-stack">
            {permissionSet.lockedLayers.map((layer) => (
              <div key={layer.id} className="locked-layer-card locked-layer-card--static">
                <div>
                  <strong>{layer.name}</strong>
                  <span>{layer.lockedExplanation ?? "Managed by another role."}</span>
                </div>
                <Lock size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalFrame>
  );
}

function LayerDrawer({
  layer,
  roleId,
  available,
  onClose
}: {
  layer: LayerDefinition;
  roleId: RoleId;
  available: boolean;
  onClose: () => void;
}) {
  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="drawer-panel" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <p className="section-kicker">Layer detail drawer</p>
            <h3>{layer.name}</h3>
          </div>
          <button className="icon-button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {!available ? (
          <div className="drawer-note">
            <Lock size={14} />
            {layer.lockedExplanation ?? "This layer is managed by another role."}
          </div>
        ) : null}

        <div className="drawer-section">
          <h4>What this layer teaches</h4>
          <p>{layer.whatItIs}</p>
          <p>{layer.whyItMatters}</p>
          <p>{layer.whenToUse}</p>
        </div>

        <div className="drawer-section">
          <h4>Setup steps</h4>
          <ul className="drawer-step-list">
            {layer.steps.map((step) => (
              <li key={step.id}>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
                <small>{step.required ? "Required" : "Optional"}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer-section">
          <h4>Feature access for this role</h4>
          <div className="feature-stack">
            {layer.featureIds.map((featureId) => (
              <FeatureTile key={featureId} feature={getFeatureById(featureId)} roleId={roleId} />
            ))}
          </div>
        </div>

        <div className="drawer-section">
          <h4>Dependencies</h4>
          <div className="chip-wrap">
            {layer.dependencies.length ? (
              layer.dependencies.map((dependency) => <span key={dependency} className="mini-chip">{getLayerById(dependency).name}</span>)
            ) : (
              <span className="muted-copy">No earlier layer required.</span>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

function ConfigModal({
  layer,
  values,
  onChange,
  onClose
}: {
  layer: LayerDefinition;
  values: LayerConfigValues;
  onChange: (key: string, value: string | boolean) => void;
  onClose: () => void;
}) {
  return (
    <ModalFrame title={`${layer.name} config`} subtitle="Simple settings that shape how this layer behaves." onClose={onClose}>
      <div className="modal-form">
        {layer.configSchema.map((field) => (
          <label key={field.id} className="form-field">
            <span>{field.label}</span>
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
                {Boolean(values[field.id]) ? "Enabled" : "Disabled"}
              </button>
            ) : (
              <input
                type="text"
                value={String(values[field.id] ?? "")}
                placeholder={field.placeholder}
                onChange={(event) => onChange(field.id, event.target.value)}
              />
            )}
          </label>
        ))}
      </div>
    </ModalFrame>
  );
}

function TemplateBuilderModal({
  role,
  activeLayers,
  draft,
  onDraftChange,
  onClose,
  onSave
}: {
  role: RoleDefinition;
  activeLayers: LayerDefinition[];
  draft: { name: string; description: string };
  onDraftChange: (next: { name: string; description: string }) => void;
  onClose: () => void;
  onSave: () => void;
}) {
  return (
    <ModalFrame title="Custom Template Builder" subtitle={`Save a reusable setup template for ${role.title.toLowerCase()} users.`} onClose={onClose}>
      <div className="modal-card">
        <h4>Template layers</h4>
        <div className="chip-wrap">
          {activeLayers.map((layer) => (
            <span key={layer.id} className="mini-chip">{layer.name}</span>
          ))}
        </div>
      </div>
      <div className="modal-form">
        <label className="form-field">
          <span>Template name</span>
          <input
            type="text"
            placeholder="Office launch template"
            value={draft.name}
            onChange={(event) => onDraftChange({ ...draft, name: event.target.value })}
          />
        </label>
        <label className="form-field">
          <span>Description</span>
          <textarea
            placeholder="Use this when a new office admin needs a clean, guided setup path."
            value={draft.description}
            onChange={(event) => onDraftChange({ ...draft, description: event.target.value })}
          />
        </label>
      </div>
      <div className="panel-button-row">
        <button className="secondary-button" onClick={onClose}>
          Cancel
        </button>
        <button className="primary-button" onClick={onSave} disabled={!draft.name.trim()}>
          Save template
        </button>
      </div>
    </ModalFrame>
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
  children: React.ReactNode;
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
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function WebsitePreview({
  role,
  layerConfigs,
  readiness,
  completedLayers,
  onBack
}: {
  role: RoleDefinition;
  layerConfigs: Partial<Record<LayerId, LayerConfigValues>>;
  readiness: number;
  completedLayers: LayerDefinition[];
  onBack: () => void;
}) {
  const profile = layerConfigs["profile-branding"] ?? {};
  const website = layerConfigs["website"] ?? {};
  const market = String(profile.marketFocus || "your market");
  const businessName = String(profile.businessName || "Your Lofty Brand");
  const headline = String(website.headline || `Real estate guidance built for ${market}`);
  const domain = String(website.domain || "your-site.loftyagent.com");
  const websiteType = String(website.websiteType || "Agent Website");

  return (
    <section className="website-preview-page">
      <div className="website-preview-toolbar">
        <button className="secondary-button" onClick={onBack}>
          Back to review
        </button>
        <div className="preview-status">
          <span>{websiteType}</span>
          <strong>{domain}</strong>
          <small>{readiness}% ready at build time</small>
        </div>
      </div>

      <div className="generated-site">
        <section className="generated-site-hero">
          <div className="generated-badge">Built from Lofty setup</div>
          <h1>{headline}</h1>
          <p>
            {businessName} is now live with a Lofty-style launch site shaped by the selected role, completed setup layers,
            and website generation choices.
          </p>
          <div className="generated-hero-actions">
            <button className="primary-button">Search listings</button>
            <button className="secondary-button">Get home value</button>
          </div>
        </section>

        <section className="generated-site-grid">
          <article className="generated-card">
            <h3>What this site includes</h3>
            <ul className="plain-list">
              <li><Check size={14} /> Lofty-style brand hero and lead capture entry points</li>
              <li><Check size={14} /> Ready for MLS / IDX activation and listing pages</li>
              <li><Check size={14} /> Built from Profile, Website, and Communication setup data</li>
            </ul>
          </article>
          <article className="generated-card">
            <h3>Role-aware launch outcome</h3>
            <p>{role.title} users see a launch path that matches the parts of Lofty they can actually operate.</p>
            <div className="chip-wrap">
              {completedLayers.slice(0, 8).map((layer) => (
                <span key={layer.id} className="mini-chip mini-chip--success">{layer.name}</span>
              ))}
            </div>
          </article>
          <article className="generated-card">
            <h3>Next recommended actions</h3>
            <ul className="plain-list">
              <li><ArrowRight size={14} /> Review listing search and lead capture blocks</li>
              <li><ArrowRight size={14} /> Connect or confirm MLS feed status</li>
              <li><ArrowRight size={14} /> Publish automation and communication workflows</li>
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

function DragPreview({ layer }: { layer: LayerDefinition }) {
  return (
    <div className="drag-preview">
      <Sparkles size={16} />
      <span>{layer.name}</span>
    </div>
  );
}

export default App;
