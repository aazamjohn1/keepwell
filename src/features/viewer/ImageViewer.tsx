export function ImageViewer({ url }: { url: string }) {
  return <img src={url} alt="Resource preview" style={{ maxWidth: "100%" }} />;
}
