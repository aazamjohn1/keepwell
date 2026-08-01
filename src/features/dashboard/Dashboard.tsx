import { useResourceStore } from "../../store";
import { initialResources } from "../library/resources";
import { ContinueLearning } from "./ContinueLearning";

export function Dashboard() {
  const recentIds = useResourceStore((state) => state.recentIds);

  const recentResources = recentIds
    .map((id) => initialResources.find((resource) => resource.id === id))
    .filter(Boolean);

  return (
    <section>
      <h1>KeepWell Dashboard</h1>
      <p>Your personal knowledge library.</p>
      <ContinueLearning resources={recentResources} />
    </section>
  );
}
