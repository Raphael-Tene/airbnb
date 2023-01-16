import { useRouter } from "next/router";
import React from "react";
import FilterTag from "../components/FilterTag";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MyMap from "../components/Map";

export default function Search({ searchResults }) {
  const router = useRouter();

  const { endDate, startDate, location, noOfGuests } = router.query;

  // @ts-ignore
  const formatedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  // @ts-ignore
  const formatedEndDate = new Date(endDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const range = `${formatedStartDate} - ${formatedEndDate}`;

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
          <div className='flex flex-col'>
            {searchResults.map((item) => (
              <InfoCard
                img={item.img}
                location={item.location}
                price={item.price}
                star={item.star}
                key={item.title}
                description={item.description}
                title={item.title}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className='hidden xl:inline-flex  xl:min-w-[600px]'>
          <MyMap searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: { searchResults },
  };
}
