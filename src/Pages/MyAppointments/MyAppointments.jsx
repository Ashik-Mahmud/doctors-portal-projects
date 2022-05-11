import React from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>ashik@gmail.com</td>
                <td>0177845484</td>
                <td>24 Jan, 2022</td>
                <td>10.20 Am to 11.20 AM</td>
                <td>
                  <button className="btn bg-red-500 text-white btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>

              <tr>
                <th>2</th>
                <td>Cy Ganderton</td>
                <td>ashik@gmail.com</td>
                <td>0177845484</td>
                <td>24 Jan, 2022</td>
                <td>10.20 Am to 11.20 AM</td>
                <td>
                  <button className="btn bg-red-500 text-white btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>

              <tr>
                <th>3</th>
                <td>Cy Ganderton</td>
                <td>ashik@gmail.com</td>
                <td>0177845484</td>
                <td>24 Jan, 2022</td>
                <td>10.20 Am to 11.20 AM</td>
                <td>
                  <button className="btn bg-red-500 text-white btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBookings;
