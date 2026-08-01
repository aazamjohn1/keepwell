import { useResourceStore } from "../../store";

export function trackViewed(id: string) {
  useResourceStore.getState().markViewed(id);
}
