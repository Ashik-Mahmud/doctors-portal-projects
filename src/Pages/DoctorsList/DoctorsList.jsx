import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../../Firebase/Firebase.config";
const DoctorsList = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctorList", async () =>
    fetch(`http://localhost:5000/doctors?uid=${auth?.currentUser?.uid}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const handleDeleteDoctor = async (id) => {
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
        fetch(
          `http://localhost:5000/doctors?deleteId=${id}&&uid=${auth?.currentUser?.uid}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          });
      }
    });
  };

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="title">
          <h2 className="text-2xl">DoctorsList</h2>
          <p>can doctor manage here</p>
        </div>
        <div className="overflow-x-auto my-5">
          {!isLoading ? (
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Specialist</th>
                  <th>Image</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {doctors?.result.map((doctor, ind) => (
                  <tr key={doctor._id}>
                    <th>{ind + 1}</th>
                    <td>{doctor?.name}</td>
                    <td>{doctor?.email}</td>
                    <td>{doctor?.specialties}</td>
                    <td>
                      <img
                        className="rounded-full border-"
                        src={doctor?.image}
                        alt=""
                        width={40}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteDoctor(doctor._id)}
                        className="btn btn-sm text-black bg-error rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "No data found."
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorsList;
