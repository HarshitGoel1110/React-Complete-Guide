import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>Great Logo</div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/quote" activeClassName={style.active}>
              All Quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={style.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
