import React from "react";
import { cards } from "./Data/homeCards.js";
import Card from "./Card.jsx";
function ServicesCards() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-[#F8F9FA] ">
      {cards.map((data) => (
        <Card card={data} key={data.id} />
      ))}
    </div>
  );
}

export default ServicesCards;
