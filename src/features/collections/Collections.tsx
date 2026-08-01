import { collections } from "../knowledge/collections";

export function Collections() {
  return (
    <section>
      <h1>Collections</h1>
      {collections.map((collection) => (
        <div key={collection.id}>{collection.name}</div>
      ))}
    </section>
  );
}
