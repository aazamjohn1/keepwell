import { ResourceViewer } from "../features/viewer/ResourceViewer";

export function ViewerPage() {
  return <ResourceViewer resource={{
    id: "preview",
    title: "Preview",
    type: "video",
    category: "demo",
    url: ""
  }} />;
}
