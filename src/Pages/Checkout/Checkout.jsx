import React from "react";
import { useParams } from "react-router-dom";
import useUserAppointments from "../../Hooks/useUserAppointments";

const Checkout = () => {
  const { checkOutId } = useParams();
  const { userAppointments, loading } = useUserAppointments();
  const findOneAppointment = userAppointments.find(
    (appointment) => appointment._id === checkOutId
  );

  return (
    <div className="py-24">
      <div className="container mx-auto">
        <div className="px-4 md:px-52 my-10">
          <div className="card w-full bg-base-100 shadow-xl p-6">
            {loading ? (
              <div className="card-body">
                <h2 className="card-title">{findOneAppointment?.treatment}</h2>
                <p>Dear {findOneAppointment?.name}, </p>
                <p>
                  We know you already appointed of{" "}
                  <strong>{findOneAppointment?.treatment}</strong> On date{" "}
                  <strong> {findOneAppointment?.date}</strong> and right slot of{" "}
                  <strong> {findOneAppointment?.time}</strong> Make sure of your
                  appointment You should pay{" "}
                  <strong>{findOneAppointment?.price}$</strong> from your card.
                </p>
                <p>
                  If we need any information we will direct call you of your
                  number <strong>{findOneAppointment?.phone}</strong>
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">
                    Pay {findOneAppointment?.price} $
                  </button>
                </div>
              </div>
            ) : (
              "Loading...."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
