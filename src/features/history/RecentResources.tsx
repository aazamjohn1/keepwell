import type { Resource } from "../../types/resource";

export function RecentResources({ resources }: { resources: Resource[] }) {
  return (
    <section>
      <h2>Recently Viewed</h2>
      {resources.map((resource) => (
        <div key={resource.id}>{resource.title}</div>
      ))}
    </section>
  );
}
