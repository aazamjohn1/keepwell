import type { Collection } from "./types";

export const collections: Collection[] = [];

export function createCollection(name: string): Collection {
  return {
    id: crypto.randomUUID(),
    name,
    resourceIds: [],
  };
}
