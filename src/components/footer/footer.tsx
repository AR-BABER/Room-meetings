"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
interface Roomdetails {
  RoomNumber: number;
  Occupancy: number;
}

const footer: React.FC<Roomdetails> = ({ RoomNumber, Occupancy }) => {
  const isOccupied = "Booked";
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="flex flex-row justify-between ">
      <div className="bg-pink-700 flex flex-col justify-between p-2 md:p-5 md:w-3/3 h-full w-2/3">
        <span className="text-md md:text-xl lg:text-2xl text-center text-white font-black">
          103 - Meeting Room {RoomNumber}
        </span>
        <span className="text-sm md:text-md lg:text-md text-center uppercase font-medium text-gray-200">
          Max Occupancy : {Occupancy}
        </span>
        <span className="text-sm md:text-md lg:text-md text-center text-gray-200 font-normal md:pl-6">
          To book this room visit royalavenue.roomzilla.me
        </span>
      </div>

      <div
        className=" bg-pink-500 w-1/3 md:w-1/5 p-2 md:p-2 flex items-center justify-center"
        onClick={handleOpen}
      >
        <button className="w-full h-auto flex flex-col items-center justify-center cursor-pointer font-bold text-white">
          <span className="text-xl md:text-2xl lg:text-2xl uppercase mb-1">
            <Menu className="font-black" size={50} />
          </span>
          <span className="text-base text-gray-200 md:text-md uppercase lg:text-md tracking-widest">
            Upcoming
          </span>
        </button>
      </div>

      {openMenu && (
        <div className="absolute z-70 bottom-[100%] right-0 p-3  overflow-y-scroll h-100% bg-pink-900 bg-opacity-80 w-full  md:w-1/3   flex-col flex-wrap gap-4   text-lg font-serif h-fullp-2 md:p-2 grid md:h-[600px] h-[400px]">
          <div className="bg-gray-100 w-full  flex  flex-col   flex-grow text-black border-l-8 max-h-20 border-pink-500 rounded-md px-3 py-2  ">
            Avliable
            <span className="   font-sans  font-semibold text-pink-500 ">
              2:50 PM - <span>3:20 PM</span>
            </span>
          </div>
          <div className="bg-red-200 text-gray  flex flex-col    flex-grow text-black border-l-8 max-h-20 border-red-500 rounded-md px-3 py-2 w-full ">
            Booked
            <span className="   font-sans  font-semibold text-red-500 ">
              2:50 PM - <span>3:20 PM</span>
            </span>
          </div>
          <div className="bg-red-200 text-gray  flex flex-col    flex-grow text-black border-l-8 max-h-20 border-red-500 rounded-md px-3 py-2 w-full ">
            Booked
            <span className="   font-sans  font-semibold text-red-500 ">
              2:50 PM - <span>3:20 PM</span>
            </span>
          </div>
          <div className="bg-red-200 text-gray  flex flex-col    flex-grow text-black border-l-8 max-h-20 border-red-500 rounded-md px-3 py-2 w-full ">
            Booked
            <span className="   font-sans  font-semibold text-red-500 ">
              2:50 PM - <span>3:20 PM</span>
            </span>
          </div>
          <div className="bg-red-200 text-gray  flex flex-col    flex-grow text-black border-l-8 max-h-20 border-red-500 rounded-md px-3 py-2 w-full ">
            Booked
            <span className="   font-sans  font-semibold text-red-500 ">
              2:50 PM - <span>3:20 PM</span>
            </span>
          </div>
          <div className="bg-red-200 text-gray  flex flex-col    flex-grow text-black border-l-8 max-h-20 border-red-500 rounded-md px-3 py-2 w-full ">
            Booked
            <span className="   font-sans  font-semibold text-red-500 ">
              2:50 PM - <span>3:20 PM</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default footer;
