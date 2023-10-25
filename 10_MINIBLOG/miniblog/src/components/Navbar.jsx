import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const activeMenu = ({isActive}) => isActive ? styles.active : ""

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={activeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={activeMenu}>
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={activeMenu}>
            Cadastro
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={activeMenu}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
