import type { Resource } from "../../types/resource";

export function ContinueLearning({ resources }: { resources: Resource[] }) {
  return (
    <section>
      <h2>Continue Learning</h2>
      {resources.map((resource) => (
        <div key={resource.id}>{resource.title}</div>
      ))}
    </section>
  );
}
