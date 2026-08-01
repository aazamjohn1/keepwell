import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResourceViewer } from "../features/viewer/ResourceViewer";
import { useResourceById } from "../features/viewer/useResourceById";
import { trackViewed } from "../features/viewer/trackViewed";

export function ViewerPage() {
  const { id } = useParams();
  const resource = useResourceById(id ?? "");

  useEffect(() => {
    if (resource) trackViewed(resource.id);
  }, [resource]);

  if (!resource) return <p>Resource not found.</p>;

  return (
    <section>
      <h1>{resource.title}</h1>
      <ResourceViewer resource={resource} />
    </section>
  );
}
