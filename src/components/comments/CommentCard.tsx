import { HiOutlineCalendar } from "react-icons/hi";
import styles from "./comment-card.module.css";
import { img_placeholder } from "../../assets/images/images";

const CommentCard = () => {
  return (
    <div className={styles.comment_card}>
      <div className={styles.image_div}>
        <div className={styles.image_container}>
          <img src={img_placeholder} alt="Profile Icon" />
        </div>
      </div>
      <div className={styles.body_container}>
        <div className={styles.name_position_date_container}>
          <div className={styles.name_date_container}>
            <h2>Elpachris Obeng</h2>
            <div className={styles.date_icon_container}>
              <HiOutlineCalendar className={styles.date_icon} />
              <p className={styles.date_text}>May 12, 2025</p>
            </div>
          </div>
          <p>(Therapist)</p>
        </div>
        <p className={styles.comment_text}>
          I will give your a complete account of the system, and expound on the
          actual teachings of the great explorer of the trth its important to
          discuss your wishes with your family.
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
