import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
import useUserAppointments from "../../Hooks/useUserAppointments";
const MyBookings = () => {
  const { loading, userAppointments, setUserAppointments } =
    useUserAppointments();

  const navigate = useNavigate();
  /* handle delete appointments */
  const handleDeleteAppointment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Canceled!", "Your file has been canceled.", "success");
        fetch(
          `https://doctors-para-server.herokuapp.com/booking?uid=${auth?.currentUser?.uid}&&id=${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const restItems = userAppointments.filter(
              (appointment) => appointment._id !== id
            );
            setUserAppointments(restItems);
          });
      }
    });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto shadow p-10 rounded my-5">
        <div className="title flex justify-between py-5 mb-5">
          <div>
            <h2 className="text-2xl font-semibold">
              {auth?.currentUser?.displayName} Appointments
            </h2>
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
            userAppointments?.length > 0 ? (
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Treatment</th>
                    <th>Phone</th>
                    <th>Appointed Date</th>
                    <th>Slot</th>
                    <th>Pay</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userAppointments.map((appointment, ind) => (
                    <tr key={appointment._id}>
                      <th>{ind + 1}</th>
                      <td>{appointment?.author?.name}</td>
                      <td>{appointment?.treatment}</td>
                      <td>{appointment?.phone}</td>
                      <td>{appointment?.date}</td>
                      <td>{appointment?.time}</td>
                      <td>
                        <button
                          onClick={() =>
                            navigate(`/checkout/${appointment?._id}`)
                          }
                          className="btn btn-primary btn-sm"
                        >
                          Pay {appointment?.price}$
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            handleDeleteAppointment(appointment?._id)
                          }
                          className="btn bg-red-500 text-white btn-sm"
                        >
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
