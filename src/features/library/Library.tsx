import { ResourceCard } from "./ResourceCard";
import { useResources } from "./useResources";

export function Library() {
  const resources = useResources();

  return (
    <section>
      <h1>Library</h1>
      {resources.length === 0 && <p>No resources yet.</p>}
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </section>
  );
}
