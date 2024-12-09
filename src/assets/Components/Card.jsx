import React from "react";
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
      className="flex flex-col w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-white border border-[#D1D5DB] shadow-lg hover:shadow-2xl rounded-xl p-6 mx-2 sm:mx-4 mt-8 relative overflow-hidden transition-transform transform hover:scale-105 h-full"
      whileHover={{
        scale: 1.05, // Slightly larger scale effect on hover
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1, // Faster transition duration for hover effect
        ease: "easeOut", // Ease-out for smoother effect
      }}
    >
      {/* Card Title */}
      <motion.div
        className="text-center text-3xl font-extrabold text-gray-800 pb-4"
        whileHover={{ scale: 1.1 }} // Slightly faster hover effect on title
        transition={{ duration: 0.3 }} // Fast hover transition on title
      >
        {card.title}
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex justify-center w-full mb-4"
        whileHover={{ scale: 1.05 }} // Slightly faster scaling on image hover
        transition={{ duration: 0.3 }} // Faster transition duration on image hover
      >
        <img
          className="max-w-[80%] max-h-[200px] object-contain rounded-lg shadow-md"
          src={card.img}
          alt={card.title}
        />
      </motion.div>

      {/* Price Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          ₹ {card.price}
        </h1>
      </div>

      {/* Features Section */}
      <div className="mt-6 text-center text-lg font-semibold text-gray-700">
        Features Include:
      </div>
      <div className="mt-4">
        <ul className="space-y-3 text-sm text-gray-600">
          {card.features.map((feature, index) => (
            <li className="flex items-center" key={index}>
              <span className="text-indigo-500 mr-2">🖉</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <motion.div
        className="flex justify-center mt-6 flex-grow"
        whileHover={{ scale: 1.05 }} // Slightly faster button hover
        transition={{ duration: 0.3 }} // Faster button hover transition
      >
        <button
          onClick={handleCardClick}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl"
        >
          Know More
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Card;
