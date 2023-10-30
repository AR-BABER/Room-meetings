"use client";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
const loader = () => {
  return (
    <div className="flex items-center justify-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.50"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default loader;
