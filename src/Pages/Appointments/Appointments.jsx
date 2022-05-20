import { format } from "date-fns";
import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import bgImage from "../../Assets/images/bg.png";
import heroImage from "../../Assets/images/chair.png";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
import Appointment from "./Appointment/Appointment";
const Appointments = () => {
  const [isReload, setIsReload] = useState(false);
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
      price: service.price,
      treatment: service.name,
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
        if (data.success) {
          toast.success(data.message);
          /* navigate(`/my-appointments`); */
        } else {
          toast.error(
            `Appointment already set on ${data.result?.date} of slot ${data.result?.time}`
          );
        }
        setService(null);
        event.target.reset();
        refetch();
      });
  };

  /* Handle Verify Email */
  const handleVerifyEmail = async () => [
    await sendEmailVerification(auth?.currentUser)
      .then(() => {
        toast.success(
          `We sent you email with Verification link on you ${auth?.currentUser?.email}`
        );
        setIsReload(true);
      })
      .catch((err) => toast.error(err.message.split(":")[1])),
  ];

  /* available treatments  */
  const {
    isLoading: loading,
    data: treatments,
    refetch,
  } = useQuery(["available", format(selected, "PP")], () =>
    fetch(
      `https://doctors-para-server.herokuapp.com/available?date=${format(
        selected,
        "PP"
      )}`
    ).then((res) => res.json())
  );

  return (
    <>
      <section
        id="appointments"
        className="pt-56 pb-32 bg-contain "
        style={{
          background: ` url(${bgImage})`,
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
                      required
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
              <strong>{selected?.toDateString()}</strong>
            </p>
          </div>
          {!loading ? (
            <div className="my-10 px-10 lg:px-0 appointment-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
              {treatments?.map((treatment) => (
                <Appointment
                  setService={setService}
                  key={treatment._id}
                  treatment={treatment}
                />
              ))}
            </div>
          ) : (
            <Loader />
          )}
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
              {auth?.currentUser?.providerData[0].providerId &&
              !auth?.currentUser?.emailVerified ? (
                <>
                  <div className="text-center py-3">
                    <h2 className="text-2xl font-semibold">
                      Verify your email.
                    </h2>
                    <small>To Book Appointment You should verify first.</small>
                    {isReload ? (
                      <button
                        onClick={() => window.location.reload()}
                        className="btn btn-red-400 text-white my-1"
                      >
                        Reload
                      </button>
                    ) : (
                      <button
                        onClick={handleVerifyEmail}
                        className="btn btn-secondary text-white my-1"
                      >
                        Send Verify Email
                      </button>
                    )}
                  </div>
                </>
              ) : (
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

                  <select
                    name="slot"
                    className="select select-bordered w-full "
                  >
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
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Appointments;
