import { star_image } from "../../assets/images/images";
import Card from "../../components/card/Card";
import PageHeader from "../../components/page-header/PageHeader";
import ServicesTopCard from "../../components/services-top-card/ServicesTopCard";
import WhyUsSection from "../../components/why_use_section/WhyUsSection";
import styles from "./services.module.css";
const Services = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.services_sub_container}>
        {/* <div className={styles.services_header_container}>
          <h1 className={styles.header}>
            Building Brighter Futures, One Child at a Time
          </h1>
          <p className={styles.header_paragraph}>
            At Bridge Bright Center, we offer a comprehensive range of services
            designed to support children with mental disabilities and behavioral
            challenges. Our goal is to help children develop essential skills,
            build resilience, and thrive in a supportive and inclusive
            environment.
          </p>
        </div> */}
        <PageHeader
          pageHead={"Building Brighter Futures, One Child at a Time"}
          pagePragraph={
            " At Bridge Bright Center, we offer a comprehensive range of services designed to support children with mental disabilities and behavioral challenges. Our goal is to help children develop essential skills, build resilience, and thrive in a supportive and inclusive environment."
          }
        />
        <div className={styles.top_card_container}>
          <ServicesTopCard />
          <ServicesTopCard />
          <ServicesTopCard />
          <ServicesTopCard />
        </div>
        <section className={styles.our_services}>
          <div className={styles.services_header_star}>
            <div className={styles.services_header}>
              <p>Our Services</p>
              <h2>A Dedicated Team, Empowering Young Minds.</h2>
            </div>
            <img
              className={styles.star_icon}
              src={star_image}
              alt="Star Icon"
            />
          </div>
          <div className={styles.services_card_container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
      <WhyUsSection />
    </div>
  );
};

export default Services;
