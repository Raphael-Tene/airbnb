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
    <header className='sticky top-0 z-50 grid w-full grid-cols-3  bg-white p-5 shadow-md shadow-gray-200 md:px-10'>
      {/* logo */}
      <div className='relative my-auto  flex h-10 cursor-pointer items-center'>
        <Image
          className=' object-fill object-left'
          src='https://links.papareact.com/qd3'
          width={100}
          height={300}
          alt='headerLogo'
        />
      </div>
      {/* search */}
      <div className='flex items-center rounded-full py-2 shadow-gray-200 md:border-2 md:shadow-md '>
        <input
          type='text'
          placeholder='Start your search'
          className='flex-grow bg-transparent pl-5 text-sm text-gray-400 placeholder-gray-400 outline-none'
        />{" "}
        <HiOutlineSearch
          size={35}
          className='mx-auto hidden cursor-pointer rounded-full bg-red-300 p-2 text-white sm:hidden md:mx-2 md:inline-flex'
        />
      </div>
      <div className='flex items-center justify-end space-x-2 text-gray-500'>
        <p className='hidden cursor-pointer tracking-wider md:inline'>
          Become a host
        </p>
        <HiGlobeAlt size={30} className='cursor-pointer' />
        <div className='flex cursor-pointer items-center space-x-2 rounded-full border-2 p-4 shadow-md shadow-gray-200'>
          <HiOutlineMenu size={30} />
          <HiUserCircle size={30} />
        </div>
      </div>
    </header>
  );
}
