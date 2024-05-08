import { Outlet } from "react-router-dom";
import { Header } from "./Header";
function MainPageHeader() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export { MainPageHeader };
