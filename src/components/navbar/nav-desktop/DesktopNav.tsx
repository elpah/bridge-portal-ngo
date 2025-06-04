import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import type { INavProps } from "../../types/navProps";
import { logo } from "../../../assets/images/images";

import styles from "./desktop-nav.module.css";

const DesktopNav = ({ links, handleLogoClick }: INavProps) => {
  const location = useLocation();
  const [hideNav, setHideNav] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  let isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolling(scrollY > 100);
      setHideNav(scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `${styles.desktop_header} 
    ${
      isHomepage
        ? isScrolling
          ? styles.solid
          : styles.transparent
        : styles.solid
    } 
    ${hideNav ? styles.hidden : ""}`;

  return (
    <header className={headerClass}>
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
