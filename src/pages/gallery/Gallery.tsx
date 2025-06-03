import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gallery_image_placeholder } from "../../assets/images/images";
import PageHeader from "../../components/page-header/PageHeader";
import styles from "./gallery.module.css";

const Gallery = () => {
  
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles.gallery_container}>
      <section className={styles.gallery_wrapper}>
        <PageHeader
          pageHead={"Capturing Moments of Growth, Joy, and Connection."}
          pagePragraph={
            " At Bridge Bright Center, we believe in creating a positive, enriching environment where children can thrive. Our gallery showcases moments from our events, therapy sessions, and everyday life at the center—capturing the smiles, achievements, and sense of community that define who we are."
          }
        />
      </section>
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
    </main>
  );
};

export default Gallery;
