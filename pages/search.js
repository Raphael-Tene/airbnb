import { useRouter } from "next/router";
import React from "react";
import FilterTag from "../components/FilterTag";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";

export default function Search() {
  const router = useRouter();

  const { endDate, startDate, location, noOfGuests } = router.query;

  // @ts-ignore
  const formatedStartDate = format(new Date(startDate), "dd-MM-yyyy");
  // @ts-ignore
  const formatedEndDate = format(new Date(endDate), "dd-MM-yyyy");
  const range = `${formatedStartDate}-${formatedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className='flex'>
        <section className='flex-grow px-6 pt-14'>
          <p className='text-xs'>
            300+ ({range}) Stays for {noOfGuests} guests.
          </p>
          <h1 className='mt-s mb-6 text-3xl font-semibold'>
            Stays in {location}
          </h1>
          <div className='mb-5  hidden space-x-2 whitespace-nowrap text-gray-800 lg:inline-flex'>
            <FilterTag>Cancellation Flexibility </FilterTag>
            <FilterTag>Type of Place </FilterTag>
            <FilterTag>Price </FilterTag>
            <FilterTag>Rooms and Beds </FilterTag>
            <FilterTag>More Filters </FilterTag>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
