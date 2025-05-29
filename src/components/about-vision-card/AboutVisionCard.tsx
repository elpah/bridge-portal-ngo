import { star_image } from "../../assets/images/images";
import styles from "./about-vision-card.module.css";
const AboutVisionCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.header_icon_container}>
        <h2 className={styles.header}>Vision</h2>
        <img className={styles.star_icon} src={star_image} alt="star icon" />
      </div>
      <p className={styles.paragraph}>
        Our vision is to build a supportive and inclusive community where
        children with mental disabilities and behavioral challenges are
        empowered to thrive. We envision a future where every child, regardless
        of their abilities, is given the opportunity to develop their unique
        potential through compassionate care, personalized guidance, and
        holistic support. At Bridge Bright Center, we strive to be a beacon of
        hope, inspiring families and communities to embrace diversity and
        champion the growth, resilience, and well-being of every child.
      </p>
    </div>
  );
};

export default AboutVisionCard;
