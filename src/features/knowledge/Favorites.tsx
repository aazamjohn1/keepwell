import type { Resource } from "../../types/resource";

export function Favorites({ resources }: { resources: Resource[] }) {
  const favorites = resources.filter((resource) => resource.favorite);

  return (
    <section>
      <h2>Favorites</h2>
      {favorites.map((resource) => (
        <div key={resource.id}>{resource.title}</div>
      ))}
    </section>
  );
}
