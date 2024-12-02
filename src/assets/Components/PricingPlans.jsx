import React from "react";
import Tilt from "react-parallax-tilt";
import  '../css/animation.css'
import { initScrollAnimations } from '../js/scrollAnimation';
import { useEffect } from 'react';

const PricingPlans = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  const plans = [
    {
      title: "Web Page Design - Starter Plan",
      features: ["Single-page design", "Responsive layout", "Basic SEO"],
      price: 5000,
      discountedPrice: 4500,
      tagline: "Perfect for personal projects!",
      bgColor: "bg-gradient-to-r from-indigo-100 to-indigo-200",
    },
    {
      title: "Web Page Design - Pro Plan",
      features: ["Up to 5 pages", "Custom design", "Advanced SEO optimization"],
      price: 10000,
      discountedPrice: 9000,
      tagline: "Ideal for small businesses!",
      bgColor: "bg-gradient-to-r from-purple-100 to-purple-200",
    },
    {
      title: "Web Page Design - Enterprise Plan",
      features: [
        "Unlimited pages",
        "Premium designs with animations",
        "Full SEO and analytics integration",
      ],
      price: 25000,
      discountedPrice: 22500,
      tagline: "Comprehensive design for enterprises!",
      bgColor: "bg-gradient-to-r from-pink-100 to-pink-200",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-6 scroll-animate bg-gray-50">
      <h1
        className="flex items-center justify-center h-12 mt-2 text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl"
        style={{ fontFamily: 'Parkinsans, sans-serif' }}
      >Our Pricing Plans</h1>
      <p className="max-w-2xl mt-5 text-lg text-center text-gray-600">
        Choose the plan that fits your needs. Get high-quality web page designs
        with professional features at competitive prices.
      </p>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {plans.map((plan, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={400}
            className="transition-all duration-300 transform shadow-lg rounded-xl hover:shadow-2xl"
          >
            <div
              className={`rounded-xl p-8 text-center ${plan.bgColor} border-t-4 border-indigo-500 flex flex-col justify-between h-full`}
            >
              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-800">
                  {plan.title}
                </h2>
                <p className="mb-4 text-sm italic text-gray-500">{plan.tagline}</p>
                <div className="mb-6">
                  <p className="text-xl font-semibold text-gray-600 line-through">
                    ₹{plan.price}
                  </p>
                  <p className="text-3xl font-extrabold text-indigo-600">
                    ₹{plan.discountedPrice}
                  </p>
                </div>
                <ul className="mb-6 space-y-3 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-2 font-medium text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
