"use client";

import { useState } from "react";
import { BRANCHES } from "@/data/branches";
import BranchMap from "@/components/location/BranchMap";

// Default "Get directions" target used elsewhere (Contact, footer): the hotel.
export const DIRECTIONS_URL = BRANCHES[0].directionsUrl;

export default function Location() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="location" className="location section dark-background">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Visit us</span>
        <h2>Our branches in Marthandam</h2>
        <p>
          Two Mubarak locations, a short walk apart. Tap a branch to see it on
          the map.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <ul className="branch-list">
              {BRANCHES.map((b, i) => (
                <li key={b.id}>
                  <article
                    className={`branch-card ${activeId === b.id ? "is-active" : ""}`}
                  >
                    <button
                      type="button"
                      className="branch-card-head"
                      onClick={() => setActiveId(b.id)}
                      aria-pressed={activeId === b.id}
                      aria-label={`Show ${b.name} on the map`}
                    >
                      <span className="branch-number" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className="branch-title">
                        <span className="branch-tag">{b.tag}</span>
                        <span className="branch-name">{b.name}</span>
                      </span>
                      <i
                        className="bi bi-geo-alt-fill branch-locate"
                        aria-hidden="true"
                      ></i>
                    </button>

                    <ul className="branch-details">
                      <li>
                        <i className="bi bi-signpost" aria-hidden="true"></i>
                        <span>{b.address}</span>
                      </li>
                      <li>
                        <i className="bi bi-telephone" aria-hidden="true"></i>
                        <a href={`tel:${b.phone.tel}`}>{b.phone.label}</a>
                      </li>
                      <li>
                        <i className="bi bi-clock" aria-hidden="true"></i>
                        <span>{b.hours}</span>
                      </li>
                    </ul>

                    <div className="branch-actions">
                      <a
                        href={b.directionsUrl}
                        className="btn-mb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-sign-turn-right"></i> Directions
                      </a>
                      <a
                        href={b.mapsUrl}
                        className="btn-mb btn-mb-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-google"></i> Google Maps
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-7">
            <div className="branch-map-wrap">
              <BranchMap
                branches={BRANCHES}
                activeId={activeId}
                onSelect={setActiveId}
              />
              {activeId && (
                <button
                  type="button"
                  className="branch-map-reset"
                  onClick={() => setActiveId(null)}
                >
                  <i className="bi bi-arrows-angle-expand"></i> Show both
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
