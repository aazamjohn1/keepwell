export function VideoViewer({ url }: { url: string }) {
  return (
    <video controls style={{ width: "100%" }} src={url} />
  );
}
