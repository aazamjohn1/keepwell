import { useState } from "react";
import type { Resource } from "../../types/resource";

export function SearchBox({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState("");
  const filtered = resources.filter((item) =>
    `${item.title} ${item.category} ${item.tags.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div>
      <input
        placeholder="Search videos, books, topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && filtered.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
