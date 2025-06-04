import { HiOutlineArrowRight } from "react-icons/hi";
import styles from "./leave-comment.module.css";

const LeaveComment = () => {
  return (
    <form className={styles.leave_comment_container}>
      <input type="text" placeholder="Your Name" />
      <div className={styles.email_position_container}>
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Position" />
      </div>
	  <textarea name="" id="" placeholder="Leave a comment"></textarea>
	  <button>
		Submit Your Comment{" "}<HiOutlineArrowRight className={styles.arrow}/>
	  </button>
    </form>
  );
};

export default LeaveComment;
