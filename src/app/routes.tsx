import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../features/dashboard/Dashboard";
import { LibraryPage } from "../pages/LibraryPage";
import { SearchPage } from "../pages/SearchPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { Collections } from "../features/collections/Collections";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/collections" element={<Collections />} />
    </Routes>
  );
}
