import React from "react";

export default function Footer() {
  return (
    <div className='grid grid-cols-1 space-y-10  bg-gray-100 py-14 px-32 text-xs text-gray-600 md:grid-cols-4 md:space-y-0'>
      <div className='space-y-4 '>
        <h5 className='font-bold tracking-widest'>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4'>
        <h5 className='font-bold tracking-widest'>Community</h5>
        <p>Accessibility</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
      <div className='space-y-4'>
        <h5 className='font-bold tracking-widest'>Host</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
      <div className='space-y-4'>
        <h5 className='font-bold tracking-widest'>Support</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
    </div>
  );
}
