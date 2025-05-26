import { about_us_group_image, why_us_image } from "../../assets/images/images";
import AboutCard from "../../components/about-card/AboutCard";
import BlogCard from "../../components/blog-card/BlogCard";
import Card from "../../components/card/Card";
import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import WhyCard from "../../components/why_card/WhyCard";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.cover}>
        <div className={styles.cover_elements_wrapper}>
          <h1 className={styles.header}>
            Where Compassion Meets Growth: Transforming Lives Through{" "}
            <span className={styles.header_span}>
              Specialized Therapy and Support.
            </span>
          </h1>
          <p className={styles.header_text}>
            Bridge Bright Center, we’re dedicated to helping children with
            mental disabilities and behavioral challenges thrive. Through
            compassionate care, tailored therapies, and a supportive community,
            we empower families to build brighter futures together.
          </p>
          <button className={styles.header_button}>
            Schedule A Consultation
          </button>
        </div>
      </div>
      <div className={styles.body_wrapper}>
        <section className={styles.what_we_do_section}>
          <p className={styles.header}>What we do</p>
          <h2 className={styles.header_2}>We do it for children in need</h2>
          <div className={styles.card_container}>
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className={styles.about_us}>
          <div className={styles.left}>
            <p className={styles.header}>About Us</p>
            <h2 className={styles.header_2}>
              Building Brighter Future Through Compassionate Care and Support
            </h2>
            <p className={styles.paragraph}>
              Bridge Bright Center is dedicated to empowering children with
              mental disabilities and behavioral challenges. Our passionate team
              provides personalized care, therapy, and educational support to
              help young minds thrive. We believe that with the right guidance
              and a nurturing environment, every child can build a brighter
              future.
            </p>
            <div className={styles.card_container}>
              <AboutCard />
              <AboutCard />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image_container}>
              <img src={about_us_group_image} alt="Group images" />
            </div>
          </div>
        </section>
        <section className={styles.why_us}>
          <div className={styles.why_us_sub_wrapper}>
          <div className={styles.left}>
            <div className={styles.image_container}>
              <img src={why_us_image} alt="smiling Children Image" />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.header}>Why Us</p>
            <h2 className={styles.header_2}>Why Choose Bridge Bright Center</h2>
            <p className={styles.paragraph}>
              Our passionate team provides personalized care, therapy, and
              educational support to help young minds thrive. We believe that
              with the right guidance and a nurturing environment, every child
              can build a brighter future.
            </p>
            <div className={styles.why_card_container}>
              <WhyCard />
              <WhyCard />
              <WhyCard />
            </div>
          </div>
          </div>
        </section>
        <section className={styles.testimonials}>
          <p className={styles.header}>Testimonials</p>
          <h2 className={styles.header_2}>Some Clients Feedback..</h2>
          <div className={styles.testimonials_card_container}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </section>
        <section className={styles.blog}>
          <p className={styles.header}>Blog</p>
          <h2 className={styles.header_2}>Explore Blogs and News</h2>
          <div className={styles.blogs_card_container}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
