import { Outlet } from 'react-router-dom';
import { SideBar } from "../SideBar";

export const Main = () => {
  return (
    <main className="main d-flex ">
      <SideBar />
      <Outlet />
    </main>
  );
}