import { Link } from "react-router-dom";
import type { Resource } from "../../types/resource";
import { FavoriteButton } from "./FavoriteButton";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="resource-card">
      <span>{resource.type}</span>
      <h3>{resource.title}</h3>
      <p>{resource.description ?? "Learning resource"}</p>
      <small>{resource.category}</small>
      <div>
        <FavoriteButton id={resource.id} />
        <Link to={`/viewer/${resource.id}`}>Open</Link>
      </div>
    </article>
  );
}
