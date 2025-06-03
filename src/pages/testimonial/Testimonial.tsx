import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/page-header/PageHeader";
import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import styles from "./testimonial.module.css";

const Testimonial = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles.testimonials_container}>
      <PageHeader
        pageHead={"Testimonials: Voices from Our Community"}
        pagePragraph={
          " At Bridge Bright Center, the stories of the families we support inspire us every day. Hearing about the positive changes and milestones achieved by our children fuels our commitment to compassionate, individualized care. Below, you’ll find real experiences shared by parents, caregivers, and community partners who have witnessed the impact of our programs firsthand."
        }
      />
      <section className={styles.testimonial_card_container}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </section>
    </main>
  );
};

export default Testimonial;
