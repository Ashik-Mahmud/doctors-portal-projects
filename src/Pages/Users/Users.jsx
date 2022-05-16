import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Components/Loader/Loader";
import UserRow from "./UserRow";

const Users = () => {
  const { isLoading, data, refetch } = useQuery(
    "users",
    async () =>
      await fetch(`http://localhost:5000/users`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  return (
    <section className="users py-32">
      <div className="container mx-auto shadow p-5">
        <div className="title my-4">
          <h3 className="text-2xl font-semibold">Get All the Users</h3>
          <p>You will get the all the user from here</p>
        </div>
        <div className="overflow-x-auto">
          {!isLoading ? (
            data?.result?.length > 0 ? (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.result.map((user) => (
                    <UserRow key={user._id} {...user} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            ) : (
              "No data found"
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Users;
