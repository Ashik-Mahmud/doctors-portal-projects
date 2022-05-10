import React from "react";
import Service2 from "../../../Assets/images/cavity.png";
import Service1 from "../../../Assets/images/fluoride.png";
import Service3 from "../../../Assets/images/whitening.png";
import Service from "./Service/Service";

const servicesData = [
  {
    _id: 1,
    name: "Fluoride Treatment",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    image: Service1,
  },
  {
    _id: 2,
    name: "Cavity Filling",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    image: Service2,
  },
  {
    _id: 3,
    name: "Teeth Whitening",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    image: Service3,
  },
];
const Services = () => {
  return (
    <section>
      <div className="services container mx-auto py-10">
        <div className="title text-center py-6">
          <h3 className="text-lg font-bold uppercase text-secondary">
            OUR SERVICES
          </h3>
          <h2 className="text-4xl">Services We Provide</h2>
        </div>
        <div className="services-container py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {servicesData.map((service) => (
            <Service key={service._id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
