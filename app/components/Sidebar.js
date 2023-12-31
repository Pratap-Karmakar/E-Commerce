"use client"


import Link from "next/link";
import React from "react";
import { MdWindow } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import {BiLogOut} from 'react-icons/bi'
import { v4 } from "uuid";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'


const Sidebar = () => {

  // for firebase authentication

  // Login function
  const Login = async()=>{
    await signInWithPopup(auth,provider);
  }

  // Logout function
  const Logout = async()=>{
    await signOut(auth);
  }

  // we are getting the user byt his state
  const [user,loading]=useAuthState(auth);

  let categories = [
    "Electronics",
    "Garden",
    "Fashion",
    "Beauty",
    "Automotive",
    "Books",
    "Games",
    "Watch",
  ];
  return (
    <div className="w-[350px] h-[80vh] bg-white border shadow-sm rounded-xl py-5 relative lg:block hidden -ml-5">
      <div className="flex items-center space-x-5">
        <div className="w-1 h-10  bg-[#ff9900]"></div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">
            <MdWindow />
          </span>
          <span className="uppercase text-xl tracking-widest font-light">
            Categories
          </span>
        </div>
      </div>
      <div className="pl-[53px] py-4">
        {categories.map((category) => (
          <Link href={`/category/${category.toLocaleLowerCase()}`} key={v4}>
            <button className="text-md hover:text-[#ff9900] block py-1 text-gray-600 hover:scale-105 transition duration-200">
              {category}
            </button>
          </Link>
        ))}
      </div>
      <div className="px-7 py-2">
        <Link href="/">
          <button className="flex items-center text-sm space-x-2 hover:bg-[#ff9900]/60 pl-2 transform ease-out duration-300 rounded-md w-full py-1 hover:scale-105">
            <span className="text-xl">
              <RiBillFill />
            </span>
            <span className="uppercase">Orders</span>
          </button>
        </Link>
      </div>
      <div className="px-5 bottom-2 absolute w-full mx-auto">
        {
          user ? <button className="flex uppercase items-center w-full space-x-2 text-sm justify-center border py-1  rounded-md bg-gray-900 transform hover:scale-105 duration-300 ease-out text-white px-2"
          onClick={Logout}
          >
            <BiLogOut/>
            <span>Logout</span>
          </button>
          : <button className="flex uppercase items-center w-full space-x-2 text-sm justify-center border py-1  rounded-md bg-gray-900 transform hover:scale-105 duration-300 ease-out text-white px-2"
          onClick={Login}
          >
            <FaGoogle/>
            <span>Login with google</span>
          </button>
        }
      </div>
    </div>
  );
};

export default Sidebar;
