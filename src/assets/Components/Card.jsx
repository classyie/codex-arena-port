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
      className="h-[139vh] customnew:h-[120vh] custom-range:h-[120vh] customnew1:h-[140vh] min-hei2:h-[135vh] min-hei1:h-[90vh] min-hei5:h-[70vh] min-hei4:h-[70vh] min-hei3:h-[73vh] custom-1024-600:h-[110vh] custom-1280-800:h-[120vh] xxs:h-auto custom-912:h-[75vh] lg-custom:h-[100vh]     xs:h-auto custom:h-[92vh] md:h-[95vh] lg:h-[120vh]    w-full  xs:px-3 md:w-[60%] lg:w-[40%] xl:w-[24vw] rounded-md p-3 bg-[#ffffff] border border-[#2532C0] shadow-lg hover:shadow-2xl desktop:h-[125vh] transition-shadow duration-300 laptop:h-[120vh] tablet:h-[90vh] ease-in-out mx-2 sm:mx-4 mt-14 relative overflow-hidden"
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
        className="w-[83%] xs:w-[72vw] lg:w-[75w]  xxs:w-[68vw] xxs:text-2xl md:w-[100%]  mx-auto py-2 px-4 rounded-md text-black flex justify-center text-3xl sm:text-2xl md:text-3xl font-extrabold break-words whitespace-normal"
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
        <h1 className="text-3xl xxs:text-2xl font-bold leading-none text-[#161ab2]">
          ₹ {card.price}
        </h1>
      </div>

      {/* Features Section */}
      <div className="grid justify-center mt-4 text-lg font-semibold ">
        Features Includes
      </div>

      <div className="mt-2 xxs:p-1 xxs:w-full">
        <ul className="p-4 ml-2 space-y-3 font-sans text-sm list-none custom-list text-black-700">
          {card.features.map((data) => (
            <li
              className="flex items-center whitespace-normal text-ellipsis"
              key={data}
            >
             <font size="7px" className="mr-1">🖉</font> {data}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <motion.div
        className="grid justify-center w-full lg:mt-5 xs:mt-10 md:mt-5 xxs:mt-5 xxs:mb-2 b-0 lg:absolute md:absolute bottom-6"
        whileHover={{ scale: 1.1 }}
      >
        <button onClick={handleCardClick} className="px-4 py-2 text-sm font-semibold text-white transition-colors bg-indigo-500 rounded-md xs:mr-0 xxs:mr-0 md:mr-0 lg:mr-0 hover:bg-indigo-700">
          <a >KNOW MORE</a>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Card;
