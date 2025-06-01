import { why_us_image } from "../../assets/images/images";
import PageSubHeader from "../page-sub-header/PageSubHeader";
import WhyCard from "../why_card/WhyCard";
import styles from "./why-us-section.module.css";
const WhyUsSection = () => {
  return (
    <section className={styles.why_us}>
      <div className={styles.why_us_sub_wrapper}>
        <div className={styles.left}>
          <div className={styles.image_container}>
            <img src={why_us_image} alt="smiling Children Image" />
          </div>
        </div>
        <div className={styles.right}>
          <PageSubHeader firstHeader={"Why Us"} secondHeader={"Why Choose Bridge Bright Center"}/>
          <p className={styles.paragraph}>
            Our passionate team provides personalized care, therapy, and
            educational support to help young minds thrive. We believe that with
            the right guidance and a nurturing environment, every child can
            build a brighter future.
          </p>
          <div className={styles.why_card_container}>
            <WhyCard />
            <WhyCard />
            <WhyCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
