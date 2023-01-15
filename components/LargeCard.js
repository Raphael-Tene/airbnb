import Image from "next/image";
import React from "react";

export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative cursor-pointer py-16'>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={img}
          fill
          alt={title}
          className=' rounded-2xl object-cover'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='mb-3 w-64 text-4xl'>{title}</h3>
        <p className=' tracking-widest text-gray-700'>{description}</p>
        <button className=' my-2 rounded-xl border-2 bg-black p-4 text-sm text-white hover:bg-slate-800'>
          {buttonText}
        </button>
      </div>
    </section>
  );
}
