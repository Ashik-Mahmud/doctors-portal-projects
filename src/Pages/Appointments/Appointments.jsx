import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import toast from "react-hot-toast";
import bgImage from "../../Assets/images/bg.png";
import heroImage from "../../Assets/images/chair.png";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
import useTreatments from "../../Hooks/useTreatments";
import Appointment from "./Appointment/Appointment";
const Appointments = () => {
  const { treatments, loading } = useTreatments();
  const [service, setService] = useState({});
  const [selected, setSelected] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  /* handle booking form */
  const handleBookingForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const time = event.target.slot.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    if (!time) return toast.error(`Time field is required.`);
    if (!name) return toast.error(`Name field is required.`);
    if (!phone) return toast.error(`Phone number is required.`);
    if (!email) return toast.error(`Email field is required.`);

    const data = {
      date: format(selected, "PP"),
      name,
      time,
      phone,
      email,
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
      },
    };
    await fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        event.target.reset();
        setService(null);
      });
  };

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
            {loading ? (
              treatments?.map((treatment) => (
                <Appointment
                  setService={setService}
                  key={treatment._id}
                  treatment={treatment}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
      {service && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />{" "}
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{service?.name}</h3>
              <p className="py-4">
                You've been selected htmlFor a chance to get one year of
                subscription to use Wikipedia htmlFor free!
              </p>
              <form
                action=""
                onSubmit={handleBookingForm}
                className="flex flex-col gap-4 mt-5"
              >
                <input
                  type="text"
                  className="input input-bordered w-full bg-slate-200"
                  readOnly
                  value={format(selected, "PP")}
                />

                <select name="slot" className="select select-bordered w-full ">
                  {service?.slots?.map((slot, ind) => (
                    <option key={slot + ind} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full "
                  name="name"
                  defaultValue={auth?.currentUser?.displayName}
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full "
                  defaultValue={auth?.currentUser?.email}
                />
                <button className="btn bg-accent text-white uppercase">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Appointments;
