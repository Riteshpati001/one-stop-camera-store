/**
 * Aperture Noir design note: the location panel is a calm practical endpoint with
 * a direct, accessible map embed instead of an intrusive full-screen map utility.
 */
import { store } from "@/data/store";

export function StoreMap() {
  const mapQuery = encodeURIComponent(store.address);
  return <iframe className="store-map" title="Map showing One Stop in Bapuji Nagar, Bhubaneswar" src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`} referrerPolicy="no-referrer-when-downgrade" />;
}
