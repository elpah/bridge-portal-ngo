import { HiOutlineArrowRight } from "react-icons/hi";

import styles from "./read-more.module.css"

const ReadMore = () => {
  return (
    <button className={styles.read_more_button}>
      Read more
      <HiOutlineArrowRight className={styles.arrow} />
    </button>
  );
};

export default ReadMore;
