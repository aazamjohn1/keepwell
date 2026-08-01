import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Resource } from "../types/resource";

interface ResourceStore {
  resources: Resource[];
  recentIds: string[];
  addResource: (resource: Resource) => void;
  toggleFavorite: (id: string) => void;
  markViewed: (id: string) => void;
}

export const useResourceStore = create<ResourceStore>()(
  persist(
    (set) => ({
      resources: [],
      recentIds: [],
      addResource: (resource) =>
        set((state) => ({
          resources: [...state.resources, resource],
        })),
      toggleFavorite: (id) =>
        set((state) => ({
          resources: state.resources.map((resource) =>
            resource.id === id
              ? { ...resource, favorite: !resource.favorite }
              : resource,
          ),
        })),
      markViewed: (id) =>
        set((state) => ({
          recentIds: [id, ...state.recentIds.filter((item) => item !== id)],
        })),
    }),
    { name: "keepwell-resources" },
  ),
);
