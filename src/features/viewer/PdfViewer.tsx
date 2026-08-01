export function PdfViewer({ url }: { url: string }) {
  return (
    <iframe
      title="PDF Viewer"
      src={url}
      style={{ width: "100%", height: "80vh" }}
    />
  );
}
