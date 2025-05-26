import { NavLink, useLocation } from "react-router-dom";

import type { Link } from "../../../data/links";
import { logo } from "../../../assets/images/images";

import styles from "./desktop-nav.module.css";

type INavProps = {
  links: Link[];
};
const DesktopNav = ({ links }: INavProps) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <header
      className={`${styles.desktop_header} ${
        isHomepage ? styles.transparent : styles.solid
      }`}
    >
      <nav>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <ul>
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : styles.nav_link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.button_container}>
          <button>Get Support</button>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNav;
