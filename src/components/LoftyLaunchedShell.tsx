"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { LaunchedNavItem, LaunchedShellView } from "../types";

const attrs = {
  shell: { "data-v-43af4082": "" },
  headerWrap: { "data-v-febe379a": "" },
  header: { "data-v-2fc56c93": "" },
  menu: { "data-v-748ac1a2": "" },
  overflow: { "data-v-f4100c9e": "" },
  dropdown: { "data-v-b30c4e06": "" },
  search: { "data-v-42bcc46e": "" },
  rightPanel: { "data-v-046285bc": "" },
  utility: { "data-v-d1986540": "" },
  user: { "data-v-57b9eed3": "" },
  account: { "data-v-2f53f69e": "" },
  progress: { "data-v-2d464a46": "" },
  slot: { "data-v-759a198c": "" }
};

type UtilityItem = {
  id: string;
  icon: string;
  badge?: string;
  description?: string;
  extraClass?: string;
  href?: string;
  title: string;
  view?: Extract<LaunchedShellView, "messages" | "negotiation">;
  opensProfileSwitch?: boolean;
};

type SubmenuGuide = {
  imageSrc: string;
  text: string;
};

type UtilityPanelOverride = {
  itemId: string;
  title?: string;
  content: ReactNode;
};

type ShellGuidedOverlay =
  | {
      mode: "blocked";
      onClick: () => void;
      content: ReactNode;
    }
  | {
      mode: "menu";
    };

const utilityItems: UtilityItem[] = [
  {
    id: "messages",
    icon: "icon-message_01",
    title: "Messages",
    description: "Open the live negotiation thread and send chat, email, or call-note updates.",
    view: "messages"
  },
  {
    id: "negotiation",
    icon: "icon-offer_01",
    title: "Negotiation",
    description: "Open the negotiation dashboard to track pricing, concerns, and timeline activity.",
    view: "negotiation"
  },
  {
    id: "change-user",
    icon: "icon-re_01",
    title: "Switch User",
    description: "Choose whether the experience is viewed as the buyer, seller, or one of the agent profiles.",
    opensProfileSwitch: true
  },
  {
    id: "ai",
    icon: "icon-ai-AI",
    title: "AI Copilots",
    description: "This local clone keeps the utility bar interactive, while the full AI workspace remains outside the merged app shell.",
    href: "/"
  },
  {
    id: "dialer",
    icon: "icon-call_01",
    extraClass: "dialer-entry",
    title: "Dialer",
    description: "The dialer runtime is intentionally removed from this local clone, so this panel acts as a local placeholder instead of launching live services."
  },
  {
    id: "inbox",
    icon: "icon-inbox",
    badge: "dot",
    title: "Inbox",
    description: "Inbox content is not connected in the static clone, but the utility bar remains interactive."
  },
  {
    id: "notifications",
    icon: "icon-notification_01",
    badge: "1",
    title: "Notifications",
    description: "Notifications are frozen in this build. The panel is rendered locally so the utility bar still behaves like the app shell."
  },
  {
    id: "help",
    icon: "icon-help_01",
    title: "Help",
    description: "Help center content lives outside the local snapshot. Use the button below to open the original page in a new tab.",
    href: "https://help.lofty.com/"
  },
  {
    id: "settings",
    icon: "icon-Settings",
    title: "Settings",
    description: "Settings are outside the merged dashboard scope. This panel keeps the utility bar interactive without reintroducing the legacy runtime.",
    href: "/"
  }
];

const userMenuItems = [
  { label: "Billing Center", icon: "icon-Billings", href: "/" },
  {
    label: "Product Updates",
    icon: "icon-a-ProductUpdates",
    href: "https://help.lofty.com/hc/en-us/categories/201663123-What-s-New-"
  },
  { label: "Earn Rewards", icon: "icon-earn_reword", href: "/" }
];

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function dropdownMaskStyle() {
  return {
    display: "none",
    pointerEvents: "none" as const
  };
}

const HOVER_CLOSE_DELAY_MS = 80;

function MenuItemAction({
  children,
  className,
  href,
  onAction,
  ...props
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onAction?: () => void;
  [key: string]: unknown;
}) {
  if (onAction) {
    return (
      <button className={`${className ?? ""} lofty-reset-button lofty-shell-button-link`.trim()} type="button" onClick={onAction} {...props}>
        {children}
      </button>
    );
  }

  if (!href) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    );
  }

  const external = isExternalHref(href);

  return (
    <a
      className={className}
      href={href}
      rel={external ? "noreferrer noopener" : undefined}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

function MenuSubitem({
  activeView,
  isGuidedMenuActive,
  guidedSubmenuParentLabel,
  highlightedSubmenuLabel,
  item,
  onNavigateHome,
  onNavigate,
  submenuGuide
}: {
  activeView: LaunchedShellView;
  isGuidedMenuActive?: boolean;
  guidedSubmenuParentLabel?: string | null;
  highlightedSubmenuLabel?: string | null;
  item: LaunchedNavItem;
  onNavigateHome: () => void;
  onNavigate: (view: LaunchedShellView) => void;
  submenuGuide?: SubmenuGuide | null;
}) {
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const isActive = item.view ? activeView === item.view : false;
  const isGuided = Boolean(isGuidedMenuActive && guidedSubmenuParentLabel && highlightedSubmenuLabel === item.label);
  const itemAction = item.view ? () => onNavigate(item.view as LaunchedShellView) : item.href === "/" ? onNavigateHome : undefined;

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openNestedMenu() {
    clearCloseTimer();
    setIsNestedOpen(true);
  }

  function closeNestedMenu() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsNestedOpen(false);
      closeTimerRef.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  }

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  const nestedItems = item.submenu ?? [];

  if (nestedItems.length === 0) {
    return (
      <div
        className={`lofty-guided-subitem ${isGuided ? "lofty-guided-subitem--active lofty-guided-subitem--topmost" : ""}`.trim()}
      >
        <MenuItemAction
          {...attrs.dropdown}
          className={`crm-only-header-menu__item crm-only-header-menu__subitem ${isActive ? "is-active" : ""} ${isGuided ? "crm-only-header-menu__subitem--guided" : ""}`.trim()}
          href={item.href && item.href !== "/" ? item.href : undefined}
          needicon=""
          onAction={itemAction}
        >
          {item.icon ? <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${item.icon}`}></span> : null}
          <span {...attrs.dropdown} className="crm-only-header-menu__title">
            {item.label}
          </span>
        </MenuItemAction>
        {isGuided && submenuGuide ? (
          <div className="lofty-menu-guide lofty-menu-guide--guided">
            <img src={submenuGuide.imageSrc} alt="" aria-hidden="true" />
            <div className="mascot-callout__bubble">{submenuGuide.text}</div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      {...attrs.dropdown}
      className="com-dropdownbox menu-dropdown-header crm-only-header-menu__subitem lofty-nav-submenu"
      onMouseEnter={openNestedMenu}
      onMouseLeave={closeNestedMenu}
    >
      <div className="com-dropdown-mask" style={dropdownMaskStyle()}></div>
      <div className="com-dropdown-body">
        <MenuItemAction
          {...attrs.dropdown}
          className="crm-only-header-menu__item hoverCursor lofty-nav-submenu__trigger"
          href={item.href && item.href !== "/" ? item.href : undefined}
          onAction={item.href === "/" ? onNavigateHome : undefined}
        >
          {item.icon ? <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${item.icon}`}></span> : null}
          <span {...attrs.dropdown} className="crm-only-header-menu__title">
            {item.label}
          </span>
          <span {...attrs.dropdown} className="icon2017 icon-arrow_08_right lofty-nav-submenu__arrow"></span>
        </MenuItemAction>
      </div>
      <div
        className="com-dropdown lofty-nav-submenu__flyout"
        style={{ display: isNestedOpen ? "block" : "none" }}
        onMouseEnter={openNestedMenu}
        onMouseLeave={closeNestedMenu}
      >
        <div className="com-dropdown-content crm-only-header-menu__dropdown">
          {nestedItems.map((subitem) => (
            <MenuSubitem
              key={subitem.label}
              activeView={activeView}
              isGuidedMenuActive={isGuidedMenuActive}
              guidedSubmenuParentLabel={guidedSubmenuParentLabel}
              highlightedSubmenuLabel={highlightedSubmenuLabel}
              item={subitem}
              onNavigateHome={onNavigateHome}
              onNavigate={onNavigate}
              submenuGuide={submenuGuide}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function isNavItemActive(item: LaunchedNavItem, activeView: LaunchedShellView): boolean {
  if (item.view && item.view === activeView) {
    return true;
  }

  return (item.submenu ?? []).some((subitem) => isNavItemActive(subitem, activeView));
}

function HeaderMenuCell({
  activeView,
  isGuidedMenuActive,
  guidedSubmenuParentLabel,
  highlightedSubmenuLabel,
  index,
  item,
  onNavigateHome,
  openMenu,
  setOpenMenu,
  onNavigate,
  submenuGuide
}: {
  activeView: LaunchedShellView;
  isGuidedMenuActive?: boolean;
  guidedSubmenuParentLabel?: string | null;
  highlightedSubmenuLabel?: string | null;
  index: number;
  item: LaunchedNavItem;
  onNavigateHome: () => void;
  openMenu: string | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
  onNavigate: (view: LaunchedShellView) => void;
  submenuGuide?: SubmenuGuide | null;
}) {
  const isOpen = openMenu === item.label;
  const isActive = isNavItemActive(item, activeView);
  const isGuidedParent = Boolean(isGuidedMenuActive && guidedSubmenuParentLabel === item.label);
  const closeTimerRef = useRef<number | null>(null);

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenuWithDelay() {
    clearCloseTimer();
    setOpenMenu(item.label);
  }

  function closeMenuWithDelay() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu((current) => (current === item.label ? null : current));
      closeTimerRef.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  }

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  const submenuItems = item.submenu ?? [];

  if (submenuItems.length === 0) {
    return (
      <div
        {...attrs.overflow}
        id={`com-overflow-display-cell-${index}`}
        data-index={index}
        className={`display-cell ${isGuidedParent ? "lofty-guided-parent" : ""}`.trim()}
      >
        <MenuItemAction
          {...attrs.dropdown}
          {...attrs.menu}
          className={`crm-only-header-menu__item isTop ${isActive ? "is-active " : ""}${item.isAi ? "flex lofty-ai-menu" : ""} ${isGuidedParent ? "crm-only-header-menu__item--guided-parent" : ""}`.trim()}
          href={item.href && item.href !== "/" ? item.href : undefined}
          data-v-f4100c9e=""
          onAction={item.href === "/" ? onNavigateHome : undefined}
        >
          {item.icon ? <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${item.icon}`}></span> : null}
          <span {...attrs.dropdown} className="crm-only-header-menu__title isTop">
            {item.label}
          </span>
        </MenuItemAction>
      </div>
    );
  }

  return (
    <div
      {...attrs.overflow}
      id={`com-overflow-display-cell-${index}`}
      data-index={index}
      className={`display-cell ${isGuidedParent ? "lofty-guided-parent" : ""}`.trim()}
      onMouseEnter={openMenuWithDelay}
      onMouseLeave={closeMenuWithDelay}
    >
        <div
          {...attrs.dropdown}
          {...attrs.menu}
          data-v-f4100c9e=""
          className={`com-dropdownbox menu-dropdown-header ${isGuidedParent ? "menu-dropdown-header--guided-parent" : ""} ${
            isGuidedParent && isOpen ? "menu-dropdown-header--guided-open" : ""
          }`.trim()}
        >
          <div className="com-dropdown-mask" style={dropdownMaskStyle()}></div>
          <div className="com-dropdown-body">
            <MenuItemAction
              {...attrs.dropdown}
              className={`crm-only-header-menu__item isTop ${isActive ? "is-active " : ""}${item.href ? "hoverCursor" : "cursor-default"} ${isGuidedParent ? "crm-only-header-menu__item--guided-parent" : ""}`.trim()}
              href={item.href && item.href !== "/" ? item.href : undefined}
              onAction={item.href === "/" ? onNavigateHome : undefined}
            >
              <span {...attrs.dropdown} className="crm-only-header-menu__title isTop">
                {item.label}
              </span>
          </MenuItemAction>
        </div>
        <div
          className={`com-dropdown ${isGuidedParent ? "com-dropdown--guided-parent" : ""} ${
            isGuidedParent && isOpen ? "com-dropdown--guided-open" : ""
          }`.trim()}
          style={{ display: isOpen ? "block" : "none" }}
          onMouseEnter={openMenuWithDelay}
          onMouseLeave={closeMenuWithDelay}
        >
            <div
              className={`com-dropdown-content crm-only-header-menu__dropdown ${
                isGuidedParent ? "crm-only-header-menu__dropdown--guided-parent" : ""
              } ${isGuidedParent && isOpen ? "crm-only-header-menu__dropdown--guided-open" : ""}`.trim()}
            >
            {submenuItems.map((subitem) => (
              <MenuSubitem
                key={subitem.label}
                activeView={activeView}
                isGuidedMenuActive={isGuidedMenuActive}
                guidedSubmenuParentLabel={isGuidedParent ? guidedSubmenuParentLabel : null}
                highlightedSubmenuLabel={isGuidedParent ? highlightedSubmenuLabel : null}
                item={subitem}
                onNavigateHome={onNavigateHome}
                onNavigate={onNavigate}
                submenuGuide={isGuidedParent ? submenuGuide : null}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UtilityPanel({
  item,
  onClose,
  override
}: {
  item: (typeof utilityItems)[number] | null;
  onClose: () => void;
  override?: UtilityPanelOverride | null;
}) {
  if (!item) {
    return null;
  }

  const customContent = override?.itemId === item.id ? override : null;

  return (
    <aside className="frozen-utility-panel">
      <div className="frozen-utility-panel__header">
        <div className="frozen-utility-panel__title">{customContent?.title ?? item.title}</div>
        <button className="frozen-utility-panel__close" type="button" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="frozen-utility-panel__body">
        {customContent ? (
          customContent.content
        ) : (
          <>
            <p>{item.description}</p>
            {item.href ? (
              <a
                className="frozen-utility-panel__action"
                href={item.href}
                rel={isExternalHref(item.href) ? "noreferrer noopener" : undefined}
                target={isExternalHref(item.href) ? "_blank" : undefined}
              >
                {isExternalHref(item.href) ? "Open original page" : "Open page"}
              </a>
            ) : null}
          </>
        )}
      </div>
    </aside>
  );
}

export default function LoftyLaunchedShell({
  activeView,
  children,
  activeProfileEmail,
  activeProfileName,
  headerItems,
  onStartAnotherSetup,
  onNavigateHome,
  onNavigateMessages,
  onNavigateNegotiation,
  onNavigatePeople,
  onNavigateSmartPlans,
  onNavigateListings,
  onNavigateWebsites,
  onOpenProfileSwitch,
  forcedOpenMenu,
  guidedSubmenuParentLabel,
  highlightedSubmenuLabel,
  submenuGuide,
  forcedUtilityId,
  utilityPanelOverride,
  shellGuidedOverlay
}: {
  activeView: LaunchedShellView;
  children: ReactNode;
  activeProfileEmail: string;
  activeProfileName: string;
  headerItems: LaunchedNavItem[];
  onStartAnotherSetup: () => void;
  onNavigateHome: () => void;
  onNavigateMessages: () => void;
  onNavigateNegotiation: () => void;
  onNavigatePeople: () => void;
  onNavigateSmartPlans: () => void;
  onNavigateListings: () => void;
  onNavigateWebsites: () => void;
  onOpenProfileSwitch: () => void;
  forcedOpenMenu?: string | null;
  guidedSubmenuParentLabel?: string | null;
  highlightedSubmenuLabel?: string | null;
  submenuGuide?: SubmenuGuide | null;
  forcedUtilityId?: string;
  utilityPanelOverride?: UtilityPanelOverride | null;
  shellGuidedOverlay?: ShellGuidedOverlay | null;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeUtilityId, setActiveUtilityId] = useState<string | null>(null);
  const isGuidedMenuOverlay = shellGuidedOverlay?.mode === "menu";
  const isGuidedMenuActive = Boolean(forcedOpenMenu && guidedSubmenuParentLabel && highlightedSubmenuLabel);
  const isUtilityExpanded = Boolean(activeUtilityId);

  const activeUtility = useMemo(
    () => utilityItems.find((item) => item.id === activeUtilityId) ?? null,
    [activeUtilityId]
  );

  function handleNavigate(view: LaunchedShellView) {
    setOpenMenu(null);

    if (view === "home") {
      onNavigateHome();
      return;
    }

    if (view === "crm-people") {
      onNavigatePeople();
      return;
    }

    if (view === "automation-smart-plans") {
      onNavigateSmartPlans();
      return;
    }

    if (view === "listings") {
      onNavigateListings();
      return;
    }

    if (view === "websites") {
      onNavigateWebsites();
      return;
    }

    if (view === "messages") {
      onNavigateMessages();
      return;
    }

    onNavigateNegotiation();
  }

  function handleNavigateHome() {
    setOpenMenu(null);
    setUserMenuOpen(false);
    setActiveUtilityId(null);
    setSearchOpen(false);
    onNavigateHome();
  }

  function handleUtilityItemClick(item: UtilityItem) {
    if (item.view) {
      setActiveUtilityId(null);
      handleNavigate(item.view);
      return;
    }

    if (item.opensProfileSwitch) {
      setActiveUtilityId(null);
      setUserMenuOpen(false);
      onOpenProfileSwitch();
      return;
    }

    setActiveUtilityId((current) => (current === item.id ? null : item.id));
  }

  function handleStartAnotherSetup() {
    setUserMenuOpen(false);
    onStartAnotherSetup();
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setUserMenuOpen(false);
        setActiveUtilityId(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
        setUserMenuOpen(false);
        setActiveUtilityId(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isUtilityExpanded) {
      setSearchOpen(false);
    }
  }, [isUtilityExpanded]);

  useEffect(() => {
    if (forcedOpenMenu && openMenu !== forcedOpenMenu) {
      setOpenMenu(forcedOpenMenu);
    }
  }, [forcedOpenMenu, openMenu]);

  useEffect(() => {
    if (forcedUtilityId && activeUtilityId !== forcedUtilityId) {
      setActiveUtilityId(forcedUtilityId);
    }
  }, [activeUtilityId, forcedUtilityId]);

  return (
    <div ref={rootRef} className={`chime-website-container${isUtilityExpanded ? " is-utility-expanded" : ""}`}>
      <div {...attrs.shell} id="app" className={isGuidedMenuOverlay ? "lofty-shell--guided-menu" : undefined}>
        <section {...attrs.shell} className="lofty-left-main-container">
          <div {...attrs.shell} className="header-section">
            <div {...attrs.headerWrap} {...attrs.shell} className="chime-website-header-container header-main with-header">
              <div {...attrs.header} {...attrs.headerWrap} className="chime-header-container crm-header crm-header-v2 crm-header-v3 newUI ">
                <div {...attrs.header} id="chime-menu-box" className="crm-header-main crm-headerV2-main">
                  <button
                    {...attrs.header}
                    className={`logo header-logo router-link-active lofty-reset-button ${activeView === "home" ? "launched-brand-button--active" : ""}`.trim()}
                    type="button"
                    onClick={handleNavigateHome}
                  >
                    <img {...attrs.header} src="/frozen-lofty/Lofty_files/Lofty_Logo.png" alt="logo" style={{ width: "100px" }} />
                  </button>

                  <div
                    {...attrs.menu}
                    {...attrs.header}
                    className={`crm-only-menu${isUtilityExpanded ? " is-utility-expanded" : ""}`}
                  >
                    <div
                      {...attrs.overflow}
                      {...attrs.menu}
                      className="com-overflow-ellipsis-wrapper is-text"
                      style={{ ["--eleInterval" as string]: "31px", ["--moreInterval" as string]: "0px" }}
                    >
                      <div {...attrs.overflow} className="display-items">
                        {headerItems.map((item, index) => (
                          <HeaderMenuCell
                            key={item.label}
                            activeView={activeView}
                            isGuidedMenuActive={isGuidedMenuActive}
                            guidedSubmenuParentLabel={guidedSubmenuParentLabel}
                            highlightedSubmenuLabel={highlightedSubmenuLabel}
                            index={index}
                            item={item}
                            onNavigateHome={handleNavigateHome}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                            onNavigate={handleNavigate}
                            submenuGuide={submenuGuide}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    {...attrs.header}
                    className={`right-box${isUtilityExpanded ? " lofty-right-box--compact" : ""}`}
                    style={{ display: searchOpen ? "none" : undefined }}
                  >
                    <button
                      {...attrs.header}
                      className={`search-controller-wrapper lofty-reset-button${
                        isUtilityExpanded ? " lofty-search-controller--compact" : " full-width"
                      }`}
                      type="button"
                      onClick={() => {
                        if (!isUtilityExpanded) {
                          setSearchOpen(true);
                        }
                      }}
                      aria-label="Search"
                    >
                      <i {...attrs.header} className="icon2017 icon-search_Bold"></i>
                    </button>
                    <div {...attrs.header} className="right-menu"></div>
                  </div>

                  <div {...attrs.header} className="search-box" style={{ display: searchOpen ? "block" : "none" }}>
                    <div {...attrs.search} {...attrs.header} className="headerV2-search">
                      <div {...attrs.search} className="headerV2-search-wrap header-search-wrap header-search-note-wrap">
                        <div {...attrs.search} className="input-box flex-box">
                          <i {...attrs.search} className="icon2017 icon-search_01"></i>
                          <input {...attrs.search} placeholder="Name, Phone, Email, Property, Note" className="chime-input" defaultValue="" />
                          <span {...attrs.search} className="search-ai-button">
                            <i {...attrs.search} className="icon2017 icon-AI"></i>
                            AI Mode
                          </span>
                        </div>
                        <div {...attrs.search} className="search-result-box flex-col" style={{ display: "none" }}>
                          <div {...attrs.search} className="search-tab flex-row">
                            <div {...attrs.search} className="tab active">
                              People
                            </div>
                            <div {...attrs.search} className="tab">
                              Note
                            </div>
                          </div>
                          <div {...attrs.search} className="search-result result-height">
                            <ul {...attrs.search} className="header-search-result">
                              <li {...attrs.search} className="empty">
                                No Results Found
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      {...attrs.header}
                      className="icon2017 icon-cancel_bold lofty-reset-button"
                      type="button"
                      onClick={() => setSearchOpen(false)}
                    ></button>
                  </div>

                  <div {...attrs.header} className="header-tips-container"></div>
                </div>
              </div>
            </div>
          </div>

          <div {...attrs.shell} className="content-section">
            <div className="loft-main-router-wrapper">
              <div className="lofty-shell-content">{children}</div>
            </div>
          </div>
        </section>

        <div {...attrs.rightPanel} {...attrs.shell} className="right-panel-wrapper">
            <div {...attrs.utility} {...attrs.rightPanel} className="right-menu-wrapper">
            <div {...attrs.utility} className="right-menu-user-box">
              {userMenuOpen ? (
                <button
                  className="lofty-reset-button lofty-user-menu-backdrop"
                  type="button"
                  aria-label="Close user menu"
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={() => setUserMenuOpen(false)}
                />
              ) : null}
              <div
                {...attrs.user}
                {...attrs.utility}
                className="com-dropdownbox"
                style={userMenuOpen ? { zIndex: 60 } : undefined}
              >
                <div className="com-dropdown-mask" style={dropdownMaskStyle()}></div>
                <button
                  {...attrs.user}
                  className="com-dropdown-body lofty-reset-button"
                  type="button"
                  onClick={() => setUserMenuOpen((open) => !open)}
                >
                  <div {...attrs.user} className="profile-picture right-panel-avatar">
                    <img
                      {...attrs.user}
                      className="user-logo  vertical"
                      src="/frozen-lofty/Lofty_files/original_fa6d7ff1-a294-4b2a-b55a-0d47949a68b8.jpeg"
                      alt={activeProfileName}
                    />
                  </div>
                </button>
                <div className="com-dropdown header-dropdown headerV2-dropdown" style={{ display: userMenuOpen ? "block" : "none" }}>
                  <div className="com-dropdown-content">
                    <div {...attrs.user} className="headerV2-user-list-wrap">
                      <div {...attrs.account} {...attrs.user} className="switch-account">
                        <div {...attrs.account} className="switch-account-flex">
                          <div {...attrs.account} className="switch-account-avatar">
                            <img
                              {...attrs.account}
                              src="/frozen-lofty/Lofty_files/original_fa6d7ff1-a294-4b2a-b55a-0d47949a68b8.jpeg"
                              alt={activeProfileName}
                            />
                          </div>
                          <div {...attrs.account} className="switch-account-name">
                            {activeProfileName}
                          </div>
                          <div {...attrs.account} className="switch-account-email">
                            {activeProfileEmail}
                          </div>
                        </div>
                        <div {...attrs.account} className="switch-account-content">
                          <div {...attrs.account} className="add-btn chime-btn white-btn">
                            <span {...attrs.account} className="icon2017 icon-people_add"></span>
                            Add Account
                          </div>
                          <button
                            {...attrs.account}
                            className="com-dropdown-body lofty-reset-button"
                            type="button"
                            onClick={() => {
                              setUserMenuOpen(false);
                              onOpenProfileSwitch();
                            }}
                          >
                            <div {...attrs.account} className="switch-btn chime-btn white-btn">
                              <span {...attrs.account} className="icon2017 icon-re_01"></span>
                              Switch Account
                            </div>
                          </button>
                        </div>
                      </div>
                      <ul {...attrs.user} className="headerV2-user-list">
                        <li {...attrs.user} className="list-item is-ob">
                          <div {...attrs.user} className="flex-line is-ob">
                            <div {...attrs.user} className="ob-percent-box">
                              <div {...attrs.progress} {...attrs.user}>
                                <div {...attrs.progress} className="ob-percent-content">
                                  <div {...attrs.progress} className="ob-percent-content_name">
                                    <span {...attrs.progress}>Guided Setup</span>
                                    <span {...attrs.progress} className="icon2017 icon-arrow_08_right"></span>
                                  </div>
                                  <div {...attrs.progress} className="ob-percent-content_val">
                                    <span {...attrs.progress} className="text">
                                      Progress
                                    </span>
                                    <span {...attrs.progress} className="rate">
                                      79%
                                    </span>
                                  </div>
                                  <div {...attrs.progress} className="com-progress ob-percent-content__progress progress-line">
                                    <div className="progress-bar">
                                      <div className="progress-bar-outer" style={{ height: "4px" }}>
                                        <div
                                          className="progress-bar-inner"
                                          style={{ width: "79%", backgroundColor: "rgb(59, 92, 222)" }}
                                          title="79%"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        {userMenuItems.map((item) => (
                          <li key={item.label} {...attrs.user} className="list-item">
                            <div {...attrs.user} className="flex-line">
                              <a
                                {...attrs.user}
                                href={item.href}
                                rel={isExternalHref(item.href) ? "noreferrer noopener" : undefined}
                                target={isExternalHref(item.href) ? "_blank" : undefined}
                              >
                                <i {...attrs.user} className={`icon2017 menu-icon ${item.icon}`}></i>
                                <span {...attrs.user}>{item.label}</span>
                              </a>
                            </div>
                          </li>
                        ))}
                        <li {...attrs.user} className="list-item">
                          <div {...attrs.user} className="flex-line">
                            <button
                              {...attrs.user}
                              className="lofty-reset-button lofty-user-menu-action"
                              type="button"
                              onClick={handleStartAnotherSetup}
                            >
                              <span {...attrs.user}>
                                <i {...attrs.user} className="icon2017 icon-re_01"></i>
                                <span {...attrs.user}>Start another setup</span>
                              </span>
                            </button>
                          </div>
                        </li>
                        <li {...attrs.user} className="list-item logout">
                          <div {...attrs.user} className="flex-line">
                            <span {...attrs.user}>
                              <i {...attrs.user} className="icon2017 icon-Logout"></i>
                              <span {...attrs.user}>Log Out</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div {...attrs.utility} className="right-menu-list">
              {utilityItems.map((item) => (
                <button
                  key={item.id}
                  {...attrs.utility}
                  className={`right-menu-item lofty-reset-button${
                    activeUtilityId === item.id || item.view === activeView ? " active" : ""
                  }`}
                  type="button"
                  onClick={() => handleUtilityItemClick(item)}
                  title={item.title}
                  aria-label={item.title}
                >
                  <i
                    {...attrs.utility}
                    className={`icon2017 ${item.icon}${item.extraClass ? ` ${item.extraClass}` : ""}`}
                  ></i>
                  {item.badge === "dot" ? <div {...attrs.utility} className="badge badge-dot"></div> : null}
                  {item.badge && item.badge !== "dot" ? (
                    <div {...attrs.utility} className="badge badge-number">
                      <span {...attrs.utility}>{item.badge}</span>
                    </div>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
          <div
            {...attrs.slot}
            {...attrs.rightPanel}
            className={`right-slot-wrapper${activeUtility ? " is-open" : ""}`}
          >
            <UtilityPanel item={activeUtility} onClose={() => setActiveUtilityId(null)} override={utilityPanelOverride} />
          </div>
        </div>
        {shellGuidedOverlay?.mode === "blocked" ? (
          <button className="lofty-shell-guided-overlay lofty-shell-guided-overlay--blocked" type="button" onClick={shellGuidedOverlay.onClick}>
            <div className="lofty-shell-guided-overlay__content">{shellGuidedOverlay.content}</div>
          </button>
        ) : null}
        {shellGuidedOverlay?.mode === "menu" ? <div className="lofty-shell-guided-overlay lofty-shell-guided-overlay--menu" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
