import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./blog-details.module.css"

const BlogDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <main></main>;
};

export default BlogDetails;
