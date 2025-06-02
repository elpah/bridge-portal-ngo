import BlogCard from "../../components/blog-card/BlogCard";
import Pagination from "../../components/pagination/Pagination";
import styles from "./blog.module.css";
const Blog = () => {
  return (
    <div className={styles.blog_container}>
      <div className={styles.header_cover_container}>
        <div className={styles.header_container}>
          <h1 className={styles.header}>News & Insights</h1>
        </div>
      </div>
      <div className={styles.blog_sidebar_container}>
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
            <Pagination/>
          </div>
        </div>

        <div className={styles.sidebar_container}></div>
      </div>
    </div>
  );
};

export default Blog;
