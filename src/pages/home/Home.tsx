import { about_us_group_image } from "../../assets/images/images";
import AboutCard from "../../components/about-card/AboutCard";
import BlogCard from "../../components/blog-card/BlogCard";
import Card from "../../components/card/Card";
import PageSubHeader from "../../components/page-sub-header/PageSubHeader";
import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import WhyUsSection from "../../components/why_use_section/WhyUsSection";
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
          <PageSubHeader
            firstHeader={"What we do"}
            secondHeader={"We do it for children in need"}
            align="center"
          />
          <div className={styles.card_container}>
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className={styles.about_us}>
          <div className={styles.left}>
            <PageSubHeader
              firstHeader={"About Us"}
              secondHeader={
                "Building Brighter Future Through Compassionate Care and Support"
              }
            />
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
        <WhyUsSection />
        <section className={styles.testimonials}>
          <PageSubHeader
            firstHeader={"Testimonials"}
            secondHeader={"Some Clients Feedback."}
          />
          <div className={styles.testimonials_card_container}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </section>
        <section className={styles.blog}>
          <PageSubHeader
            firstHeader={"Blog"}
            secondHeader={"Explore Blogs and News"}
          />
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
