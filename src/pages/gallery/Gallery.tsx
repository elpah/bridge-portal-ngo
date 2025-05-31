import { gallery_image_placeholder } from "../../assets/images/images";
import styles from "./gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.gallery_container}>
      <div className={styles.gallery_wrapper}>
        <h1 className={styles.gallery_header}>
          Capturing Moments of Growth, Joy, and Connection.
        </h1>
        <p className={styles.header_paragraph}>
          At Bridge Bright Center, we believe in creating a positive, enriching
          environment where children can thrive. Our gallery showcases moments
          from our events, therapy sessions, and everyday life at the
          center—capturing the smiles, achievements, and sense of community that
          define who we are.
        </p>
      </div>
      <section className={styles.photos_section}>
        <div className={styles.photos_container}>
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>{" "}
          <div className={styles.image_container}>
            <img src={gallery_image_placeholder} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
