import type { Resource } from "../../types/resource";
import { Link } from "react-router-dom";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article>
      <h3>{resource.title}</h3>
      <p>{resource.category}</p>
      <span>{resource.type}</span>
      <Link to={`/viewer/${resource.id}`}>Open</Link>
    </article>
  );
}
