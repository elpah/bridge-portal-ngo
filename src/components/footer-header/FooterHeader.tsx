import styles from "./footer-header.module.css";

type FooterHeaderProps = {
  header: string;
};

const FooterHeader = ({ header }: FooterHeaderProps) => {
  return (
    <div className={styles.header_container}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.bar_bottom_container}>
        <div className={styles.short_bar}></div>
        <div className={styles.long_bar}></div>
      </div>
    </div>
  );
};

export default FooterHeader;
