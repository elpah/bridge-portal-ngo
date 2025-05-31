import { FaStar } from "react-icons/fa";
import styles from "./testimonial-card.module.css";

import { img_placeholder } from "../../assets/images/images";

const TestimonialCard = () => {
  return (
    <div className={styles.test_card_container}>
      <div className={styles.image_name_container}>
        <div className={styles.image_container}>
          <img src={img_placeholder} alt="" />
        </div>
        <div className={styles.name_container}>
          <h3 className={styles.name}>John Doe</h3>
          <p className={styles.relation}>Parent</p>
        </div>
      </div>
      <div className={styles.testimony_container}>
        <p className={styles.testimony}>
          Bridge Bright Center has been a game-changer for our family. The
          personalized therapy and constant support have helped our son make
          incredible progress. We finally feel hopeful about his future!
        </p>
      </div>
      <div className={styles.stars_container}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <svg
        className={styles.quote_icon}
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.625 14.25V34.6289L46.54 51.75H40.0811L47.0996 35.9531L47.4121 35.25H36.25V14.25H58.625ZM29.75 14.25V34.6289L17.665 51.75H11.2061L18.2246 35.9531L18.5371 35.25H7.375V14.25H29.75Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};

export default TestimonialCard;
