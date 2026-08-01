import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <nav>
      <h2>KeepWell</h2>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/library">Library</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/collections">Collections</NavLink>
    </nav>
  );
}
