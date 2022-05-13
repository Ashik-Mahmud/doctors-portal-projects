import React from "react";
import bgAppointment from "../../../Assets/images/appointment.png";
import doctorImage from "../../../Assets/images/doctor-small.png";
const Appointment = () => {
  return (
    <div
      className="hero my-16 py-10"
      style={{ background: `url(${bgAppointment})` }}
    >
      <div className="hero-content justify-around flex-col lg:flex-row">
        <div className="lg:w-3/6 hidden md:visible relative">
          <img
            src={doctorImage}
            className="lg:max-w-xl mt-[-10rem] mb-[-3.5rem]"
            alt="doctor sir"
          />
        </div>
        <div className="lg:w-3/6 text-base-100">
          <h3 className="text-lg text-secondary">Appointment</h3>
          <h1 className="text-3xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn text-white bg-gradient-to-r from-primary to-secondary border-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
