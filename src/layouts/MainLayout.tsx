import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <aside>KeepWell</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
