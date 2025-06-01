import styles from "./page-sub-header.module.css";
import type { CSSProperties } from "react";

type PageSubHeaderProps = {
  firstHeader: string;
  secondHeader: string;
  align?: CSSProperties["textAlign"];
};

const PageSubHeader = ({
  firstHeader,
  secondHeader,
  align = "left",
}: PageSubHeaderProps) => {
  return (
    <div className={styles.header_container}>
      <p className={styles.header} style={{ textAlign: align }}>
        {firstHeader}
      </p>
      <h2 className={styles.header_2} style={{ textAlign: align }}>
        {secondHeader}
      </h2>
    </div>
  );
};

export default PageSubHeader;
