"use client"
import React, { useState } from 'react'

export default function AddNewRooms() {
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(!showForm);
    };
    return (
        <>
            <button
                onClick={handleOpenForm}
                className="block ml-auto mt-5 mx-5 mb-8 select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:scale-105 active:scale-100"
                type="button"
                data-ripple-light="true"
            >
                Add New Room
            </button>

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
                                className="block  ml-auto select-none rounded-lg bg-pink-500 py-2.5 px-5 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            >Add</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )

}
