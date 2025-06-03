import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Footer from "./components/footer/Footer";
import React from "react";

import Home from "./pages/home/Home";
const About = React.lazy(() => import("./pages/about/About"));
const Services = React.lazy(() => import("./pages/services/Services"));
const ServicesDetails = React.lazy(
  () => import("./pages/services-details/ServicesDetails")
);
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Gallery = React.lazy(() => import("./pages/gallery/Gallery"));
const Testimonial = React.lazy(() => import("./pages/testimonial/Testimonial"));
const Blog = React.lazy(() => import("./pages/blog/Blog"));
const NotFound = React.lazy(() => import("./pages/not-found/NotFound"));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServicesDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
