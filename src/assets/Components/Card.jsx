import React from "react";
import { SlPencil } from "react-icons/sl";
import { motion } from "framer-motion";

function Card({ card }) {
  return (
    <motion.div
      className="h-[120vh] w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[24vw] rounded-md p-3 bg-[#ffffff] border border-[#2532C0] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-2 sm:mx-4 mt-14 relative overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Card Title */}
      <motion.div
className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[18vw] mx-auto py-2 px-4 rounded-md text-black flex justify-center text-3xl sm:text-2xl font-extrabold truncate"




whileHover={{ scale: 1.1 }}
        key={card.id}
      >
        {card.title}
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full h-auto p-3 mt-3 flex-grow flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          className="max-w-[80%] max-h-[30vh] object-contain rounded-md"
          src={card.img}
          alt=""
        />
      </motion.div>

      {/* Price Section */}
      <div className="price grid justify-center p-2">
        <h1 className="text-3xl font-bold leading-none text-[#161ab2]">
          ₹ {card.price}
        </h1>
      </div>

      {/* Features Section */}
      <div className="grid justify-center mt-4 font-semibold text-lg">
        Features Includes
      </div>

      <div className="mt-2">
        <ul className="custom-list list-none text-black-700 text-sm p-4 space-y-3 font-sans">
          {card.features.map((data) => (
            <li
              className="custom-list flex items-center truncate overflow-hidden text-ellipsis"
              key={data}
            >
              <SlPencil className="mr-2 text-blue-500" /> {data}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <motion.div
        className="absolute bottom-6 w-full flex justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <button className="px-4 rounded-md py-2 font-semibold text-sm bg-[#FFB649] hover:bg-[#FF9930] transition-colors">
          KNOW MORE
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Card;
