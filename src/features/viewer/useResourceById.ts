import { useResources } from "../library/useResources";

export function useResourceById(id: string) {
  const resources = useResources();

  return resources.find((resource) => resource.id === id);
}
