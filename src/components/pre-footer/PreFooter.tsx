import styles from "./prefooter.module.css";

const PreFooter = () => {
  return (
    <div className={styles.prefooter_container}>
      <p className={styles.para}>Ready to Empower Your Child? Let’s Build a Brighter Future Together</p>
      <div className={styles.button_container}>
        <button className={styles.consult}>Schedule a Consultation</button>
        <button className={styles.contact}>Contact Us</button>
      </div>
    </div>
  );
};

export default PreFooter;
