import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { handleOpen } from "../redux/BurgerMenuSlice";
import { useEffect, useRef } from "react";

function Header() {
  const headerRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmitForm(e) {
    e.preventDefault();
    const value = e.target.search.value;
    e.target.search.value = "";
    e.target.search.blur();
    navigate(`search/${value}`);
  }
  function menuHandler() {
    dispatch(handleOpen());
  }
  function smoothHeader() {
    let param = 0;
    let direction = null;
    const header = headerRef.current;
    window.addEventListener("scroll", (e) => {
      if (param > window.scrollY) {
        direction = "up";
      } else {
        direction = "down";
      }
      param = window.scrollY;
      if (direction === "down" && param > 500) {
        header.style.top = -header.scrollHeight + "px";
      } else {
        header.style.top = "0px";
      }
    });
  }

  useEffect(() => {
    smoothHeader();
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <div className="container header__container">
        <NavLink to="/">
          <p className="header__logo">
            <span className="header__logo-primary">TS</span> Cinema
          </p>
        </NavLink>
        <form className="header__search-form" onSubmit={handleSubmitForm}>
          <input
            className="header__search-input"
            type="search"
            name="search"
            required=""
            placeholder="Поиск"
          />
        </form>

        <button
          className="header__burger-btn"
          aria-label="открыть меню"
          onClick={menuHandler}
        >
          <svg
            className="header__burger-svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94403 9.8959H34.6564"
              strokeWidth="2.475"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M28.0537 19.8H4.94403"
              strokeWidth="2.475"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.94403 29.7041H21.4509"
              strokeWidth="2.475"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
export { Header };
