import { SearchBar } from "../features/search/SearchBar";

export function SearchPage() {
  return (
    <section>
      <h1>Search</h1>
      <SearchBar onSearch={() => undefined} />
    </section>
  );
}
