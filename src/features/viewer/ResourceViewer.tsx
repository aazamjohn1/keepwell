import type { Resource } from "../../types/resource";
import { VideoViewer } from "./VideoViewer";
import { PdfViewer } from "./PdfViewer";
import { ImageViewer } from "./ImageViewer";

export function ResourceViewer({ resource }: { resource: Resource }) {
  if (resource.type === "video") return <VideoViewer url={resource.url} />;
  if (resource.type === "pdf" || resource.type === "book") return <PdfViewer url={resource.url} />;
  if (resource.type === "image") return <ImageViewer url={resource.url} />;

  return <p>Reading mode coming soon.</p>;
}
