import React from "react";
import { SlPencil } from "react-icons/sl";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navigate = useNavigate();

  // Handle Card Click
  const handleCardClick = () => {
    if (card.title === "Frontend Design") {
      navigate("/frontend");
    } else if (card.title === "Backend Design") {
      navigate("/backend");
    } else if (card.title === "Full Stack Design") {
      navigate("/fullstack");
    } else if (card.title === "Digital Marketing") {
      navigate("/digital");
    }
  };

  return (
    <motion.div
      className="h-[139vh] w-full xs:px-10 md:w-[60%] lg:w-[40%] xl:w-[24vw] rounded-md p-3 bg-[#ffffff] border border-[#2532C0] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-2 sm:mx-4 mt-14 relative overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleCardClick}
    >
      {/* Card Title */}
      <motion.div
        className="w-[83%] xs:w-[90%] sm:w-[40%] md:w-[100%] lg:w-[20vw] mx-auto py-2 px-4 rounded-md text-black flex justify-center text-3xl sm:text-2xl md:text-3xl font-extrabold break-words whitespace-normal"
        whileHover={{ scale: 1.1 }}
        key={card.id}
      >
        {card.title}
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex items-center justify-center flex-grow w-full h-auto p-3 mt-3"
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
      <div className="grid justify-center p-2 price">
        <h1 className="text-3xl font-bold leading-none text-[#161ab2]">
          ₹ {card.price}
        </h1>
      </div>

      {/* Features Section */}
      <div className="grid justify-center mt-4 text-lg font-semibold">
        Features Includes
      </div>

      <div className="mt-2">
        <ul className="p-4 space-y-3 font-sans text-sm list-none custom-list text-black-700">
          {card.features.map((data) => (
            <li
              className="flex items-center whitespace-normal text-ellipsis"
              key={data}
            >
              <SlPencil className="mr-1 text-blue-500" /> {data}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <motion.div
        className="absolute flex justify-center w-full bottom-6 md:pr-20 lg:pr-20"
        whileHover={{ scale: 1.1 }}
      >
        <button className="px-4 py-2 text-sm font-semibold text-white transition-colors bg-indigo-500 rounded-md xs:mr-20 md:ml-20 hover:bg-indigo-700">
          <a >KNOW MORE</a>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Card;
