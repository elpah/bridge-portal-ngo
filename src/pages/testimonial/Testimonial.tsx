import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import styles from "./testimonial.module.css";
const Testimonial = () => {
  return (
    <div className={styles.testimonials_container}>
      <h1 className={styles.header}>Testimonials: Voices from Our Community</h1>
      <p className={styles.header_paragraph}>
        At Bridge Bright Center, the stories of the families we support inspire
        us every day. Hearing about the positive changes and milestones achieved
        by our children fuels our commitment to compassionate, individualized
        care. Below, you’ll find real experiences shared by parents, caregivers,
        and community partners who have witnessed the impact of our programs
        firsthand.
      </p>
      <div className={styles.testimonial_card_container}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
