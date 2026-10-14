// Mubarak branches in Marthandam. Single source for the Location map,
// contact details and Google structured data. Coordinates and place IDs
// come from the Google Maps listings.

const mapsDirections = (name, placeId) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    name + ", Marthandam"
  )}&destination_place_id=${placeId}`;

const mapsPlace = (name, placeId) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    name + ", Marthandam"
  )}&query_place_id=${placeId}`;

export const BRANCHES = [
  {
    id: "hotel",
    name: "Hotel Mubarak",
    tag: "Hotel, rooms & restaurant",
    icon: "bi-building",
    address: "2-76-A2, Safiya Complex, Main Road (SH 90), Marthandam, Tamil Nadu 629165",
    streetAddress: "2-76-A2, Safiya Complex, Main Road (SH 90)",
    phone: { label: "+91 73737 50999", tel: "+917373750999", schema: "+91-73737-50999" },
    hours: "Open daily, 8:00 AM – 11:00 PM",
    lat: 8.3065462,
    lng: 77.2239003,
    placeId: "ChIJJQFAKBFVBDsRABYo9EbbD1A",
  },
  {
    id: "restaurant",
    name: "Mubarak Family Restaurant",
    tag: "Family restaurant",
    icon: "bi-shop",
    address: "Trivandrum – Nagercoil Highway, Marthandam, Tamil Nadu 629165",
    streetAddress: "Trivandrum – Nagercoil Highway",
    phone: { label: "04651 272545", tel: "+914651272545", schema: "+91-4651-272545" },
    hours: "Open daily, 8:00 AM – 11:00 PM",
    lat: 8.3059439,
    lng: 77.2258312,
    placeId: "ChIJaZqoDhFVBDsRb60OZJnlt_U",
  },
].map((b) => ({
  ...b,
  directionsUrl: mapsDirections(b.name, b.placeId),
  mapsUrl: mapsPlace(b.name, b.placeId),
}));
