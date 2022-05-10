import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bgImage from "../../Assets/images/bg.png";
import heroImage from "../../Assets/images/chair.png";
import Appointment from "./Appointment/Appointment";
const Appointments = () => {
  const [selected, setSelected] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <>
      <section
        id="appointments"
        className="pt-56 pb-32 bg-contain "
        style={{
          background: `linear-gradient(to top, rgba(255, 255, 255, 0.777), rgba(255, 255, 255, 0.1)), url(${bgImage})`,
        }}
      >
        <div className="container mx-auto">
          <div className="hero ">
            <div className="hero-content w-full flex-col  lg:flex-row-reverse justify-around">
              <img
                src={heroImage}
                className="lg:max-w-lg rounded-lg shadow-2xl"
                alt=""
              />

              <div className="lg:w-2/5">
                <div className="card w-96  bg-base-100 shadow-xl">
                  <div className="card-body">
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      footer={footer}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="appointments" className="py-10">
        <div className="container mx-auto">
          <div className="title text-center">
            <p className="text-secondary text-lg mb-24">
              Available Appointments on{" "}
              <strong>{selected.toDateString()}</strong>
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
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />{" "}
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Cavity Protection</h3>
          <p className="py-4">
            You've been selected htmlFor a chance to get one year of
            subscription to use Wikipedia htmlFor free!
          </p>
          <form action="" className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              className="input input-bordered w-full bg-slate-200"
              readOnly
              defaultValue={"April 30, 2020"}
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-slate-200"
              readOnly
              defaultValue={"10:05 am - 11:30 am"}
            />
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full "
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
