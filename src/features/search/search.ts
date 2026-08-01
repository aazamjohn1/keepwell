import type { Resource } from "../../types/resource";

export function searchResources(resources: Resource[], query: string) {
  const normalized = query.toLowerCase().trim();

  if (!normalized) return resources;

  return resources.filter((resource) => {
    const content = [
      resource.title,
      resource.category,
      resource.description,
      ...resource.tags,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return content.includes(normalized);
  });
}
