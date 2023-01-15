import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  HiOutlineSearch,
  HiGlobeAlt,
  HiUserCircle,
  HiOutlineMenu,
} from "react-icons/hi";
import DatePicker from "./DatePicker";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelection(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function resetInputHandler() {
    setSearchInput("");
  }

  const homeNavigator = () => {
    router.push("/");
  };

  return (
    <header className='sticky top-0 z-50 grid w-full grid-cols-3  bg-white p-5 shadow-md shadow-gray-200 md:px-10'>
      {/* logo */}
      <div className='relative my-auto  flex h-10 cursor-pointer items-center'>
        <Image
          onClick={homeNavigator}
          className=' w-10 object-contain object-left'
          src='https://links.papareact.com/qd3'
          fill
          alt='headerLogo'
        />
      </div>
      {/* search */}
      <div className='flex items-center rounded-full py-2 shadow-gray-200 md:border-2 md:shadow-md '>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder={placeholder || "Start your search"}
          className='flex-grow bg-transparent pl-5 text-[10px] text-gray-400  placeholder-gray-400  caret-red-300 outline-none md:text-sm'
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
      <div className='col-span-1 mx-auto flex flex-col md:col-span-3'>
        {searchInput && (
          <DatePicker
            endDate={endDate}
            startDate={startDate}
            searchInput={searchInput}
            resetInput={resetInputHandler}
            selectionRange={selectionRange}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelection}
          />
        )}
      </div>
    </header>
  );
}
