"use client";

import { useEffect, useRef, useState } from "react";
import { menuCategories, menuGroups, menuSpecials } from "@/data/menuData";

// Fixed header height + sticky tab bar, used to offset scrolling to a group.
const SCROLL_OFFSET = 150;

const formatPrice = (value) =>
  typeof value === "number" ? `₹${value}` : value ?? "—";

// Dish photo when we have one, otherwise an icon tile.
function DishThumb({ image, icon, name, className = "" }) {
  return image ? (
    <img src={image} alt={name} className={`dish-thumb ${className}`} />
  ) : (
    <span className={`dish-thumb dish-icon ${className}`} aria-hidden="true">
      <i className={`bi ${icon}`}></i>
    </span>
  );
}

function SpecialCard({ name, label, price, image, icon, description }) {
  return (
    <div className="menu-special">
      <span className="menu-special-label">{label}</span>
      <DishThumb
        image={image}
        icon={icon}
        name={name}
        className="menu-special-image"
      />
      <div className="menu-special-body">
        <div className="menu-special-head">
          <h5>{name}</h5>
          <span className="menu-special-price">{price}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function PriceRow({ item, portions, icon }) {
  const hasPortions = item.half != null || item.full != null;
  return (
    <li>
      <DishThumb image={item.image} icon={item.icon ?? icon} name={item.name} />
      <span className="item-name">{item.name}</span>
      <span className="item-dots" aria-hidden="true"></span>
      <span className="item-prices">
        {portions && hasPortions ? (
          <>
            <span data-label="Half">{formatPrice(item.half)}</span>
            <span data-label="Full">{formatPrice(item.full)}</span>
          </>
        ) : (
          <span className="single">
            {hasPortions
              ? `${formatPrice(item.half)} / ${formatPrice(item.full)}`
              : formatPrice(item.price)}
          </span>
        )}
      </span>
    </li>
  );
}

export default function Menu({ asPage = false }) {
  // On its own page this section holds the page <h1>.
  const Heading = asPage ? "h1" : "h2";

  const [activeGroup, setActiveGroup] = useState(menuGroups[0].id);
  const tabsRef = useRef(null);

  const groups = menuGroups.map((g) => ({
    ...g,
    categories: menuCategories.filter((c) => c.group === g.id),
    specials: menuSpecials.filter((s) => s.group === g.id),
  }));

  // Highlight the tab of the group currently under the sticky bar.
  useEffect(() => {
    const onScroll = () => {
      let current = menuGroups[0].id;
      for (const g of menuGroups) {
        const el = document.getElementById(`menu-${g.id}`);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET + 10) {
          current = g.id;
        }
      }
      setActiveGroup(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the active tab visible in the horizontally scrolling tab bar.
  useEffect(() => {
    const bar = tabsRef.current;
    const tab = bar?.querySelector(`[data-group="${activeGroup}"]`);
    if (!bar || !tab) return;
    const left = tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2;
    bar.scrollTo({ left, behavior: "smooth" });
  }, [activeGroup]);

  const goToGroup = (id) => {
    const el = document.getElementById(`menu-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="menu" className="menu section dark-background">
      <div className="menu-split">
        {/* Left: fixed photo panel */}
        <aside className="menu-panel">
          <img
            src="/assets/img/menu/web/menu-panel.jpg"
            alt="Biriyani served at Mubarak Family Restaurant"
            className="menu-panel-image"
          />
          <div className="menu-panel-content">
            <span className="menu-panel-script">Check Out</span>
            <Heading>Our Menu</Heading>
            <p>
              South Indian, Kerala, Chinese and Arabian favourites. All halal,
              cooked fresh in Marthandam.
            </p>
            <a
              href="/assets/menu/mubarak-menu.pdf"
              className="menu-panel-download"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <i className="bi bi-download"></i> Download menu (PDF)
            </a>
          </div>
        </aside>

        {/* Right: scrolling menu list */}
        <div className="menu-list">
          <nav className="menu-tabs" ref={tabsRef} aria-label="Menu sections">
            {menuGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                data-group={g.id}
                className={activeGroup === g.id ? "active" : ""}
                aria-current={activeGroup === g.id ? "true" : undefined}
                onClick={() => goToGroup(g.id)}
              >
                {g.title}
              </button>
            ))}
          </nav>

          <div className="menu-list-inner">
            <p className="menu-note">
              <i className="bi bi-info-circle"></i> All prices in Indian Rupees
              (₹). Half / Full columns show portion sizes.
            </p>

            {groups.map((group) => (
              <div key={group.id} id={`menu-${group.id}`} className="menu-group">
                <h3 className="menu-group-title">{group.title}</h3>

                {group.specials.map((s) => (
                  <SpecialCard
                    key={s.name}
                    icon={group.categories[0]?.icon}
                    {...s}
                  />
                ))}

                {group.categories.map((cat) => (
                  <div key={cat.id} className="menu-category">
                    {(group.categories.length > 1 || cat.portions) && (
                      <div className="menu-category-header">
                        <h4>{group.categories.length > 1 ? cat.title : ""}</h4>
                        {cat.portions && (
                          <div className="portion-labels">
                            <span>Half</span>
                            <span>Full</span>
                          </div>
                        )}
                      </div>
                    )}
                    <ul className="menu-price-list">
                      {cat.items.map((item) => (
                        <PriceRow
                          key={item.name}
                          item={item}
                          portions={cat.portions}
                          icon={cat.icon}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
