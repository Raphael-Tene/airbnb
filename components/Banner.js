import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
      <Image
        src='https://links.papareact.com/0fm'
        alt='bannerPhoto'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute  top-1/2 w-full text-center'>
        <p className='text-sm lg:text-lg text-gray-900 tracking-widest'>
          Not sure where to go? Perfect.
        </p>
        <button className='rounded-full items-center shadow-md bg-white justify-center my-3 py-4 px-10 text-indigo-500 font-bold text-xl hover:shadow-xl active:scale-90 transition duration-150'>{`I'm flexible`}</button>
      </div>
    </div>
  );
}
