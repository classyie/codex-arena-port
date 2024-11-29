import React from 'react';
import { SlPencil } from "react-icons/sl";


function Card() {
  return (
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[24vw] rounded-md p-3 bg-[#ffffff] border border-[#2532C0] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mx-2 sm:mx-4 mt-14">
      <div className="w-[50%] sm:w-[40%] md:w-[40%] lg:w-[10vw] mx-auto py-1 bg-orange-500 rounded-md text-white flex justify-center text-lg font-semibold">
        Frontend-Dev
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[80%] lg:w-[90%] overflow-hidden p-3 mx-auto mt-3">
        <img
          className="h-auto w-full rounded-md object-cover"
          src="https://th.bing.com/th/id/OIP.name5NeZnnGz1qgybuOxmwHaDy?w=285&h=178&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
      </div>

      <div className="price grid justify-center p-2">
        <h1 className="text-2xl ml-1 font-semibold line-through leading-none">
          ₹ 10,000
        </h1>
        <h1 className="text-3xl font-bold leading-none text-[#161ab2]">
          ₹ 7,999
        </h1>
      </div>

      <div className="text-sm font-semibold text-gray-800 mt-3 grid justify-center">
        (+ 18% GST ₹ 1440)
      </div>

      <div className="grid justify-center mt-4 font-semibold text-lg">
        Features Includes
      </div>
      
<div className="mt-2">
  <ul className="custom-list list-none text-black-700 text-sm p-4 space-y-4 font-sans">
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> 5 Pages Website
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> 1 Year Free Domain Name (.com, .in, .org)
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> 1 Year Free Hosting (Unlimited Space)
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> Dynamic Website (Premium Design)
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> Admin Access
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> Lifetime 24/7 Free Hosting Support
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> Unlimited Images & Videos Upload
    </li>
    <li className="custom-list flex items-center">
      <SlPencil className="mr-2 text-blue-500" /> Free SSL Certificates
    </li>
    <li className="custom-list flex items-center">
      <SlPencil  className="mr-2 text-blue-500" /> 5 Free Email IDs
    </li>
  </ul>
</div>

      <div className="grid justify-center mt-3">
        <button className="px-4 rounded-md py-2 font-semibold text-sm bg-[#FFB649] mb-16">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Card;
