// import React from "react";
// import codexsvg from "../imgs/codex.svg";
// import SocialIcons from "./SocialIcons";

// function Footer() {
//   return (
//     <footer className="footer w-full px-6 sm:px-32 pt-20 pb-6 bg-[#232931]">
//       <div className="flex flex-col justify-between inner-footer sm:flex-row">
//         {/* Left Inner Section */}
//         <div className="left-inner w-full sm:w-[40%] flex flex-col items-center sm:items-start mb-8 sm:mb-0">
//           <div className="p-4 first sm:p-10">
//             <img
//               className="h-[15vw] sm:h-[10vw] mx-auto sm:mx-0"
//               src={codexsvg}
//               alt="Codex Arena Logo"
//             />
//             <p className="text-sm mt-4 font-semibold leading-[1.5rem] text-center sm:text-left text-[#BABCBE]">
//               Codex Arena is a rapidly growing web development company dedicated
//               to delivering innovative and high-quality solutions. We specialize
//               in creating unique, top-tier websites, as well as producing
//               animated and motion graphic videos that captivate and engage
//               audiences. Additionally, we offer comprehensive digital marketing
//               services, all at highly competitive prices, ensuring exceptional
//               value for our customers.
//             </p>
//           </div>
//           <div className="flex flex-col items-end justify-end mt-10 sm:flex-row sm:items-end">
//             <h1 className="text-sm font-bold text-[#BABCBE] text-center sm:text-right w-full sm:w-auto">
//               Codex Arena © All Rights Reserved. {new Date().getFullYear()}
//             </h1>
//           </div>
//         </div>

      
//         {/* Right Inner Section */}
//         <div className="right-inner w-full sm:w-[55%] flex flex-col sm:flex-row justify-between">
//           {/* Quick Links */}
//           <div className="quick-links w-full sm:w-[45%] p-4">
//             <h1 className="text-lg font-semibold text-center text-white sm:text-left">
//               Quick Links
//             </h1>
//             <ul className="space-y-2 text-center sm:text-left text-[#A7A99D]">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#FFB649] transition-colors"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#services"
//                   className="hover:text-[#FFB649] transition-colors"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact_us"
//                   className="hover:text-[#FFB649] transition-colors"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
            
//           </div>
          
//           {/* Useful Links */}
//           <div className="useful-links w-full sm:w-[45%] p-4">
//             <h1 className="text-lg font-semibold text-center text-white sm:text-left">
//               Useful Links
//             </h1>
//             <ul className="space-y-2 text-center sm:text-left text-[#A7A99D]">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#FFB649] transition-colors"
//                 >
//                   Refund & Cancellation
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#privacy_policy"
//                   className="hover:text-[#FFB649] transition-colors"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//             <div className="items-start justify-start w-full m-8 lg:mt-28 lg:mb-10">
//               <SocialIcons />
//             </div>
//             <div className="flex flex-col items-center mt-8 subscribe sm:items-end">
//               <h2 className="mb-4 text-lg font-semibold text-white">Subscribe</h2>
//               <div className="flex items-center gap-4">
//                 <input
//                   className="p-2 border sm:w-64"
//                   type="text"
//                   placeholder="Email"
//                 />
//                 <button className="px-6 py-2 bg-[#B1B493] text-white font-semibold rounded-md">
//                   SEND
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </footer>
//   );
// }

// export default Footer;


import codexsvg from "../imgs/codex.svg";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6  bg-[#232931] dark:text-white-900 md:p-16 lg:p-16 xl:p-16 pt-10">
      <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a  href="#" className="flex justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center rounded-full w-28 h-28">
                <img
                  className="flex-shrink-0 rounded-full w-18 h-18"
                  src={codexsvg}
                  alt="Codex Arena Logo"
                />
              </div>
              <span className="self-center text-lg font-semibold text-white">BUILDING <font color="orange">SOMETHING</font> IS BETTER THAN <font color="orange">DOING</font> NOTHING</span>
            </a>
            <p className="p-3 mt-2 ml-5 text-base leading-relaxed text-justify text-white w-1/9 sm:text-lg md:text-md lg:text-md xl:text-md sm:leading-loose md:leading-loose lg:leading-normal xl:leading-normal " style={{fontFamily:'Century Gothic'}}>
              Codex Arena is a rapidly growing web development company dedicated
              to delivering innovative and high-quality solutions. We specialize
              in creating unique, top-tier websites, as well as producing
              animated and motion graphic videos that captivate and engage
              audiences. Additionally, we offer comprehensive digital marketing
              services, all at highly competitive prices, ensuring exceptional
              value for our customers.
            </p>
          </div>
          
          <div className="grid justify-around col-span-12 pt-10 pb-16 text-center text-white lg:ml-16 xl:ml-16 md:ml-16 md:text-left md:col-span-6">
            <p className="text-xl font-medium ">Quick Links</p>
            <ul className="">
              <li className="mt-2">
                <a  href="#" className="hover:dark:text-violet-600">Home</a>
              </li>
              <li className="mt-2">
                <a  href="#services" className="hover:dark:text-violet-600">Services</a>
              </li>
              <li className="mt-2">
                <a  href="#ContactUs" className="hover:dark:text-violet-600">Contact us</a>
              </li>
              <li className="mt-2">
                <Link to='/team' className="hover:dark:text-violet-600" >Our Team</Link>
              </li>
              <li className="mt-2">
                <Link to='/about' className="hover:dark:text-violet-600" >About us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 text-white lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2024 All rights reserved</span>
            <a  href="#">
              <span>Privacy policy</span>
            </a>
            <a  href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <SocialIcons/>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer;