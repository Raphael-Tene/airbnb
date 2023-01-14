import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Learning how to code through practice"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* header goes here */}
      {/* banner goes here */}
    </>
  );
}
