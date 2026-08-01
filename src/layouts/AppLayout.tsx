import { NavLink, Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>KeepWell</h1>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/library">Library</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/collections">Collections</NavLink>
        </nav>
      </aside>
      <main className="content"><Outlet /></main>
    </div>
  );
}
