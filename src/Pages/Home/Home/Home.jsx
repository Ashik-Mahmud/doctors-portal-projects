import React from "react";
import treatment from "../../../Assets/images/treatment.png";
import Appointment from "../Appointment/Appointment";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Infos from "../Infos/Infos";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Infos />
      <Services />
      {/* featured  */}
      <div className="hero py-20">
        <div className="hero-content justify-center lg:gap-20 flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:w-2/4">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* end featured  */}
      <Appointment />
      <Testimonial />
      <Contact />
    </section>
  );
};

export default Home;
