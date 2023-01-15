import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta
          name='description'
          content='Learning how to code through practice'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='mx-auto max-w-7xl px-8 sm:px-16'>
        <section className='pt-16'>
          <h2 className='pb-5 text-4xl font-semibold'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={item.img}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='py-8 text-4xl font-semibold'>Live Anywhere</h2>
          <div className='scroll-bar-hide -ml-3 flex items-center space-x-3 overflow-scroll p-3 md:scrollbar-default'>
            {cardsData?.map((item) => (
              <MediumCard img={item.img} title={item.title} key={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          description='Whislists curated by Airbnb'
          buttonText='Get Inspired'
          title='The Greatest Outdoors'
        />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
