import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Testimonial from "./pages/testimonial/Testimonial";

function App() {

  return (
    <>
      <Navbar />

      {/* <Home /> */}
      <Suspense fallback={<div>Fallback testing</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
