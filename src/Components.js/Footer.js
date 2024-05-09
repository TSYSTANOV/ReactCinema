import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__column contacts">
          <p className="contacts__logo">
            <span className="contacts__logo-primary">TS</span> Cinema
          </p>

          <p className="contacts__description">онлайн-кинотеатр</p>

          <a href="tel:88000000000" className="contacts__phone">
            8 800 000 00 00
          </a>

          <a href="mailto:help@tvmethed.ru" className="contacts__mail">
            tsystanov.vitaly@gmail.com
          </a>

          <a href="mailto:pressa@tvmethed.ru" className="contacts__mail">
            tsystanov.vitaly@gmail.com
          </a>
        </div>

        <div className="footer__column subnav get-nav">
          <ul className="subnav__list">
            <li className="subnav__item">
              <NavLink
                to={"category/triends"}
                href="#"
                className="subnav__link get-nav__link get-nav__link_triends"
              >
                В тренде
              </NavLink>
            </li>

            <li className="subnav__item">
              <NavLink
                to={"category/popular-movie"}
                href="#"
                className="subnav__link get-nav__link get-nav__link_popular-movies"
              >
                Популярные Фильмы
              </NavLink>
            </li>

            <li className="subnav__item">
              <NavLink
                to={"category/popular-tv"}
                href="#"
                className="subnav__link get-nav__link get-nav__link_popular-tv"
              >
                Популярные сериалы
              </NavLink>
            </li>

            <li className="subnav__item">
              <NavLink
                to={"category/top-movie"}
                href="#"
                className="subnav__link get-nav__link get-nav__link_top-movies"
              >
                Top Фильмов
              </NavLink>
            </li>

            <li className="subnav__item">
              <NavLink
                to={"category/top-tv"}
                href="#"
                className="subnav__link get-nav__link get-nav__link_top-tv"
              >
                Top Сериалы
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__column regulation">
          <img
            className="regulation__age"
            src="img/18+.svg"
            alt="Только для совершеннолетних"
          />
          <p className="regulation__offer">
            Просматривая материалы, находящиеся на настоящем сайте,
            вы&nbsp;обязуетесь выполнять условия Публичной оферты
          </p>
        </div>

        <div className="footer__column partners">
          <img
            className="partners__me"
            src="img/favicon-32x32.png"
            alt="Логотип TS"
          />
          <p className="partners__description">
            Исследования осуществляются ООО «TS ДЕВЕЛОПМЕНТ» при&nbsp; поддержке
            Фонда «TS Tech»
          </p>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
