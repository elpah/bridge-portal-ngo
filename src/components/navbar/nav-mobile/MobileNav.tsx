import { FaPhone, FaEnvelope } from "react-icons/fa";
import type { INavProps } from "../../types/navProps";
import {
  logo,
  x,
  yt,
  fb,
  ham_open,
  ham_close,
} from "../../../assets/images/images";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./mobile-nav.module.css";

const MobileNav = ({ links, handleLogoClick }: INavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <>
      <header
        className={`${styles.mobile_header}  ${
          isHomepage ? styles.transparent : styles.solid
        }`}
      >
        <nav>
          <div className={styles.logo_ham_wrapper}>
            <div className={styles.logo_container} onClick={handleLogoClick}>
              <img className={styles.logo_image} src={logo} alt="Logo" />
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className={styles.hamburger_container}
            >
              <img src={ham_open} alt="hamburger open icon" />
            </div>
          </div>
          <div
            className={`${styles.menu_open} ${
              isOpen ? styles.is_open : styles.is_closed
            }`}
          >
            <div className={styles.logo_hamicon_container}>
              <div className={styles.logo_container}>
                <img className={styles.logo_image} src={logo} alt="" />
              </div>
              <div
                className={styles.hamburger_container}
                onClick={() => setIsOpen(false)}
              >
                <img src={ham_close} alt="close button" />
              </div>
            </div>

            <ul>
              {links.map(({ label, to }) => (
                <li onClick={() => setIsOpen(false)} key={to}>
                  <NavLink to={to} className={styles.nav_link}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.button_container}>
              <button>Get Support</button>
            </div>
            <div className={styles.links_container}>
              <div className={styles.links}>
                <FaPhone />
                <p>info@bridgeportal.com</p>
              </div>
              <div className={styles.links}>
                <FaEnvelope />
                <p>+31623456324</p>
              </div>
            </div>
            <div className={styles.socials_container}>
              <img src={yt} alt="Youtube social" />
              <img src={fb} alt="facebook social" />
              <img src={x} alt="x social" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MobileNav;
