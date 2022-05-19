import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../Firebase/Firebase.config";
const AddDoctor = () => {
  const upload_api_key = `e30b0e0fb6ea0d2a6ec59a91cf20ebbd`;
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  /* Handle Doctor Form submit */
  const onSubmit = async (data) => {
    /* processing image */
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);

    /* call api */
    const url = `https://api.imgbb.com/1/upload?key=${upload_api_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imageURL = result?.data?.url;
          const sendingData = {
            name: data.name,
            email: data.email,
            specialties: data.specialties,
            image: imageURL,
          };

          /* call api for sending doctors data */
          fetch(`http://localhost:5000/doctors?uid=${auth?.currentUser?.uid}`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(sendingData),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.success) {
                toast.success(`Doctors Added successfully done.`);
                reset();
              }
            });
        }
      });
  };

  /* Fetch Services from DATABASE */
  const { data: services, isLoading } = useQuery("getTreatments", () =>
    fetch(`http://localhost:5000/treatments/services`).then((res) => res.json())
  );

  return (
    <div className="py-32">
      <div className="container mx-auto shadow-md p-5 lg:p-10">
        <div className="title mb-5">
          <h2 className="text-2xl my-1">Add Doctors</h2>
          <p>You can add doctor if your admin.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-5"
        >
          <input
            className="input input-bordered w-full"
            placeholder="Doctor Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-400">Name field is required</span>
          )}

          <input
            className="input input-bordered w-full"
            placeholder="Doctor Email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-400">Email field is required</span>
          )}
          <div className="input-group flex-col gap-1">
            <label htmlFor="specialAt">Special at</label>
            <select
              className="select select-bordered w-full"
              {...register("specialties", { required: true })}
            >
              <option value="">Select Option</option>
              {!isLoading
                ? services.map((service) => (
                    <option value={service.name} key={service._id}>
                      {service.name}
                    </option>
                  ))
                : "Loading..."}
            </select>
          </div>
          {errors.specialties && (
            <span className="text-red-400">Specialties field is required</span>
          )}

          <input
            placeholder="Doctor Email"
            type="file"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-400">Avatar field is required</span>
          )}

          <input type="submit" value="Add Doctor" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
