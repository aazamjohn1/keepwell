import { ResourceCard } from "./ResourceCard";
import resources from "../../source_links/resources.json";

export function Library() {
  return (
    <section>
      <h1>Library</h1>
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </section>
  );
}
