import { HiOutlineArrowRight } from "react-icons/hi";
import styles from "./why-card.module.css";

const WhyCard = () => {
  return (
    <div className={styles.why_card_container}>
      <div className={styles.header_arrow_icon}>
        <h2>Personalised Approach</h2>
        <HiOutlineArrowRight  className={styles.arrow} />
      </div>
      <div className={styles.para_container}>
        <p>
          We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
           We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
           We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
           We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
           We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
           We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
           We tailor our care plans to each child's unique needs, ensuring they
          receive the right support to thrive.
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
