import React from "react";

export default function FilterTag({ children }) {
  return (
    <p className='transform cursor-pointer rounded-full border bg-white px-4 py-4 transition duration-150 ease-out hover:shadow-lg active:scale-90 active:bg-slate-300'>
      {children}
    </p>
  );
}
