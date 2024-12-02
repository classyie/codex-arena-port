import React from "react";
import { cards } from "./Data/homeCards.js";
import Card from "./Card.jsx";
import  '../css/animation.css'
import { initScrollAnimations } from '../js/scrollAnimation';
import { useEffect } from 'react';

function ServicesCards() {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  return (
    <div className="scroll-animate flex flex-wrap items-center justify-center bg-[#F8F9FA] " id="Services">
      {cards.map((data) => (
        <Card card={data} key={data.id} />
      ))}
    </div>
  );
}

export default ServicesCards;
