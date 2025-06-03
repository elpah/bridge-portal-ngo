import { useState } from "react";
import FooterHeader from "../footer-header/FooterHeader";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

import { img_placeholder } from "../../assets/images/images";

import styles from "./sidebar.module.css";
import BlogCardNew from "../blog-card-new/BlogCardNew";

const Sidebar = () => {
  const [query, setQuery] = useState("");

  const options = [
    "Example",
    "Example",
    "Example",
    "Example",
    "Example",
    "Example",
  ];

  return (
    <aside className={styles.sidebar_container}>
      <section className={styles.search}>
        <FooterHeader header={"Search Here"} color={"#363636"} />

        <input
          type="text"
          list="fruit-list"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="enter keyword"
        />
        <datalist id="fruit-list">
          {options
            .filter((option) =>
              option.toLowerCase().includes(query.toLowerCase())
            )
            .map((option, index) => (
              <option key={index} value={option} />
            ))}
        </datalist>
      </section>
      <section className={styles.categories}>
        <FooterHeader header={"Category List"} color={"#363636"} />
        <ul>
          <li>
            <p>
              {" "}
              <span className={styles.numbee}>(28)</span> Education
            </p>
            <div className={styles.icon_container}>
              <HiOutlineChevronRight />
            </div>
          </li>
          <li>
            <p>
              {" "}
              <span className={styles.numbee}>(28)</span> Education
            </p>
            <div className={styles.icon_container}>
              <HiOutlineChevronRight />
            </div>
          </li>
          <li>
            <p>
              {" "}
              <span className={styles.numbee}>(28)</span> Education
            </p>
            <div className={styles.icon_container}>
              <HiOutlineChevronRight />
            </div>
          </li>
          <li>
            <p>
              {" "}
              <span className={styles.numbee}>(28)</span> Education
            </p>
            <div className={styles.icon_container}>
              <HiOutlineChevronRight />
            </div>
          </li>
          <li>
            <p>
              {" "}
              <span className={styles.numbee}>(28)</span> Education
            </p>
            <div className={styles.icon_container}>
              <HiOutlineChevronRight />
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.latest}>
        <FooterHeader header={"Latest Post"} color={"#363636"} />
		<div className={styles.blogs_card_container}>
        <BlogCardNew />
        <BlogCardNew />
        <BlogCardNew />
        <BlogCardNew />
        <BlogCardNew />
        <BlogCardNew />
        <BlogCardNew />
		</div>
      </section>
      <section className={styles.popular}>
        <FooterHeader header={"Popular Tags"} color={"#363636"} />
        <div className={styles.tags_container}>
          <button>Sport</button>
          <button>Music</button>
          <button>Charity</button>
          <button>Food</button>
          <button>Education</button>
          <button>Children</button>
        </div>
      </section>
      <section className={styles.author}>
        <div className={styles.image_container}>
          <img src={img_placeholder} alt="Authors photo" />
        </div>
        <h3 className={styles.author_name}>Mr Akwasi</h3>
        <p className={styles.author_position}>(Author)</p>
        <div className={styles.socials_container}>
          <FaFacebookF className={styles.social} />
          <FaYoutube className={styles.social} />
          <FaXTwitter className={styles.social} />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
