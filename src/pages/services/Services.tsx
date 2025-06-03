import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { star_image } from "../../assets/images/images";
import Card from "../../components/card/Card";
import PageHeader from "../../components/page-header/PageHeader";
import PageSubHeader from "../../components/page-sub-header/PageSubHeader";
import ServicesTopCard from "../../components/services-top-card/ServicesTopCard";
import WhyUsSection from "../../components/why_use_section/WhyUsSection";
import styles from "./services.module.css";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles.services_container}>
      <div className={styles.services_sub_container}>
        <PageHeader
          pageHead={"Building Brighter Futures, One Child at a Time"}
          pagePragraph={
            "At Bridge Bright Center, we offer a comprehensive range of services designed to support children with mental disabilities and behavioral challenges. Our goal is to help children develop essential skills, build resilience, and thrive in a supportive and inclusive environment."
          }
        />
        <section className={styles.top_card_container}>
          <ServicesTopCard />
          <ServicesTopCard />
          <ServicesTopCard />
          <ServicesTopCard />
        </section>
        <section className={styles.our_services}>
          <div className={styles.services_header_star}>
            <div className={styles.services_header}>
              <PageSubHeader
                firstHeader={"Our Services"}
                secondHeader={"A Dedicated Team, Empowering Young Minds."}
              />
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
    </main>
  );
};

export default Services;
