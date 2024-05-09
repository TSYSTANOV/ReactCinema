import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { BurgerMenu } from "./BurgerMenu";
import { Footer } from "./Footer";
function MainPageHeader() {
  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export { MainPageHeader };
