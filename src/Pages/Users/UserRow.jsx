import React from "react";
import toast from "react-hot-toast";
import auth from "../../Firebase/Firebase.config";
const UserRow = ({ email, uid, role, refetch }) => {
  /*  make an admin */
  const makeAnAdmin = async () => {
    await fetch(
      `https://doctors-para-server.herokuapp.com/users/admin?email=${email}&&uid=${auth?.currentUser?.uid}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ role: "admin" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          return toast.error(data.message);
        }

        toast.success(`Made an admin successfully done.`);
        refetch();
      });
  };
  return (
    <tr>
      <th>{1}</th>
      <td>{uid}</td>
      <td>{email} </td>
      <td>
        {role === "admin" ? (
          <div className="badge badge-primary">Admin</div>
        ) : (
          <button onClick={makeAnAdmin} className="btn btn-secondary btn-xs">
            Make admin
          </button>
        )}
      </td>
      <td>
        <button className="btn bg-red-500 text-white btn-xs">
          Remove from DB
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
