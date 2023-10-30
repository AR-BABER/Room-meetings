import Link from "next/link";
import React from "react";

interface RoomCardProps {
  id: string;
  name: string;
  status: string;
  Occupancy: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ id, name, status, Occupancy }) => {
  const isOccupied = status === "occupied";

  return (
    <div className="relative flex w-full max-w-[20rem]  flex-col rounded-xl bg-white  border-pink-500 border-2 text-gray-700 shadow-lg transition-transform transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900  antialiased">
            {name}
          </h5>
        </div>
        <p className="block font-sans text-base font-medium  leading-relaxed text-gray-500  antialiased">
          Max Occupancy :<span className="text-pink-500"> {Occupancy} </span>
        </p>

        <p className="block font-sans text-base font-medium leading-relaxed text-gray-500  antialiased">
          Status :
          <span className="text-pink-500">
            {isOccupied ? " Occupied" : " Available"}
          </span>
        </p>
      </div>
      <div className="p-6 pt-1">
        {isOccupied ? (
          <button
            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            disabled
          >
            Use Now
          </button>
        ) : (
          <Link href={`/users/rooms/${id}`}>
            <div>
              <button
                className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Use Now
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
