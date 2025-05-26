import ReadMore from "../read-more-button/ReadMore";
import { mission_icon } from "../../assets/images/images";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.card_header}>Therapeutic Care</h2>
      <p className={styles.card_para}>
        We provide tailored therapy programs, including behavioral, speech, and
        occupational therapy, to help children develop essential life skills.
      </p>
      <ReadMore />
      <img className={styles.card_icon} src={mission_icon} alt="icon image" />
      
    </div>
  );
};

export default Card;
