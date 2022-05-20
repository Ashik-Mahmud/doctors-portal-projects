import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
const Loader = ({ loading }) => {
  return (
    <div className="grid place-items-center text-center py-10">
      <PuffLoader color={"#00CFD1"} loading={loading} size={100} />
    </div>
  );
};

export default Loader;
