import React from "react";
import Hero from "../Hero/Hero";
import Infos from "../Infos/Infos";
import Services from "../Services/Services";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Infos />
      <Services />
    </section>
  );
};

export default Home;
