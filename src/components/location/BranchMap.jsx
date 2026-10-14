"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// Leaflet + OpenStreetMap (no API key). Tiles are darkened with a CSS filter
// to match the charcoal theme; pins are gold HTML markers.
export default function BranchMap({ branches, activeId, onSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const boundsRef = useRef(null);

  // Create the map once (Leaflet needs `window`, so import it client-side).
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: true,
      });
      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        className: "branch-map-tiles",
      }).addTo(map);

      branches.forEach((b, i) => {
        const icon = L.divIcon({
          className: "branch-pin",
          html: `<span class="branch-pin-dot"><i class="bi ${b.icon}"></i></span><span class="branch-pin-label">${i + 1}</span>`,
          iconSize: [44, 54],
          iconAnchor: [22, 54],
          popupAnchor: [0, -50],
        });
        const marker = L.marker([b.lat, b.lng], { icon, title: b.name, alt: b.name })
          .addTo(map)
          .bindPopup(
            `<strong>${b.name}</strong><br>${b.streetAddress}<br><a href="${b.directionsUrl}" target="_blank" rel="noopener noreferrer">Get directions →</a>`
          );
        marker.on("click", () => onSelect?.(b.id));
        markersRef.current[b.id] = marker;
      });

      boundsRef.current = L.latLngBounds(branches.map((b) => [b.lat, b.lng]));
      map.fitBounds(boundsRef.current, { padding: [60, 60], maxZoom: 17 });
      // Enable wheel zoom only after the visitor clicks into the map.
      map.once("focus", () => map.scrollWheelZoom.enable());

      mapRef.current = map;
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
    // Branch data is static; create the map once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fly to the selected branch and highlight its pin.
  useEffect(() => {
    const map = mapRef.current;
    Object.entries(markersRef.current).forEach(([id, m]) =>
      m.getElement()?.classList.toggle("is-active", id === activeId)
    );
    if (!map) return;
    const marker = markersRef.current[activeId];
    if (!marker) {
      // No branch selected: show both pins.
      map.closePopup();
      if (boundsRef.current)
        map.flyToBounds(boundsRef.current, { padding: [60, 60], maxZoom: 17, duration: 0.8 });
      return;
    }
    map.flyTo(marker.getLatLng(), 18, { duration: 0.8 });
    marker.openPopup();
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      className="branch-map"
      role="region"
      aria-label="Map of Mubarak branches in Marthandam"
    />
  );
}
