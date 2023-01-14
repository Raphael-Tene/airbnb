import Image from "next/image";
import React from "react";
import {
  HiOutlineSearch,
  HiGlobeAlt,
  HiUserCircle,
  HiUsers,
  HiOutlineMenu,
} from "react-icons/hi";

export default function Header() {
  return (
    <header className="sticky p-5 md:px-10 top-0 z-50 shadow-md  shadow-gray-200 bg-white grid grid-cols-3 w-full">
      {/* logo */}
      <div className="relative flex  items-center my-auto h-10 cursor-pointer">
        <Image
          className=" object-fill object-left"
          src="https://links.papareact.com/qd3"
          width={100}
          height={300}
          alt="headerLogo"
        />
      </div>
      {/* search */}
      <div className="flex items-center md:shadow-md md:border-2 py-2 rounded-full shadow-gray-200 ">
        <input
          type="text"
          placeholder="Start your search"
          className="outline-none flex-grow bg-transparent placeholder-gray-400 text-sm text-gray-400 pl-5"
        />{" "}
        <HiOutlineSearch
          size={35}
          className="bg-red-300 sm:hidden hidden md:inline-flex md:mx-2 text-white rounded-full cursor-pointer mx-auto p-2"
        />
      </div>
      <div className="flex items-center justify-end space-x-2 text-gray-500">
        <p className="hidden md:inline tracking-wider cursor-pointer">
          Become a host
        </p>
        <HiGlobeAlt size={30} className="cursor-pointer" />
        <div className="flex items-center rounded-full border-2 space-x-2 shadow-md shadow-gray-200 p-4 cursor-pointer">
          <HiOutlineMenu size={30} />
          <HiUserCircle size={30} />
        </div>
      </div>
    </header>
  );
}
