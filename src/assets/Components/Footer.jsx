import React from "react";
import codexsvg from "../imgs/codex.svg";

function Footer() {
  //
  return (
    <>
      {/* style={{ backgroundImage: `url(${bannerr})`, backgroundSize: '200%', backgroundRepeat: 'no-repeat'}} */}
      <div className="footer w-full px-6 sm:px-32 pt-20 bg-[#232931]">
        <div className="inner-footer flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="left-inner w-full sm:w-[40%] flex flex-col items-center sm:items-start mb-8 sm:mb-0">
            <div className=" first p-4 sm:p-10">
              <img
                className="h-[15vw] sm:h-[10vw] mx-auto sm:mx-0 "
                src={codexsvg}
                alt=""
              />
              <p className="text-sm mt-4 font-semibold leading-[1.5rem] text-center sm:text-left text-[#BABCBE]">
                Codex Arena is a rapidly growing web development company
                dedicated to delivering innovative and high-quality solutions.
                We specialize in creating unique, top-tier websites, as well as
                producing animated and motion graphic videos that captivate and
                engage audiences. Additionally, we offer comprehensive digital
                marketing services, all at highly competitive prices, ensuring
                exceptional value for our customers.
              </p>
              <h1 className="mt-14 text-sm font-bold text-center sm:text-left text-[#BABCBE]">
                Codex Arena © All Rights Reserved.{" "}
                {new Date().getFullYear().toString()}
              </h1>
            </div>
          </div>

          <div className="right-inner w-full sm:w-[55%] flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="quick-links w-full sm:w-[45%] p-4">
              <h1 className="text-lg font-semibold text-center sm:text-left text-white">
                Quick Links
              </h1>
              <ul className="space-y-2 text-center sm:text-left text-[#A7A99D]">
                <li>
                  <a
                    href="#"
                    className="text-[#A7A99D] hover:no-underline hover:text-[#FFB649]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-[#A7A99D] hover:no-underline hover:text-[#FFB649]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact_us"
                    className="text-[#A7A99D] hover:no-underline hover:text-[#FFB649]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="useful-links w-full sm:w-[45%] p-4">
              <h1 className="text-lg font-semibold text-center sm:text-left text-white">
                Useful Links
              </h1>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <a
                    href="#"
                    className="text-[#A7A99D] hover:no-underline hover:text-[#FFB649]"
                  >
                    Refund & Cancellation
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy_policy"
                    className="text-[#A7A99D] hover:no-underline hover:text-[#FFB649]"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>

              <div className="subscribe lg:pt-20 lg:pr-24  mt-8 sm:mt-12 flex flex-col items-center sm:items-end">
                <h2 className="text-lg font-semibold mb-4 text-white">
                  Subscribe
                </h2>
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
      </div>
    </>
  );
}

export default Footer;
