"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
  slot: { "data-v-759a198c": "" },
};

const headerItems = [
  {
    label: "CRM",
    href: "https://crm.lofty.com/admin/home/lead/list?type=all",
    submenu: [
      { label: "People", icon: "icon-people_06", href: "https://crm.lofty.com/admin/home/lead/list?type=all" },
      { label: "Segments", icon: "icon-group_01", href: "https://crm.lofty.com/admin/home/lead/segments" },
      { label: "Tasks", icon: "icon-task_01", href: "https://crm.lofty.com/admin/home/task/list?type=my-all" },
      { label: "Calendar", icon: "icon-calendar_01", href: "https://crm.lofty.com/admin/home/task/calendar" },
    ],
  },
  {
    label: "Sales",
    href: "https://crm.lofty.com/admin/home/listingmgmt",
    submenu: [
      { label: "Showing", icon: "icon-CRM-showing", href: "https://crm.lofty.com/admin/home/task/showing" },
      { label: "Offers", icon: "icon-offer_01", href: "https://crm.lofty.com/admin/home/offer" },
      { label: "Transactions", icon: "icon-Transaction", href: "https://crm.lofty.com/admin/home/transaction" },
    ],
  },
  { label: "Marketing", href: "https://crm.lofty.com/admin/home/marketing/emails" },
  {
    label: "Content",
    submenu: [
      { label: "Websites", icon: "icon-Website1" },
      { label: "Landing Pages", icon: "icon-site_style", href: "https://crm.lofty.com/admin/home/campaigns/landingPage" },
      { label: "Lofty Present", icon: "icon-listhome_01", href: "https://crm.lofty.com/admin/home/campaigns/cma" },
      { label: "Open House Form", icon: "icon-letter_01", href: "https://crm.lofty.com/admin/home/campaigns/openHouse" },
      { label: "Design Center", icon: "icon-editimage_01", href: "https://crm.lofty.com/admin/home/campaigns/designCenter" },
    ],
  },
  {
    label: "Automation",
    href: "https://crm.lofty.com/admin/home/campaigns/smartPlan",
    submenu: [
      { label: "Smart Plans", icon: "icon-smart_plan_01", href: "https://crm.lofty.com/admin/home/campaigns/smartPlan" },
      { label: "Homeowner Agent", icon: "icon-house_17", href: "https://crm.lofty.com/admin/home/smartHomeowner" },
      { label: "Auto Property Alert", icon: "icon-Vector", href: "https://crm.lofty.com/admin/home/campaigns/autoAlert" },
      { label: "Text Codes", icon: "icon-message_01", href: "https://crm.lofty.com/admin/home/campaigns/textCode" },
    ],
  },
  { label: "Reporting", href: "https://crm.lofty.com/admin/home/reporting" },
  {
    label: "Marketplace",
    href: "https://crm.lofty.com/admin/home/marketPlace",
    submenu: [
      { label: "Marketplace", icon: "icon-Marketplace", href: "https://crm.lofty.com/admin/home/marketPlace" },
      { label: "Integration Center", icon: "icon-integration_01", href: "https://crm.lofty.com/admin/home/integrationCenter" },
    ],
  },
  {
    label: "AI Copilots",
    href: "https://crm.lofty.com/admin/home/loftyAIOverview",
    icon: "icon-AI",
    isAi: true,
  },
];

const utilityItems = [
  {
    id: "ai",
    icon: "icon-ai-AI",
    title: "AI Copilots",
    description: "This local clone keeps the utility bar interactive, while the full AI workspace remains outside the static snapshot.",
    href: "https://crm.lofty.com/admin/home/loftyAIOverview",
  },
  {
    id: "dialer",
    icon: "icon-call_01",
    extraClass: "dialer-entry",
    title: "Dialer",
    description: "The dialer runtime is intentionally removed from this local clone, so this panel acts as a local placeholder instead of launching live services.",
  },
  {
    id: "inbox",
    icon: "icon-inbox",
    badge: "dot",
    title: "Inbox",
    description: "Inbox content is not connected in the static clone, but the utility bar remains interactive.",
  },
  {
    id: "notifications",
    icon: "icon-notification_01",
    badge: "1",
    title: "Notifications",
    description: "Notifications are frozen in this build. The panel is rendered locally so the utility bar still behaves like the app shell.",
  },
  {
    id: "help",
    icon: "icon-help_01",
    title: "Help",
    description: "Help center content lives outside the local snapshot. Use the button below to open the original page in a new tab.",
    href: "https://help.lofty.com/",
  },
  {
    id: "settings",
    icon: "icon-Settings",
    title: "Settings",
    description: "Settings are outside the frozen dashboard scope. This panel keeps the utility bar interactive without reintroducing the legacy runtime.",
    href: "https://crm.lofty.com/admin/home/usersetting/profile",
  },
];

const userMenuItems = [
  { label: "Billing Center", icon: "icon-Billings", href: "https://crm.lofty.com/admin/home/billing" },
  {
    label: "Product Updates",
    icon: "icon-a-ProductUpdates",
    href: "https://help.lofty.com/hc/en-us/categories/201663123-What-s-New-",
  },
  { label: "Earn Rewards", icon: "icon-earn_reword", href: "https://crm.lofty.com/admin/home/referral" },
];

function dropdownMaskStyle(isOpen) {
  return {
    display: isOpen ? "block" : "none",
    pointerEvents: "none",
  };
}

function ExternalLink({ children, className, href, ...props }) {
  if (!href) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    );
  }

  return (
    <a className={className} href={href} rel="noreferrer noopener" target="_blank" {...props}>
      {children}
    </a>
  );
}

function HeaderMenuCell({ item, index, openMenu, setOpenMenu }) {
  const isOpen = openMenu === item.label;

  if (!item.submenu) {
    return (
      <div {...attrs.overflow} id={`com-overflow-display-cell-${index}`} data-index={index} className="display-cell">
        <ExternalLink
          {...attrs.dropdown}
          {...attrs.menu}
          className={`crm-only-header-menu__item isTop${item.isAi ? " flex lofty-ai-menu" : ""}`}
          href={item.href}
          data-v-f4100c9e=""
        >
          {item.icon ? <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${item.icon}`}></span> : null}
          <span {...attrs.dropdown} className="crm-only-header-menu__title isTop">
            {item.label}
          </span>
        </ExternalLink>
      </div>
    );
  }

  return (
    <div {...attrs.overflow} id={`com-overflow-display-cell-${index}`} data-index={index} className="display-cell">
      <div {...attrs.dropdown} {...attrs.menu} data-v-f4100c9e="" className="com-dropdownbox menu-dropdown-header">
        <div className="com-dropdown-mask" style={dropdownMaskStyle(isOpen)}></div>
        <div
          className="com-dropdown-body"
          onClick={() => setOpenMenu(isOpen ? null : item.label)}
        >
          <button
            type="button"
            className="crm-only-header-menu__item isTop cursor-default lofty-reset-button"
          >
            <span {...attrs.dropdown} className="crm-only-header-menu__title isTop">
              {item.label}
            </span>
          </button>
        </div>
        <div className="com-dropdown" style={{ display: isOpen ? "block" : "none" }}>
          <div className="com-dropdown-content crm-only-header-menu__dropdown">
            {item.submenu.map((subitem) => (
              <ExternalLink
                key={subitem.label}
                {...attrs.dropdown}
                className="crm-only-header-menu__item crm-only-header-menu__subitem"
                href={subitem.href}
                needicon=""
              >
                <span {...attrs.dropdown} className={`icon2017 crm-only-header-menu__icon ${subitem.icon}`}></span>
                <span {...attrs.dropdown} className="crm-only-header-menu__title">
                  {subitem.label}
                </span>
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UtilityPanel({ item, onClose }) {
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
          <a className="frozen-utility-panel__action" href={item.href} rel="noreferrer noopener" target="_blank">
            Open original page
          </a>
        ) : null}
      </div>
    </aside>
  );
}

export default function LoftyShell() {
  const rootRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [activeUtilityId, setActiveUtilityId] = useState(null);
  const isUtilityExpanded = Boolean(activeUtilityId);

  const activeUtility = useMemo(
    () => utilityItems.find((item) => item.id === activeUtilityId) ?? null,
    [activeUtilityId]
  );

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setUserMenuOpen(false);
        setAccountMenuOpen(false);
        setActiveUtilityId(null);
      }
    }

    function handleKeyDown(event) {
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
    <div
      ref={rootRef}
      className={`chime-website-container${isUtilityExpanded ? " is-utility-expanded" : ""}`}
    >
      <div {...attrs.shell} id="app">
        <section {...attrs.shell} className="lofty-left-main-container">
          <div {...attrs.shell} className="header-section">
            <div {...attrs.headerWrap} {...attrs.shell} className="chime-website-header-container header-main with-header">
              <div {...attrs.header} {...attrs.headerWrap} className="chime-header-container crm-header crm-header-v2 crm-header-v3 newUI ">
                <div {...attrs.header} id="chime-menu-box" className="crm-header-main crm-headerV2-main">
                  <ExternalLink
                    {...attrs.header}
                    className="logo header-logo router-link-active"
                    href="https://crm.lofty.com/admin/home/home"
                    custom=""
                  >
                    <img {...attrs.header} src="/frozen-lofty/Lofty_files/Lofty_Logo.png" alt="logo" style={{ width: "100px" }} />
                  </ExternalLink>
                  <div
                    {...attrs.menu}
                    {...attrs.header}
                    className={`crm-only-menu${isUtilityExpanded ? " is-utility-expanded" : ""}`}
                  >
                    <div
                      {...attrs.overflow}
                      {...attrs.menu}
                      className="com-overflow-ellipsis-wrapper is-text"
                      leastdisplaynum="0"
                      heightfull=""
                      style={{ "--eleInterval": "31px", "--moreInterval": "0px" }}
                    >
                      <div {...attrs.overflow} className="display-items">
                        {headerItems.map((item, index) => (
                          <HeaderMenuCell
                            key={item.label}
                            index={index}
                            item={item}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
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
          <div {...attrs.shell} className="content-section"></div>
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
                      alt="Baylee Rhoades"
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
                              alt="Baylee Rhoades"
                            />
                          </div>
                          <div {...attrs.account} className="switch-account-name">
                            Baylee Rhoades
                          </div>
                          <div {...attrs.account} className="switch-account-email">
                            baylee.rhoades@lofty.com
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
                                        Baylee Rhoades
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
                              <ExternalLink {...attrs.user} href={item.href}>
                                <i {...attrs.user} className={`icon2017 menu-icon ${item.icon}`}></i>
                                <span {...attrs.user}>{item.label}</span>
                              </ExternalLink>
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
