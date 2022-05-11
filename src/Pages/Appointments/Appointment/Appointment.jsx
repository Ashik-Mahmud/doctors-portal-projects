import React from "react";

const Appointment = ({ treatment, setService }) => {
  const { name, slots } = treatment;
  return (
    <>
      <div className="card bg-base-100 shadow-md border border-gray-50 text-center">
        <div className="card-body ">
          <h2 className="text-xl font-semibold text-secondary text-center">
            {name}
          </h2>
          {slots?.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500 font-semibold font-poppins">
              Try Next Date
            </span>
          )}

          <span>{slots?.length} SPACES AVAILABLE</span>

          <div className="card-actions justify-center">
            <label
              onClick={() => setService(treatment)}
              htmlFor="my-modal-3"
              className={`btn modal-button mt-2 bg-gradient-to-r from-primary to-secondary text-white ${
                slots?.length === 0 && "pointer-events-none opacity-50"
              }`}
            >
              {slots?.length === 0 ? "Not Available" : "Book Appointment"}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
