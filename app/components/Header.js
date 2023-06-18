"use client"

import Image from "next/image";
import logo from "../../public/images/shopping.png";
import profile from "../../public/images/profile.png";
import { RiShoppingCartFill,RiSearch2Line } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

const Header = () => {

  const router = useRouter();

  const [searchBox,setSearchBox]=useState("");

  const searching = (e)=>{
    e.preventDefault()
    if(searchBox !== ''){
      router.push(`/category/${searchBox}`);
    }
  }

  // we are getting the user by this state
  const [user,loading]=useAuthState(auth);

  return (
    <div className="w-full px-5 py-2 shadow-sm z-50 sticky top-0 bg-white">
      <div className="flex justify-between space-x-5 items-center">
        <div>
          <Link href={"/"}>
            <button>
              <Image
                src={logo}
                alt="logo image"
                priority={true}
                className="relative top-2 w-10 h-10"
              />
            </button>
          </Link>
        </div>
        <div className="w-full md:block hidden">
          <form className="flex" onSubmit={searching}>
            <input
              onChange={(e)=>{setSearchBox(e.target.value)}}              
              value={searchBox}
              type="text"
              className="w-full border-2  rounded-l-lg px-4 outline-none focus:border-[#ff9900]"
              placeholder="Search Here"
              />
            <button className="text-lg bg-[#ff9900] px-2 rounded-r-lg">
              <RiSearch2Line />
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={"/cart"}>
            <button className="text-md bg-[#ff9900] p-1 rounded-md relative">
              <RiShoppingCartFill />
              <span className="absolute text-xs bg-gray-700 text-white px-1 rounded-full -top-2 -right-3">
                24
              </span>
            </button>
          </Link>
          <button className="">
            <Image
              src={user?.photoURL || profile}
              alt="profile image"
              className="w-10 h-10 ml-2 rounded-full"
              height={100}
              width={100}
            />
          </button>
        </div>
      </div>
      <div className="w-full md:hidden mt-5">
          <form className="flex">
            <input
              type="text"
              className="w-full border-2  rounded-l-lg px-4 outline-none focus:border-[#ff9900]"
              placeholder="Search Here"
              />
            <button className="text-lg bg-[#ff9900] px-2 rounded-r-lg">
              <RiSearch2Line />
            </button>
          </form>
        </div>
    </div>
  );
};

export default Header;