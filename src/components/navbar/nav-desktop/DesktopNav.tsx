import { NavLink, useLocation } from "react-router-dom";
import type { INavProps } from "../../types/navProps";
import { logo } from "../../../assets/images/images";

import styles from "./desktop-nav.module.css";

const DesktopNav = ({ links, handleLogoClick }: INavProps) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <header
      className={`${styles.desktop_header} ${
        isHomepage ? styles.transparent : styles.solid
      }`}
    >
      <nav>
        <div className={styles.logo_container} onClick={handleLogoClick}>
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
