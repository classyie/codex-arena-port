import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const QueryForm = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-6xl p-8 gap-8">
        {/* Form Section */}
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Submit Your Query</h2>
          <p className="text-center text-gray-600 mb-6">We will be glad to help you</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-[#ccceba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-3 border border-[#ccceba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border border-[#ccceba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-[#ccceba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 h-24 border border-[#ccceba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]"
            ></textarea>
            <div className="flex items-center justify-center">
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#b1b493] text-white font-bold rounded-md hover:bg-[#B1C493] transition duration-300"
            >
              SEND YOUR MESSAGE
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>📞 +91-6350559030</p>
            <p>📧 codexarena@gmail.com</p>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
            We are available 24x7 for you!
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center md:text-left">
            Contact Us
          </h2>
          <DotLottieReact
            className="w-[90%] h-auto"
            src="https://lottie.host/4a2f24c6-5a75-4e77-8e47-e398fe3c7d0b/Uipclch9If.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
