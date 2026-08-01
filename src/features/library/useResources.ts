import { initialResources } from "./resources";
import { useResourceStore } from "../../store";

export function useResources() {
  const resources = useResourceStore((state) => state.resources);

  return resources.length ? resources : initialResources;
}
