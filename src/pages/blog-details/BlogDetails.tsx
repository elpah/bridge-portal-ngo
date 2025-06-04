import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  comment_icon,
  news_details_placeholder,
} from "../../assets/images/images";
import BlogCard from "../../components/blog-card/BlogCard";
import CommentCard from "../../components/comments/CommentCard";
import LeaveComment from "../../components/leave-comment/LeaveComment";

import styles from "./blog-details.module.css";

const BlogDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles.blog_details_container}>
      <div className={styles.body_container}>
        <div className={styles.image_container}>
          <img src={news_details_placeholder} alt="news cover_image" />
        </div>
        <h1 className={styles.header}>
          These children often face significant challenges related to their
          access to education, Healthcare, nutrition, and overall well-being.
        </h1>
        <hr className={styles.custom} />

        <p className={styles.paragraph}>
          Limited Access to Education: Many children in poverty lack access to
          quality education. Factors such as lack of Resources, inadequate
          infrastructure, and the need to contribute to household income can
          hinder their ability To attend school regularly.Healthcare Challenges.
          <br />
          <br />
          Poor children often face health disparities due to inadequate
          healthcare facilities and limited access to essential Services. This
          can lead to higher rates of preventable illnesses and
          malnutrition.Nutritional Needs.
        </p>
        <div className={styles.optional_image_container}>
          <img src={news_details_placeholder} alt="news cover_image" />
        </div>
        <hr />
        <p className={styles.paragraph}>
          Serving poor children at a specific time involves organizing targeted
          interventions or support programs to address The needs of
          disadvantaged children. Below is an example of a time-specific
          initiative designed to serve Poor children Provide educational
          support, nutrition.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        <p className={styles.paragraph}>
          This after-school enrichment program, "Bright Futures," is designed to
          address the specific needs of poor children during a critical time
          frame after school hours, providing them with the tools and support.
        </p>
        <hr />
        <section className={styles.related_posts_section}>
          <h2 className={styles.related_header}>Related Post</h2>
          <div className={styles.blogs_card_container}>
            <BlogCard />
          </div>
        </section>
        <section className={styles.comment_section}>
          <div className={styles.comment_header_container}>
            <img src={comment_icon} alt="" />
            <h2 className={styles.comment_header}>
              Comments <span>(06)</span>
            </h2>
          </div>
          <div className={styles.comment_cards_container}>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </section>
        <section className={styles.leave_comment_section}>
          <h2>Leave Your Comment</h2>
          <LeaveComment />
        </section>
      </div>
      <div className={styles.aside_container}>
        <Sidebar />
      </div>
    </main>
  );
};

export default BlogDetails;
