import { arrow, mission_icon } from "../../assets/images/images";
import styles from "./about-card.module.css";

const AboutCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.icon_container}>
        <img className={styles.icon} src={mission_icon} alt="icon image" />
      </div>
      <h2 className={styles.header}>Our Mission</h2>
      <p className={styles.paragraph}>
        Our mission is simple: to empower young minds and strengthen families.
        We do this by providing compassionate, individualized services that
        nurture growth, resilience, and confidence.
      </p>
      <button>
        Read More
        <img src={arrow} alt="arror" />
      </button>
    </div>
  );
};

export default AboutCard;
