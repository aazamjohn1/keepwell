import type { Resource } from "../../types/resource";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article>
      <h3>{resource.title}</h3>
      <p>{resource.category}</p>
      <span>{resource.type}</span>
    </article>
  );
}
