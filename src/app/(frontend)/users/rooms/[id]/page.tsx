"use client";
import { Hourglass, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/footer/footer";

const page = ({ params }: { params: { id: string } }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(
    new Date("2023-10-18T15:20:00")
  );

  const handleMoveBack = () => {
    setOpen(false);
    router.push("/");
  };

  const handleAddTime = () => {
    const newTime = new Date(currentTime.getTime() + 15 * 60 * 1000);
    if (newTime.getMinutes() >= 60) {
      newTime.setHours(newTime.getHours() + 1);
    }
    setCurrentTime(newTime);
  };
  // console.log(params.id);
  return (
    <div className="flex flex-col justify-between h-[90vh]  ">
      <div className=" flex flex-col flex-grow px-5  md:px-24 lg:px-32  ">
        <div className="mt-8 mb-10 flex flex-col">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-bold md:font-black text-pink-500">
            Local Reservation
          </h1>
          <div className="text-xl md:text-3xl text-light4 -mb-2  md:mt-3  font-semibold text-pink-500 ">
            2:50 PM -{" "}
            <span>
              {currentTime.toLocaleTimeString(["en-US"], { hour12: true })}
            </span>
            <span className="text-gray-400 font-medium">
              ( {currentTime.getMinutes()} minutes left )
            </span>
          </div>
        </div>
        <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-4 bg-pink-600 rounded-full w-[50%]"></div>
        </div>
        <div className="flex flex-row justify-around mt-3 md:mt-6 sm:mb-2 gap-2 mb-4 sm:gap-8 flex-wrap sm:flex-nowrap ">
          <button
            onClick={() => setOpen(true)}
            className="rounded flex items-center justify-center flex-row py-1.5 sm:px-2 sm:py-2 font-semibold text-pink-500   w-full  border-pink-500 border-2 hover:bg-pink-500 hover:text-white hover:shadow-pink-500/20 shadow-standard  text-md md:text-2xl"
          >
            <span className="flex flex-row items-center justify-center gap-4">
              <Hourglass size={25} />
              End Now
            </span>
          </button>
          <button
            className="rounded flex items-center justify-center flex-row py-1.5 sm:px-2 sm:py-2 font-semibold text-pink-500  w-full  border-pink-500 border-2 hover:bg-pink-500 hover:text-white hover:shadow-pink-500/20 shadow-standard  text-md md:text-2xl"
            onClick={handleAddTime}
          >
            <span className="flex flex-row items-center justify-center gap-4">
              <PlusCircle size={25} />
              Add Time
            </span>
          </button>
        </div>
      </div>
      <div className="  sticky bottom-0 ">
        <Footer RoomNumber={1} Occupancy={6} />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-2 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div className="mt-2">
                          <p className="text-md text-gray-500">
                            Are you sure you want to end that reservation ?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-2 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex px-8 w-full justify-center rounded-md bg-red-600  py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={handleMoveBack}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default page;
