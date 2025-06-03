import {
  bi_people_icon,
  blog_img_placeholder,
  comment_icon,
  share_icon,
} from "../../assets/images/images";
import ReadMore from "../read-more-button/ReadMore";
import styles from "./blog-card-new.module.css";

const BlogCardNew = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={blog_img_placeholder}
          alt="blog image"
        />
      </div>
      <div className={styles.body_container}>
        <h2 className={styles.card_header}>
          Give Education, it’s The Best Gift Ever
        </h2>
        <p className={styles.card_text}>
          {" "}
          Poor children often face health disparities due to inadequate
          healthcare facilities and limited access to essential Services.
        </p>
        <div className={styles.by_comment_container}>
          <div className={styles.card}>
            <img src={bi_people_icon} alt="people icon" />
            <p className={styles.text_admin}>By Admin</p>
          </div>
          <div className={styles.card}>
            <img src={comment_icon} alt="people icon" />
            <p className={styles.text_comment}>02 Comment</p>
          </div>
        </div>
        <div className={styles.read_share_container}>
          <ReadMore />
          <button className={styles.share_button}>
            <img src={share_icon} alt="Share Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardNew;
