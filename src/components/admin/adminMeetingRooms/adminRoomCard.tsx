"use client"

import Link from "next/link";
import React, { useState } from "react";
import { LucideDelete, Trash2 } from "lucide-react"

interface RoomCardProps {
    id: string;
    name: string;
    Occupancy: number;
}

const AdminRoomCard: React.FC<RoomCardProps> = ({ id, name, Occupancy }) => {
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(!showForm);
    };
    return (
        <>
            <div className="relative flex  w-full max-w-[20rem]  flex-col rounded-xl bg-white  border-pink-500 border-2 text-gray-700 shadow-lg transition-transform transform hover:scale-105">
                <div className=" flex px-6 py-4">
                    <span>
                        <div className="mb-3 flex items-center justify-between">
                            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900  antialiased">
                                {name}
                            </h5>
                        </div>
                        <p className="block font-sans text-base font-medium  leading-relaxed text-gray-500  antialiased">
                            Max Occupancy :<span className="text-pink-500"> {Occupancy} </span>
                        </p>
                    </span>
                    <button
                        className=" inline-flex ml-auto justify-start hover:scale-105 active:scale-100 transition-all duration-150 "
                    >
                        <Trash2 />
                    </button>
                </div>

                <div className="p-6 pt-1">
                    <button
                        onClick={handleOpenForm}
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        {showForm ? 'Save Room' : 'Edit Room'}
                    </button>
                </div>
            </div>

            {showForm && (
                <div className="flex items-center justify-center h-screen w-[500px] absolute z-10 transition-all duration-150">
                    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ">
                        <form className="p-6 bg-white rounded-lg shadow-md shadow-gray-500 scale-125">
                            <div className="flex justify-end ">
                                <button
                                    onClick={handleOpenForm}
                                    className="px-[8px] border-[1px] rounded-full pb-[2px] hover:scale-110 active:scale-100 transition-all duration-75 hover:bg-gray-400"
                                >x</button>
                            </div>
                            <span>
                                <label className="block mb-2">
                                    Name:
                                    <input type="text" name="name" className="w-full px-2 py-1 mt-1 border rounded" />
                                </label>
                            </span>
                            <span>
                                <label className="block mb-2">
                                    Status:
                                    <input type="text" name="name" className="w-full px-2 py-1 mt-1 border rounded" />
                                </label>
                            </span>
                            <span>
                                <label className="block mb-2">
                                    Occupancy:
                                    <input type="text" name="name" className="w-full px-2 py-1 mt-1 border rounded" />
                                </label>
                            </span>
                            <button
                                onClick={handleOpenForm}
                                className="block  ml-auto select-none rounded-lg bg-pink-500 py-2 px-5 mt-5 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            >Save</button>
                        </form>
                    </div>
                </div>
            )}

        </>
    );
};

export default AdminRoomCard;
