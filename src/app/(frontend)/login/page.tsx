"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";


export default function LoginPage() {

    const ref = useRef<HTMLFormElement>(null)
    const router = useRouter()

    return (
        <main className="bg-white flex my-[150px] bg-cover bg-center w-full">

            {/* <section className=" flex items-center justify-center">
                <div className="flex items-center justify-center ml-10">
                    <Image src="/ETA.png" alt="Login" layout="fill" objectFit="cover" className="mx-auto opacity-25" />
                </div>
            </section> */}


            <section className="w-full flex items-center justify-center z-10 mx-auto ">
                <form ref={ref}
                    action={async (formData) => {
                        ref.current?.reset()
                        router.push("/")
                    }}
                    className="grid gap-y-10 font-sans max-w-[450px] w-full px-8 justify-center items-center">
                    <h2 className="font-sans font-bold text-4xl text-center">Login </h2>

                    <span className="grid gap-y-2 ">
                        <p className="text-slate-600 font-sans font-semibold mx-2">Email</p>
                        <input type="name" name="fullName" placeholder="Full name" required className=" font-sans font-semibold w-[420px] h-[55px] px-5 text-xl rounded-xl  bg-gray-100  focus:border-none" />
                    </span>

                    <span className="grid gap-y-2 ">
                        <p className="text-slate-600 font-sans font-semibold mx-2">Email</p>
                        <input type="email" name="email" placeholder="Email" required className=" font-sans font-semibold w-[420px] h-[55px] px-5 text-xl rounded-xl  bg-gray-100  focus:border-none" />
                    </span>

                    <span className="grid gap-y-2">
                        <p className="text-slate-600 font-sans font-semibold mx-2">Password</p>
                        <input type="password" name="password" placeholder="Password" required className=" font-sans font-semibold w-[420px] h-[55px] px-5 text-xl rounded-xl  bg-gray-100  focus:border-none" />
                    </span>

                    <button type="submit" className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">Login</button>
                </form>
            </section>

        </main>

    )
}
