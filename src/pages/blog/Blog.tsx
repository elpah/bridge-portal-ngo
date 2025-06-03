import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../../components/blog-card/BlogCard";
import Pagination from "../../components/pagination/Pagination";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./blog.module.css";

const Blog = () => {
  const location = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles.blog_container}>
      <section className={styles.header_cover_container}>
        <div className={styles.header_container}>
          <h1 className={styles.header}>News & Insights</h1>
        </div>
      </section>
      <section className={styles.blog_sidebar_container}>
        <div className={styles.blogs_pagination_container}>
          <div className={styles.blog_card_container}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className={styles.pagination_container}>
            <Pagination />
          </div>
        </div>
        <div className={styles.sidebar_container}>
          <Sidebar />
        </div>
      </section>
    </main>
  );
};

export default Blog;
