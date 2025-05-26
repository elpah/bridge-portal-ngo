import {
  blog_img_placeholder,
  bi_people_icon,
  comment_icon,
  share_icon,
} from "../../assets/images/images";
import ReadMore from "../read-more-button/ReadMore";
import styles from "./blog-card.module.css";
const BlogCard = () => {
  return (
    <div className={styles.blog_card_container}>
      <div className={styles.image_container}>
        <img src={blog_img_placeholder} alt="blog card image" />
      </div>
      <div className={styles.body_container}>
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
        <h3 className={styles.title}>
          Give Education, it’s The Best Gift Ever
        </h3>
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

export default BlogCard;
