import { calender_icon } from "../../assets/images/images"
import styles from "./recent-posts.module.css"

const FooterRecentPostCard = () => {
  return (
	<div className={styles.recent_card_container}>
    <div className={styles.image_container}>
      <img src="" alt="" />
    </div>
    <div className={styles.other_container}>
      <div className={styles.icon_date_container}>
        <img src={calender_icon} alt="calender icon" />
        <p>May 12 2024</p>
      </div>
      <p className={styles.intro}>Give Education, its the best gift....</p>
    </div>
  </div>
  )
}

export default FooterRecentPostCard