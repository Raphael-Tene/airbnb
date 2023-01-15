import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
      <Image
        src='https://links.papareact.com/0fm'
        alt='bannerPhoto'
        fill
        className='object-cover'
      />
      <div className='absolute  top-1/2 w-full text-center'>
        <p className='text-sm tracking-widest text-gray-900 lg:text-lg'>
          Not sure where to go? Perfect.
        </p>
        <button className='my-3 items-center justify-center rounded-full bg-white py-4 px-10 text-xl font-bold text-indigo-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90'>{`I'm flexible`}</button>
      </div>
    </div>
  );
}
