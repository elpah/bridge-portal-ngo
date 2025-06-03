import styles from "./footer-header.module.css";
import type { CSSProperties } from "react";

type FooterHeaderProps = {
  header: string;
  color?: CSSProperties["color"]; // Text color
};

const FooterHeader = ({
  header,
  color = "white", // default text color
}: FooterHeaderProps) => {
  return (
    <div className={styles.header_container}>
      <h2 className={styles.header} style={{ color }}>
        {header}
      </h2>
      <div className={styles.bar_bottom_container}>
        <div className={styles.short_bar}></div>
        <div className={styles.long_bar}></div>
      </div>
    </div>
  );
};

export default FooterHeader;
