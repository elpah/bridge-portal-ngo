import {
  about_cover_desktop,
  about_cover_mobile,
  about_image_frame,
  quote_icon,
  star_image,
  vision_image_mobile,
} from "../../assets/images/images";
import AboutVisionCard from "../../components/about-vision-card/AboutVisionCard";
import TeamCard from "../../components/team-card/TeamCard";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.header_cover_container}>
        <h2 className={styles.about_header_1}>Our Story, Vision, </h2>
        <h2 className={styles.about_header}>and Values.</h2>

        <img
          className={styles.cover_image}
          src={about_cover_desktop}
          alt="about cover photo"
        />
      </div>
      <div className={styles.about_info_container}>
        <div className={styles.about_info}>
          <img className={styles.quote} src={quote_icon} alt="quote icon" />
          <p className={styles.text}>
            At Bridge Bright Center, our team is more than just
            professionals—they are passionate advocates dedicated to making a
            positive difference in the lives of children and families. Comprised
            of experienced therapists, compassionate educators, and supportive
            staff members, we work collaboratively to provide the highest
            quality care and guidance.
          </p>
          <img
            className={styles.bottom_optional_img}
            src={about_image_frame}
            alt="place holder image"
          />
        </div>
        <div className={styles.about_card}>
          <div className={styles.star_header_container}>
            <h2 className={styles.card_head}>About us</h2>
            <img
              className={styles.star_image}
              src={star_image}
              alt="star icon"
            />
          </div>
          <p className={styles.about_us_text}>
            Bridge Bright Center was founded to empower children with mental
            disabilities and behavioral challenges by providing compassionate
            care and practical support. A group of passionate educators and
            therapists came together to create a safe, inclusive space where
            children could thrive despite their challenges. What began as a
            small community initiative has grown into a trusted center offering
            therapy, education, and family support. Our dedicated team remains
            committed to helping children build resilience, independence, and
            brighter futures through personalized care and guidance.
          </p>
        </div>
        <img
          className={styles.bottom_optional_img2}
          src={about_image_frame}
          alt="place holder image"
        />
      </div>
      <div className={styles.vision_mission_container_wrapper}>
        <div className={styles.vision_mission_container}>
          <AboutVisionCard />
          <AboutVisionCard />
        </div>
        <div className={styles.image_container}>
          <img
            className={styles.vision_image}
            src={vision_image_mobile}
            alt="Vision Image"
          />
        </div>
      </div>
      <section className={styles.our_team_section}>
        <p className={styles.our_team_header}>Our Team</p>
        <h2 className={styles.our_team_header2}>
          A Dedicated Team, Empowering Young Minds.
        </h2>
        <div className={styles.our_team_card_container}>
                   <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />

        </div>
      </section>
    </div>
  );
};

export default About;
