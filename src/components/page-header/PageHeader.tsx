import styles from "./page-headers.module.css";

type PageHeaderProps = {
  pageHead: string;
  pagePragraph: string;
};
const PageHeader = ({ pageHead, pagePragraph }: PageHeaderProps) => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header}>{pageHead}</h1>
      <p className={styles.header_paragraph}>{pagePragraph}</p>
    </div>
  );
};

export default PageHeader;
