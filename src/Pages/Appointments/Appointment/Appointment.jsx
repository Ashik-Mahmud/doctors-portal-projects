import React from "react";

const Appointment = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-md border border-gray-50 text-center">
        <div className="card-body">
          <h2 className="text-xl font-semibold text-secondary text-center">
            Teeth Orthodontics
          </h2>
          <span>8:00 AM - 9:00 AM</span>
          <span>10 SPACES AVAILABLE</span>
          <div className="card-actions justify-center">
            <label
              htmlFor="my-modal-3"
              className="btn modal-button mt-2 bg-gradient-to-r from-primary to-secondary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
