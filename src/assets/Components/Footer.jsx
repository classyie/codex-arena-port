import React from "react";
import codexsvg from "../imgs/codex.svg";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="footer w-full px-6 sm:px-32 pt-20 pb-6 bg-[#232931]">
      <div className="inner-footer flex flex-col sm:flex-row justify-between">
        {/* Left Inner Section */}
        <div className="left-inner w-full sm:w-[40%] flex flex-col items-center sm:items-start mb-8 sm:mb-0">
          <div className="first p-4 sm:p-10">
            <img
              className="h-[15vw] sm:h-[10vw] mx-auto sm:mx-0"
              src={codexsvg}
              alt="Codex Arena Logo"
            />
            <p className="text-sm mt-4 font-semibold leading-[1.5rem] text-center sm:text-left text-[#BABCBE]">
              Codex Arena is a rapidly growing web development company dedicated
              to delivering innovative and high-quality solutions. We specialize
              in creating unique, top-tier websites, as well as producing
              animated and motion graphic videos that captivate and engage
              audiences. Additionally, we offer comprehensive digital marketing
              services, all at highly competitive prices, ensuring exceptional
              value for our customers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-end items-end sm:items-end mt-10">
            <h1 className="text-sm font-bold text-[#BABCBE] text-center sm:text-right w-full sm:w-auto">
              Codex Arena © All Rights Reserved. {new Date().getFullYear()}
            </h1>
          </div>
        </div>

      
        {/* Right Inner Section */}
        <div className="right-inner w-full sm:w-[55%] flex flex-col sm:flex-row justify-between">
          {/* Quick Links */}
          <div className="quick-links w-full sm:w-[45%] p-4">
            <h1 className="text-lg font-semibold text-center sm:text-left text-white">
              Quick Links
            </h1>
            <ul className="space-y-2 text-center sm:text-left text-[#A7A99D]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB649] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FFB649] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact_us"
                  className="hover:text-[#FFB649] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            
          </div>
          
          {/* Useful Links */}
          <div className="useful-links w-full sm:w-[45%] p-4">
            <h1 className="text-lg font-semibold text-center sm:text-left text-white">
              Useful Links
            </h1>
            <ul className="space-y-2 text-center sm:text-left text-[#A7A99D]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB649] transition-colors"
                >
                  Refund & Cancellation
                </a>
              </li>
              <li>
                <a
                  href="#privacy_policy"
                  className="hover:text-[#FFB649] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="lg:mt-28 m-8 w-full justify-start items-start lg:mb-10">
              <SocialIcons />
            </div>
            <div className="subscribe mt-8 flex flex-col items-center sm:items-end">
              <h2 className="text-lg font-semibold mb-4 text-white">Subscribe</h2>
              <div className="flex gap-4 items-center">
                <input
                  className="p-2 border sm:w-64"
                  type="text"
                  placeholder="Email"
                />
                <button className="px-6 py-2 bg-[#B1B493] text-white font-semibold rounded-md">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;
