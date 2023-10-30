"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

const navbar = () => {

  const id = 1
  const router = useRouter();
  const handleReload = () => {
    window.location.reload();
  };
  const NoSsrLocalTime = dynamic(() => import("./local-time"), {
    ssr: false,
  });

  return (
    <div className="h-auto py-2 w-full">
      <div className="px-side w-full h-full bg-light flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="w-28 md:flex md:flex-row hidden justify-around  text-white  flex-wrap sm:flex-nowrap">
          <span
            className="border-2 border-white rounded-full p-1 cursor-pointer  "
            onClick={() => router.back()}
          >
            <ArrowLeft />
          </span>
          <span
            className="border-2 border-white rounded-full p-1 cursor-pointer  "
            onClick={handleReload}
          >
            <RefreshCw />
          </span>
        </div>
        <div className=" flex md:gap-x-5  gap-x-[70px] items-center justify-between  cursor-pointer font-semibold text-white">
          <NoSsrLocalTime />
          <Link href={`/users/profile/${id}`} className="text-right  flex text-white h-10 items-center px-5 mr-auto">
            Username
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;

