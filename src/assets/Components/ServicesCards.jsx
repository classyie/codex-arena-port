import React from "react";
import { cards } from "./Data/homeCards.js";
import Card from "./Card.jsx";

function ServicesCards() {
  return (
    <>
      <h1
        className="flex items-center justify-center h-12 mt-10 text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl"
        style={{ fontFamily: "Parkinsans, sans-serif" }}
      >
        Our Services
      </h1>

      {/* Main Card Container */}
      <div
        className="flex flex-wrap justify-center items-center gap-8 px-10 xxs:px-5 bg-[#F8F9FA] pb-14"
        id="Services"
      >
        {cards.map((data) => (
          <Card card={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default ServicesCards;
