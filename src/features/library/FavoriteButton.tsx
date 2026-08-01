import { useResourceStore } from "../../store";

export function FavoriteButton({ id }: { id: string }) {
  const toggleFavorite = useResourceStore((state) => state.toggleFavorite);

  return (
    <button onClick={() => toggleFavorite(id)}>
      Toggle Favorite
    </button>
  );
}
