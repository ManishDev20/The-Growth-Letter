import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "../Components/Hero";
import { AboutBrand } from "../Components/AboutBrand";
import { AboutVidhusi } from "../Components/AboutVidhusi";
import { Services } from "../Components/Services";
import { InstagramGrid } from "../Components/InstagramGrid";
import { Contact } from "../Components/Contact";
import { Blog } from "../Components/Blog";
import { Footer } from "../Components/Footer";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Hero />
      <AboutBrand />
      <AboutVidhusi />
      <Services />
      <InstagramGrid />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
