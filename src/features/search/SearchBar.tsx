import { useState } from "react";

export function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      placeholder="Search videos, books, PDFs..."
      onChange={(event) => {
        const nextValue = event.target.value;
        setValue(nextValue);
        onSearch(nextValue);
      }}
    />
  );
}
