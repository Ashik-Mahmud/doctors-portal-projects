import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useUserAppointments from "../../Hooks/useUserAppointments";
const MyBookings = () => {
  const { loading, userAppointments } = useUserAppointments();

  return (
    <section className="py-24">
      <div className="container mx-auto shadow p-10 rounded my-5">
        <div className="title flex justify-between py-5 mb-5">
          <div>
            <h2 className="text-2xl font-semibold">My Appointments</h2>
            <p>here you can see your own bookings</p>
          </div>
          <Link
            to="/appointments"
            className="btn bg-gradient-to-r from-primary to-secondary text-white"
          >
            Take Appointments
          </Link>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            userAppointments.length > 0 ? (
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Appointed Date</th>
                    <th>Slot</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userAppointments.map((appointment, ind) => (
                    <tr key={appointment._id}>
                      <th>{ind + 1}</th>
                      <td>{appointment?.author?.name}</td>
                      <td>{appointment?.email}</td>
                      <td>{appointment?.phone}</td>
                      <td>{appointment?.date}</td>
                      <td>{appointment?.time}</td>
                      <td>
                        <button className="btn bg-red-500 text-white btn-sm">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              "No Booking Created yet."
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBookings;
