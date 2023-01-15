// @ts-nocheck
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { HiUsers } from "react-icons/hi";
import Link from "next/link";

export default function DatePicker({
  selectionRange,
  minDate,
  rangeColors,
  onChange,
  resetInput,
}) {
  const [noOfGuests, setNoOfGuests] = useState(1);

  return (
    <>
      <div className='w-full'>
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={minDate}
          rangeColors={rangeColors}
          direction='horizontal'
          onChange={onChange}
        />
      </div>

      <div className='mb-4  flex items-center  border-b-2 border-gray-300 text-gray-500'>
        <h2 className='flex-grow  text-2xl font-semibold'>Number of Guests</h2>
        <HiUsers size={30} />
        <input
          min={1}
          value={noOfGuests}
          onChange={(e) => setNoOfGuests(e.target.value)}
          type='number'
          className='ml-1 w-12 pl-2 text-lg text-[#fd5b61] outline-none'
        />
      </div>
      <div className='flex'>
        <button className='flex-grow text-gray-500' onClick={resetInput}>
          Cancel
        </button>

        <button className='text-semibold flex-grow rounded-lg  text-red-400'>
          <Link href='/search'>Search</Link>
        </button>
      </div>
    </>
  );
}
