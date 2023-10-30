import React from "react";
import Loader from "./loader";

const loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
