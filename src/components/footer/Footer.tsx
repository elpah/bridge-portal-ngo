import { FaChevronRight, FaEnvelope } from "react-icons/fa";

import {
  logo,
  yt_footer,
  x_footer,
  fb_footer,
  submit_icon,
} from "../../assets/images/images";
import FooterHeader from "../footer-header/FooterHeader";
import styles from "./footer.module.css";
import FooterRecentPostCard from "../footer-recent-posts-card/FooterRecentPostCard";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer_container_wrapper}>
      <div className={styles.footer_container_wrapper_2}>
        <div className={styles.footer_container}>
          <section className={styles.logo_text_socials}>
            <div className={styles.logo_container}>
              <img src={logo} alt="Bridge Bright Center Logo" />
            </div>
            <div className={styles.paragraph_container}>
              <p className={styles.paragraph}>
                Empowering children, supporting families, and building brighter
                futures. Contact us to learn more about our programs and how we
                can support your family.
              </p>
            </div>
            <div className={styles.socials_container}>
              <div className={styles.socials_cover}>
                <img className={styles.social} src={yt_footer} alt="" />
              </div>
              <div className={styles.socials_cover}>
                <img className={styles.social} src={x_footer} alt="" />
              </div>
              <div className={styles.socials_cover}>
                <img className={styles.social} src={fb_footer} alt="" />
              </div>
            </div>
          </section>
          <nav
            className={styles.quick_links_container}
            aria-label="Quick Links"
          >
            <FooterHeader header={"Quick Links"} />
            <ul className={styles.links_container}>
              {[
                "About Us",
                "Our Services",
                "Contact Us",
                "Gallery",
                "Testimonial",
                "Blog",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link_item_wrapper}>
                    <div className={styles.link_item}>
                      <div className={styles.arrow_container}>
                        <FaChevronRight className={styles.arrow} />
                        <FaChevronRight className={styles.arrow} />
                      </div>
                      {link}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <section className={styles.recent_posts_container}>
            <FooterHeader header={"Recent Posts"} />
            <div className={styles.posts_cards_container}>
              <FooterRecentPostCard />
              <FooterRecentPostCard />
              <FooterRecentPostCard />
            </div>
          </section>
          <section className={styles.contact_us_container}>
            <FooterHeader header={"Contact Us"} />
            <div className={styles.footer_link_container}>
              <div className={styles.footer_link}>
                <FaEnvelope />
                <p>info@example.com</p>
              </div>
              <div className={styles.footer_link}>
                <FaPhone />
                <p>+31731929292</p>
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.input_container}>
                <input type="text" placeholder="Enter your email address" />
                <button type="submit">
                  <img src={submit_icon} alt="submit" />
                </button>
              </div>
              <div className={styles.checkbox_input}>
                <input className={styles.input} type="checkbox" />
                <p>
                  I agree with the{" "}
                  <span className={styles.span_text}>privacy policy</span>
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className={styles.bottom_wrapper}>
        <div className={styles.bottom}>
          <p>© 2025 Bridge Bright Center. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
