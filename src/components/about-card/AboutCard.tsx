import {mission_icon } from "../../assets/images/images";
import ReadMore from "../read-more-button/ReadMore";
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
      <ReadMore
        hoverColor="#fff"
        color="#fff"
        backgroundColor="#46af3f"
        hoverBackgroundColor=" #46af3f"
      />
    </div>
  );
};

export default AboutCard;
