import type { Resource } from "../../types/resource";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article>
      <h3>{resource.title}</h3>
      <p>{resource.category}</p>
      <span>{resource.type}</span>
      <FavoriteButton id={resource.id} />
      <Link to={`/viewer/${resource.id}`}>Open</Link>
    </article>
  );
}
