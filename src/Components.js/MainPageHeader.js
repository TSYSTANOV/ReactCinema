import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
function MainPageHeader() {
  return (
    <>
      <Header />
      <BurgerMenu/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export { MainPageHeader };
