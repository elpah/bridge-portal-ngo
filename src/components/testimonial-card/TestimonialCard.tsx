import { FaStar } from "react-icons/fa";
import styles from "./testimonial-card.module.css";

import { img_placeholder,quote_icon } from "../../assets/images/images";

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
	  <img className={styles.quote_icon} src={quote_icon} alt="Quote Icon" />
    </div>
  );
};

export default TestimonialCard;
