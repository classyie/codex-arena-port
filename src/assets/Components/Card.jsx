import React from "react";
import { SlPencil } from "react-icons/sl";

function Card({ card }) {
  return (
    <div className="h-[100vh] w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[24vw] rounded-md p-3 bg-[#ffffff] border border-[#2532C0] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mx-2 sm:mx-4 mt-14 relative">
      <div
        className="w-[50%] sm:w-[40%] md:w-[40%] lg:w-[10vw] mx-auto py-1 bg-orange-500 rounded-md text-white flex justify-center text-lg font-semibold"
        key={card.id}
      >
        {card.title}
      </div>
      <div className="w-full p-3 mt-3 flex-grow flex items-center justify-center " >
        <img
          className="max-w-[80%] max-h-[30vh] object-contain rounded-md "
          src={card.img}
          alt=""
        />
      </div>

      <div className="price grid justify-center p-2">
        {/* <h1 className="text-2xl ml-1 font-semibold line-through leading-none">
          ₹ {card.price}
        </h1> */}
        <h1 className="text-3xl font-bold leading-none text-[#161ab2]">
          ₹ {card.price}
        </h1>
      </div>

      {/* <div className="text-sm font-semibold text-gray-800 mt-3 grid justify-center">
        (+ 18% GST ₹ 1440)
      </div> */}

      <div className="grid justify-center mt-4 font-semibold text-lg">
        Features Includes
      </div>

      <div className="mt-2">
        <ul className="custom-list list-none text-black-700 text-sm p-4 space-y-3 font-sans">
          {card.features.map((data) => (
            <li className="custom-list flex items-center" key={data}>
              <SlPencil className="mr-2 text-blue-500" /> {data}
            </li>
          ))}
        </ul>
      </div>

      {/* Floating KNOW MORE button */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <button className="px-4 rounded-md py-2 font-semibold text-sm bg-[#FFB649]">
          KNOW MORE
        </button>
      </div>
    </div>
  );
}

export default Card;
