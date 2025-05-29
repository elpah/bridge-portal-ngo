import styles from "./services-details.module.css";
import {
  service_image_placeholder_mobile,
  service_image_placeholder_tablet,
  service_image_placeholder_desktop,
} from "../../assets/images/images.ts";
import PreFooter from "../../components/pre-footer/PreFooter.tsx";

const ServicesDetails = () => {
  return (
    <div className={styles.services_details_container}>
		<div className={styles.services_details_container_wrapper}>
      <div className={styles.image_container}>
        <img
          className={styles.service_image}
          src={service_image_placeholder_mobile}
          alt="Service detail image"
        />
      </div>
     

      <section className={styles.details_body}>
		 <p className={styles.header_paragraph}>
        At Bridge Bright Center, our Behavioral Therapy program is designed to
        support children in overcoming emotional and behavioral challenges that
        may impact their well-being, relationships, and daily functioning. Our
        approach is rooted in compassion and expertise, focusing on empowering
        children to develop positive coping strategies, emotional regulation
        skills, and healthier behaviors.
      </p>
        <h2 className={styles.section_header}>Our Approach</h2>
        <p className={styles.section_paragraph}>
          We understand that every child is unique, so our behavioral therapy
          plans are personalized to meet the individual needs and circumstances
          of each child. Our skilled therapists use evidence-based practices,
          including Cognitive Behavioral Therapy (CBT), Applied Behavior
          Analysis (ABA), and other integrative techniques to address specific
          behavioral concerns. Sessions are conducted in a safe, supportive
          environment where children feel comfortable expressing their emotions
          and thoughts.
          <br /> <br />
          We work collaboratively with families to ensure consistent support
          both at the center and at home. By involving parents and caregivers,
          we help create a holistic support system that reinforces positive
          changes. Our therapists also coordinate with educators and other
          professionals to ensure the child’s progress is continuous and
          well-integrated across various environments
        </p>

        <h2 className={styles.section_header}>Key Benefits</h2>
        <ul className={styles.list_container}>
          <li>
            Improved Self-Control and Coping Mechanisms: Children learn to
            manage their emotions and respond to challenges in healthier ways.
          </li>
          <li>
            Enhanced Problem-Solving and Decision-Making Skills: Therapy
            promotes logical thinking and thoughtful reactions to various
            situations.
          </li>
          <li>
            Better Communication of Needs and Feelings: Children are encouraged
            to express their thoughts constructively, reducing frustration and
            misunderstandings.
          </li>
          <li>
            Reduction of Disruptive or Harmful Behaviors: Through consistent
            practice and guidance, negative behaviors decrease over time.
          </li>
          <li>
            Increased Social Interaction and Positive Relationships: Children
            gain confidence in social settings, building friendships and
            improving interactions with family and peers
          </li>
        </ul>
      </section>
	  </div>
      <PreFooter />
    </div>
  );
};

export default ServicesDetails;
