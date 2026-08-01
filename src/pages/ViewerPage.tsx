import { useParams } from "react-router-dom";
import { ResourceViewer } from "../features/viewer/ResourceViewer";
import { useResourceById } from "../features/viewer/useResourceById";

export function ViewerPage() {
  const { id } = useParams();
  const resource = useResourceById(id ?? "");

  if (!resource) {
    return <p>Resource not found.</p>;
  }

  return <ResourceViewer resource={resource} />;
}
