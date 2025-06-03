import { HiOutlineArrowRight } from "react-icons/hi";
import { useState, type CSSProperties } from "react";
import styles from "./read-more.module.css";

type ReadMoreProps = {
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  hoverBackgroundColor?: CSSProperties["backgroundColor"];
  hoverColor?: CSSProperties["color"];
};

const ReadMore: React.FC<ReadMoreProps> = ({
  backgroundColor = "white",
  color = "#363636",
  hoverColor = "#fff",
  hoverBackgroundColor = "#ff7d10",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.read_more_button}
      style={{
        color: isHovered ? hoverColor : color,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
      }}
    >
      Read more
      <HiOutlineArrowRight className={styles.arrow} />
    </button>
  );
};

export default ReadMore;
