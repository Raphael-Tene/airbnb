import Image from "next/image";
import React from "react";

export default function SmallCard({ img, location, distance }) {
  return (
    <div className='m-3 mt-5 flex transform cursor-pointer items-center space-x-3 rounded-xl transition duration-200 ease-out hover:scale-90 hover:bg-gray-100'>
      <div className='relative h-16 w-16'>
        <Image
          src={img}
          width={200}
          height={200}
          alt={location}
          className='rounded-lg'
        />
      </div>

      <div className='text-sm text-gray-500'>
        <h1>{location}</h1>
        <p>{distance}</p>
      </div>
    </div>
  );
}
