import React from "react";
import Quote from "../../../Assets/icons/quote.svg";
import people1 from "../../../Assets/images/people1.png";
import people2 from "../../../Assets/images/people2.png";
import people3 from "../../../Assets/images/people3.png";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
const testimonialsData = [
  {
    _id: 1,
    name: "Wilam Henry",
    address: "california",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    avatar: people1,
  },
  {
    _id: 2,
    name: "David Warner",
    address: "california",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    avatar: people2,
  },
  {
    _id: 3,
    name: "Lubber Henry",
    address: "california",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    avatar: people3,
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container mx-auto">
        <div className="title flex justify-between items-center">
          <div>
            <h4 className="text-lg text-primary">Testimonial</h4>
            <h1 className="text-3xl">What Our Patients Says</h1>
          </div>
          <div>
            <img src={Quote} className="w-32" alt="quote" />
          </div>
        </div>
        <div className="testimonial-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {testimonialsData.map((data) => (
            <TestimonialCard key={data._id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
