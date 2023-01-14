import Image from "next/image";
import React from "react";

export default function MediumCard({ img, title }) {
  return (
    <div className=' transform cursor-pointer transition duration-300 ease-out hover:scale-105'>
      <div className=' relative h-80 w-80 '>
        <Image
          src={img}
          fill
          alt={title}
          className='rounded-xl object-contain object-left'
        />
      </div>
      <h1 className='mt-3 text-xl font-light  tracking-widest'>{title}</h1>
    </div>
  );
}
