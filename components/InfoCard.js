import Image from "next/image";
import React from "react";
import { HiHeart } from "react-icons/hi";
import { HiStar } from "react-icons/hi";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  total,
  price,
}) {
  return (
    <div className='flex transform  cursor-pointer border-b  py-7 px-2 pr-4 transition duration-150 ease-out first:border-t hover:opacity-80 hover:shadow-lg'>
      <div className='relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80'>
        <Image src={img} fill alt={title} className='rounded-xl object-cover' />
      </div>
      <div className='flex flex-grow flex-col pl-5'>
        <div className='flex items-center justify-between'>
          <p>{location}</p>
          <HiHeart size={25} className='cursor-pointer text-red-300' />
        </div>
        <div>
          <h4 className='text-xl'>{title}</h4>
          <div className='w-10 border-b pt-2' />
          <p className='flex-grow pt-2 text-sm text-gray-500'>{description}</p>
          <div className='flex items-center justify-between  pt-5'>
            <p className='flex items-center text-red-400'>
              <HiStar /> {star}
            </p>
            <div>
              <p className='pb-2 text-lg font-semibold lg:text-2xl'>{price}</p>
              <p className='text-right font-extralight'>{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
