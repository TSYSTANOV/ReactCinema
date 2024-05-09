import { useDispatch, useSelector } from "react-redux"
import { handleOpen } from "../redux/BurgerMenuSlice"
import { NavLink } from "react-router-dom"
function BurgerMenu() {
    const dispatch = useDispatch()
    const menuOpen = useSelector((state)=>state.openBurgerMenu.open)
    function handleClose(){
        dispatch(handleOpen())
    }
    return  <nav className={menuOpen ? `navigation navigation_active` : 'navigation'}>
        <ul className="navigation__list get-nav">
          <li className="navigation__item">
            <NavLink to={'category/triends'}><a
              href="#"
              className="navigation__link get-nav__link get-nav__link_triends"
              >В тренде</a>
            </NavLink>
          </li>

          <li className="navigation__item">
          <NavLink to={'category/popular-movie'}><a
              href="#"
              className="navigation__link get-nav__link get-nav__link_popular-movies"
              >Популярные Фильмы</a
            >
            </NavLink>
          </li>

          <li class="navigation__item">
          <NavLink to={'category/popular-tv'}><a
              href="#"
              className="navigation__link get-nav__link get-nav__link_popular-tv"
              >Популярные сериалы</a
            >
            </NavLink>
          </li>

          <li class="navigation__item">
           <NavLink to={'category/top-movie'}><a
              href="#"
              className="navigation__link get-nav__link get-nav__link_top-movies"
              >Top Фильмов</a
            >
            </NavLink>
          </li>

          <li className="navigation__item">
          <NavLink to={'category/top-tv'}><a
              href="#"
              className="navigation__link get-nav__link get-nav__link_top-tv"
              >Top Сериалы</a
            >
            </NavLink>
          </li>
        </ul>
        <button className="navigation__close" onClick={handleClose}>
          <svg
            className="navigation__close-cross"
            height="30"
            viewBox="0 0 365.696 365.696"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
            ></path>
          </svg>
        </button>
      </nav>
}
export {BurgerMenu}