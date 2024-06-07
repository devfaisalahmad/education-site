import React from "react";
//
import Hero from "./partials/Hero";
import HeroMobile from "./helpers/HeroMobile";
import Success from "./partials/Success";
import Educourse from "./partials/Educourse";
import Services from "./partials/Services";
import Teachers from "./partials/Teachers";
import Gallery from "./partials/Gallery";
import RecentNews from "./partials/RecentNews";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroMobile />
      <Success />
      <Educourse />
      <Services />
      <Teachers />
      <Gallery />
      <RecentNews />
    </>
  );
};

export default Home;
