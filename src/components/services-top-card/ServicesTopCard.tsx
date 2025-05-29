import { services_top_img_placeholder } from "../../assets/images/images";
import styles from "./services-top-card.module.css";

const ServicesTopCard = () => {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.header}> Recreational Therapy</h2>
      <div className={styles.image_container}>
        <img
          className={styles.card_image}
          src={services_top_img_placeholder}
          alt="Services Image"
        />
      </div>
      <p className={styles.header_paragraph}>
        Recreational therapy uses creative and engaging activities to improve
        physical, social, and emotional well-being.{" "}
      </p>
    </div>
  );
};

export default ServicesTopCard;
