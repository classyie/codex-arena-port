import React from "react";
import { cards } from "./Data/homeCards.js";
import Card from "./Card.jsx";
function ServicesCards() {
  return (
    <div className=" px-10 flex flex-wrap pb-14  items-center justify-center bg-[#F8F9FA] " id="Services">
      {cards.map((data) => (
        <Card card={data} key={data.id} />
      ))}
    </div>
  );
}

export default ServicesCards;
