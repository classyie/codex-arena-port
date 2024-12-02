import React from 'react';
import codexsvg from "../imgs/logo.svg";
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const About = () => {
  return (
    <section className="h-[93vh] bg-[#F8F9FA] text-black py-16 px-6 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center h-full">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center ">
          <h1 className="text-4xl font-extrabold mb-6 text-indigo-500">
            Welcome to Codex Arena
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
            At <span className="font-semibold text-indigo-400">Codex Arena</span>, we specialize in creating personalized websites that resonate with your unique identity. Our mission is to blend cutting-edge technology with modern aesthetics to craft solutions that are both stunning and highly functional.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Whether you're an aspiring entrepreneur looking to build your brand, a growing business seeking to enhance your digital footprint, or a creative individual looking for a unique portfolio, Codex Arena brings your vision to life with a seamless blend of innovation and design.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            We don’t just create websites; we create digital experiences that leave lasting impressions. Our team combines the latest technologies with custom-tailored design to ensure that your website stands out in today’s competitive digital landscape, ensuring a lasting impact on your audience.
          </p>
          
          {/* Learn More Button */}
          <HashLink smooth to="/#ContactUs">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition-all mt-4">
              Connect With Us
            </button>
          </HashLink>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <div className="relative w-full ">
            <img
              src={codexsvg}
              alt="Creative Team"
              className="rounded-lg w-full h-full object-cover transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
