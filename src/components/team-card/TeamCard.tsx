import {
  fb,
  fb_footer,
  team_card_img_placeholder,
} from "../../assets/images/images";

import styles from "./team-card.module.css";
const TeamCard = () => {
  return (
    <div className={styles.team_card_wrapper}>
      <div className={styles.team_card_container}>
        <img
          className={styles.img_placeholder}
          src={team_card_img_placeholder}
          alt="Team card Image"
        />

        <div className={styles.hover_effect}>
          <div className={styles.text_container}>
            <p className={styles.text}>
              Dr. John Doe is a dedicated medical therapist with over 10 years
              of experience in pediatric mental health and behavioral therapy.
              Passionate about empowering children, she combines evidence-based
              techniques with a compassionate approach to support growth and
              resilience. At Bridge Bright Center, Dr. Okafor leads a team of
              skilled therapists, guiding them with her expertise in
              cognitive-behavioral therapy and family counseling.
            </p>
          </div>
          <div className={styles.socials_container}>
            <img className={styles.social} src={fb_footer} alt="" />
            <img className={styles.social} src={fb_footer} alt="" />
            <img className={styles.social} src={fb_footer} alt="" />
          </div>
        </div>
      </div>
	  <p className={styles.name}>
		John Doe
	  </p>
	  <p className={styles.profession}>Medical Doctor</p>
    </div>
  );
};

export default TeamCard;
