"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { LaunchedShellView } from "../types";
import testUser from "../config/test-user.json";

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

type ShellSubmenuItem = {
  href?: string;
  icon?: string;
  label: string;
  submenu?: Array<{ href?: string; label: string }>;
  view?: LaunchedShellView;
};

type ShellHeaderItem = {
  href?: string;
  icon?: string;
  isAi?: boolean;
  label: string;
  submenu?: ShellSubmenuItem[];
};

const headerItems: ShellHeaderItem[] = [
  {
    label: "CRM",
    href: "/",
    submenu: [
      { label: "People", icon: "icon-people_06", view: "crm-people" },
      { label: "Segments", icon: "icon-group_01", href: "/" },
      { label: "Tasks", icon: "icon-task_01", href: "/" },
      { label: "Calendar", icon: "icon-calendar_01", href: "/" }
    ]
  },
  {
    label: "Sales",
    href: "/",
    submenu: [
      { label: "Showing", icon: "icon-CRM-showing", href: "/" },
      { label: "Offers", icon: "icon-offer_01", href: "/" },
      { label: "Transactions", icon: "icon-Transaction", href: "/" }
    ]
  },
  {
    label: "Marketing",
    href: "/",
    submenu: [
      { label: "Emails", icon: "icon-mail_01", href: "/" },
      { label: "Text Messages", icon: "icon-message_01", href: "/" },
      { label: "Social Agent", icon: "icon-social_01", href: "/" },
      { label: "Direct Mail", icon: "icon-mailbox_01", href: "/" },
      {
        label: "Lead Generation",
        icon: "icon-lead_capture",
        href: "/",
        submenu: [
          { label: "Buyer Lead Gen", href: "/" },
          { label: "Seller Lead Gen", href: "/" },
          { label: "Re-Marketing Ads", href: "/" }
        ]
      },
      { label: "Lofty Bloom", icon: "icon-location_03", href: "/" },
      {
        label: "Brand Awareness",
        icon: "icon-brag",
        href: "/",
        submenu: [{ label: "Local Service Ads", href: "/" }]
      }
    ]
  },
  {
    label: "Content",
    submenu: [
      { label: "Websites", icon: "icon-Website1" },
      { label: "Landing Pages", icon: "icon-site_style", href: "/" },
      { label: "Lofty Present", icon: "icon-listhome_01", href: "/" },
      { label: "Open House Form", icon: "icon-letter_01", href: "/" },
      { label: "Design Center", icon: "icon-editimage_01", href: "/" }
    ]
  },
  {
    label: "Automation",
    href: "/",
    submenu: [
      { label: "Smart Plans", icon: "icon-smart_plan_01", href: "/" },
      { label: "Homeowner Agent", icon: "icon-house_17", href: "/" },
      { label: "Auto Property Alert", icon: "icon-Vector", href: "/" },
      { label: "Text Codes", icon: "icon-message_01", href: "/" }
    ]
  },
  { label: "Reporting", href: "/" },
  {
    label: "Marketplace",
    href: "/",
    submenu: [
      { label: "Marketplace", icon: "icon-Marketplace", href: "/" },
      { label: "Integration Center", icon: "icon-integration_01", href: "/" }
    ]
  },
  {
    label: "AI Copilots",
    href: "/",
    icon: "icon-AI",
    isAi: true
  }
];

const utilityItems = [
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

function dropdownMaskStyle(isOpen: boolean) {
  return {
    display: isOpen ? "block" : "none",
    pointerEvents: "none" as const
  };
}

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
  item,
  onNavigate
}: {
  activeView: LaunchedShellView;
  item: ShellSubmenuItem;
  onNavigate: (view: LaunchedShellView) => void;
}) {
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const isActive = item.view ? activeView === item.view : false;

  if (!item.submenu) {
    return (
      <MenuItemAction
        {...attrs.dropdown}
        className={`crm-only-header-menu__item crm-only-header-menu__subitem ${isActive ? "is-active" : ""}`.trim()}
        href={item.href}
        needicon=""
        onAction={item.view ? () => onNavigate(item.view!) : undefined}
      >
        {item.icon ? <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${item.icon}`}></span> : null}
        <span {...attrs.dropdown} className="crm-only-header-menu__title">
          {item.label}
        </span>
      </MenuItemAction>
    );
  }

  return (
    <div
      {...attrs.dropdown}
      className="com-dropdownbox menu-dropdown-header crm-only-header-menu__subitem lofty-nav-submenu"
      onMouseEnter={() => setIsNestedOpen(true)}
      onMouseLeave={() => setIsNestedOpen(false)}
    >
      <div className="com-dropdown-mask" style={dropdownMaskStyle(isNestedOpen)}></div>
      <div className="com-dropdown-body">
        <MenuItemAction
          {...attrs.dropdown}
          className="crm-only-header-menu__item hoverCursor lofty-nav-submenu__trigger"
          href={item.href}
        >
          {item.icon ? <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${item.icon}`}></span> : null}
          <span {...attrs.dropdown} className="crm-only-header-menu__title">
            {item.label}
          </span>
          <span {...attrs.dropdown} className="icon2017 icon-arrow_08_right lofty-nav-submenu__arrow"></span>
        </MenuItemAction>
      </div>
      <div className="com-dropdown lofty-nav-submenu__flyout" style={{ display: isNestedOpen ? "block" : "none" }}>
        <div className="com-dropdown-content crm-only-header-menu__dropdown">
          {item.submenu.map((subitem) => (
            <MenuItemAction
              key={subitem.label}
              {...attrs.dropdown}
              className="crm-only-header-menu__item crm-only-header-menu__subitem"
              href={subitem.href}
              needicon=""
            >
              <span {...attrs.dropdown} className="crm-only-header-menu__title">
                {subitem.label}
              </span>
            </MenuItemAction>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeaderMenuCell({
  activeView,
  index,
  item,
  openMenu,
  setOpenMenu,
  onNavigate
}: {
  activeView: LaunchedShellView;
  index: number;
  item: ShellHeaderItem;
  openMenu: string | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
  onNavigate: (view: LaunchedShellView) => void;
}) {
  const isOpen = openMenu === item.label;
  const isActive = activeView === "crm-people" && item.label === "CRM";

  if (!item.submenu) {
    return (
      <div {...attrs.overflow} id={`com-overflow-display-cell-${index}`} data-index={index} className="display-cell">
        <MenuItemAction
          {...attrs.dropdown}
          {...attrs.menu}
          className={`crm-only-header-menu__item isTop ${isActive ? "is-active " : ""}${item.isAi ? "flex lofty-ai-menu" : ""}`.trim()}
          href={item.href}
          data-v-f4100c9e=""
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
      className="display-cell"
      onMouseEnter={() => setOpenMenu(item.label)}
      onMouseLeave={() => setOpenMenu((current) => (current === item.label ? null : current))}
    >
      <div {...attrs.dropdown} {...attrs.menu} data-v-f4100c9e="" className="com-dropdownbox menu-dropdown-header">
        <div className="com-dropdown-mask" style={dropdownMaskStyle(isOpen)}></div>
        <div className="com-dropdown-body">
          <MenuItemAction
            {...attrs.dropdown}
            className={`crm-only-header-menu__item isTop ${isActive ? "is-active " : ""}${item.href ? "hoverCursor" : "cursor-default"}`.trim()}
            href={item.href}
          >
            <span {...attrs.dropdown} className="crm-only-header-menu__title isTop">
              {item.label}
            </span>
          </MenuItemAction>
        </div>
        <div className="com-dropdown" style={{ display: isOpen ? "block" : "none" }}>
          <div className="com-dropdown-content crm-only-header-menu__dropdown">
            {item.submenu.map((subitem) => (
              <MenuSubitem key={subitem.label} activeView={activeView} item={subitem} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UtilityPanel({ item, onClose }: { item: (typeof utilityItems)[number] | null; onClose: () => void }) {
  if (!item) {
    return null;
  }

  return (
    <aside className="frozen-utility-panel">
      <div className="frozen-utility-panel__header">
        <div className="frozen-utility-panel__title">{item.title}</div>
        <button className="frozen-utility-panel__close" type="button" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="frozen-utility-panel__body">
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
      </div>
    </aside>
  );
}

export default function LoftyLaunchedShell({
  activeView,
  children,
  onNavigateHome,
  onNavigatePeople
}: {
  activeView: LaunchedShellView;
  children: ReactNode;
  onNavigateHome: () => void;
  onNavigatePeople: () => void;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [activeUtilityId, setActiveUtilityId] = useState<string | null>(null);
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

    onNavigatePeople();
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setUserMenuOpen(false);
        setAccountMenuOpen(false);
        setActiveUtilityId(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
        setUserMenuOpen(false);
        setAccountMenuOpen(false);
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

  return (
    <div ref={rootRef} className={`chime-website-container${isUtilityExpanded ? " is-utility-expanded" : ""}`}>
      <div {...attrs.shell} id="app">
        <section {...attrs.shell} className="lofty-left-main-container">
          <div {...attrs.shell} className="header-section">
            <div {...attrs.headerWrap} {...attrs.shell} className="chime-website-header-container header-main with-header">
              <div {...attrs.header} {...attrs.headerWrap} className="chime-header-container crm-header crm-header-v2 crm-header-v3 newUI ">
                <div {...attrs.header} id="chime-menu-box" className="crm-header-main crm-headerV2-main">
                  <button
                    {...attrs.header}
                    className={`logo header-logo router-link-active lofty-reset-button ${activeView === "home" ? "launched-brand-button--active" : ""}`.trim()}
                    type="button"
                    onClick={onNavigateHome}
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
                            index={index}
                            item={item}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                            onNavigate={handleNavigate}
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
              <div {...attrs.user} {...attrs.utility} className="com-dropdownbox">
                <div className="com-dropdown-mask" style={dropdownMaskStyle(userMenuOpen)}></div>
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
                      alt={testUser.name}
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
                              alt={testUser.name}
                            />
                          </div>
                          <div {...attrs.account} className="switch-account-name">
                            {testUser.name}
                          </div>
                          <div {...attrs.account} className="switch-account-email">
                            {testUser.email}
                          </div>
                        </div>
                        <div {...attrs.account} className="switch-account-content">
                          <div {...attrs.account} className="add-btn chime-btn white-btn">
                            <span {...attrs.account} className="icon2017 icon-people_add"></span>
                            Add Account
                          </div>
                          <div {...attrs.account} className="com-dropdownbox">
                            <div className="com-dropdown-mask" style={dropdownMaskStyle(accountMenuOpen)}></div>
                            <button
                              {...attrs.account}
                              className="com-dropdown-body lofty-reset-button"
                              type="button"
                              onClick={() => setAccountMenuOpen((open) => !open)}
                            >
                              <div {...attrs.account} className="switch-btn chime-btn white-btn">
                                <span {...attrs.account} className="icon2017 icon-re_01"></span>
                                Switch Account
                              </div>
                            </button>
                            <div className="com-dropdown switch-account-list-dp" style={{ display: accountMenuOpen ? "block" : "none" }}>
                              <div className="com-dropdown-content">
                                <div {...attrs.account} className="multi-account-list">
                                  <div {...attrs.account} className="account-info">
                                    <div {...attrs.account} className="account-info-detail active">
                                      <span {...attrs.account} className="name">
                                        {testUser.name}
                                      </span>
                                    </div>
                                    <div {...attrs.account} className="account-info mini">
                                      <div {...attrs.account} className="account-info-detail">
                                        <span {...attrs.account} className="name">
                                          Lofty
                                        </span>
                                        <span {...attrs.account} className="icon2017 icon-checked_bold"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                  className={`right-menu-item lofty-reset-button${activeUtilityId === item.id ? " active" : ""}`}
                  type="button"
                  onClick={() => setActiveUtilityId((current) => (current === item.id ? null : item.id))}
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
            <UtilityPanel item={activeUtility} onClose={() => setActiveUtilityId(null)} />
          </div>
        </div>
      </div>
    </div>
  );
}
