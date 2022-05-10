import React from "react";
import bgImage from "../../Assets/images/bg.png";
import heroImage from "../../Assets/images/chair.png";
import Appointment from "./Appointment/Appointment";
const Appointments = () => {
  return (
    <>
      <section
        id="appointments"
        className="pt-56 pb-32 bg-contain "
        style={{
          background: `linear-gradient(to top, rgba(255, 255, 255, 0.777), rgba(255, 255, 255, 0.1)), url(${bgImage})`,
        }}
      >
        <div classNameName="container mx-auto">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={heroImage}
                className="lg:max-w-lg rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="appointments" className="py-10">
        <div className="container mx-auto">
          <div className="title text-center">
            <p className="text-secondary text-lg mb-24">
              Available Appointments on April 30, 2022
            </p>
          </div>
          <div className="my-10 appointment-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
          </div>
        </div>
      </section>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />{" "}
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Cavity Protection</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <form action="" className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              class="input input-bordered w-full bg-slate-200"
              readOnly
              defaultValue={"April 30, 2020"}
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-slate-200"
              readOnly
              defaultValue={"10:05 am - 11:30 am"}
            />
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered w-full "
            />
            <button className="btn bg-accent text-white uppercase">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appointments;
