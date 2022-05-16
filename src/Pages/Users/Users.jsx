import React from "react";

const Users = () => {
  return (
    <section className="users py-32">
      <div className="container mx-auto shadow p-5">
        <div className="title my-4">
          <h3 className="text-2xl font-semibold">Get All the Users</h3>
          <p>You will get the all the user from here</p>
        </div>
        <div class="overflow-x-auto">
          <table class="table w-full">
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>ashik@gamil.com </td>
                <td>
                  <button className="btn btn-secondary btn-xs">
                    Make admin
                  </button>
                </td>
                <td>
                  <button className="btn bg-red-500 text-white btn-xs">
                    Remove from DB
                  </button>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Cy Ganderton</td>
                <td>ashik@gamil.com </td>
                <td>
                  <button className="btn btn-secondary btn-xs">
                    Make admin
                  </button>
                </td>
                <td>
                  <button className="btn bg-red-500 text-white btn-xs">
                    Remove from DB
                  </button>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Cy Ganderton</td>
                <td>ashik@gamil.com </td>
                <td>
                  <button className="btn btn-secondary btn-xs">
                    Make admin
                  </button>
                </td>
                <td>
                  <button className="btn bg-red-500 text-white btn-xs">
                    Remove from DB
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

export default Users;
