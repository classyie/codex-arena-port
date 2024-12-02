import React from 'react';
import codexsvg from "../imgs/logo.svg";
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import  '../css/animation.css'
import { initScrollAnimations } from '../js/scrollAnimation';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  return (
    <section className="scroll-animate h-[93vh] bg-[#F8F9FA] text-black py-16 px-6 ">
      <div className="container flex flex-col items-center h-full mx-auto lg:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:w-1/2 ">
          <h1 className="mb-6 text-4xl font-extrabold text-indigo-500">
            Welcome to Codex Arena
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            At <span className="font-semibold text-indigo-400">Codex Arena</span>, we specialize in creating personalized websites that resonate with your unique identity. Our mission is to blend cutting-edge technology with modern aesthetics to craft solutions that are both stunning and highly functional.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Whether you are an aspiring entrepreneur looking to build your brand, a growing business seeking to enhance your digital footprint, or a creative individual looking for a unique portfolio, Codex Arena brings your vision to life with a seamless blend of innovation and design.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            We don’t just create websites; we create digital experiences that leave lasting impressions. Our team combines the latest technologies with custom-tailored design to ensure that your website stands out in today’s competitive digital landscape, ensuring a lasting impact on your audience.
          </p>
          
          {/* Learn More Button */}
          <HashLink smooth to="/#ContactUs">
            <button className="px-8 py-3 mt-4 text-white transition-all transform bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105">
              Connect With Us
            </button>
          </HashLink>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:w-1/2 lg:mt-0 lg:ml-10">
          <div className="relative w-full ">
            <img
              src={codexsvg}
              alt="Creative Team"
              className="object-cover w-full h-full transition-transform transform rounded-lg hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
