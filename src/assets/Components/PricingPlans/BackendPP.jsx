import React from "react";
import Tilt from "react-parallax-tilt";
import { HashLink } from "react-router-hash-link";
const BackendDesign = () => {
  const plans = [
    {
      title: "Starter Plan",
      features: [
        "Basic API Development (RESTful)",
        "Database Setup (MongoDB or PostgreSQL)",
        "Secure Connections with Middleware",
      ],
      price: 6000,
      discountedPrice: 5500,
      tagline: "Perfect for small backend solutions!",
      bgColor: "bg-gradient-to-r from-green-100 to-green-200",
    },
    {
      title: "Pro Plan",
      features: [
        "Advanced API Development",
        "Authentication with Passport.js",
        "Optimized Middleware Integration",
        "Node.js Backend Framework",
      ],
      price: 12000,
      discountedPrice: 11000,
      tagline: "Ideal for growing applications!",
      bgColor: "bg-gradient-to-r from-yellow-100 to-yellow-200",
    },
    {
      title: "Enterprise Plan",
      features: [
        "Scalable Architecture",
        "Database Management (MongoDB, PostgreSQL)",
        "Real-time Data Handling",
        "Comprehensive Middleware Stack",
        "High-security Authentication with Passport.js",
      ],
      price: 30000,
      discountedPrice: 27500,
      tagline: "Robust backend for enterprises!",
      bgColor: "bg-gradient-to-r from-orange-100 to-orange-200",
    },
  ];

  return (
    <div className="flex flex-col items-center h-[80vh] px-6 py-6 scroll-animate bg-gray-50 xs:px-10">
      <h1 className="self-center text-5xl font-bold sm:text-4xl xxs:text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
            Backend Design Plans
          </h1>
      <p className="max-w-2xl mb-12 text-lg text-center text-gray-600">
        Get professional backend development services using industry-standard
        technologies like MongoDB, Express.js, PostgreSQL, Passport.js,
        Middleware, and Node.js.
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
              className={`rounded-xl p-8 text-center ${plan.bgColor} border-t-4 border-green-500 flex flex-col justify-between h-full`}
            >
              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-800">
                  {plan.title}
                </h2>
                <p className="mb-4 text-sm italic text-gray-500">
                  {plan.tagline}
                </p>
                <div className="mb-6">
                  <p className="text-xl font-semibold text-gray-600 line-through">
                    ₹{plan.price}
                  </p>
                  <p className="text-3xl font-extrabold text-green-600">
                    ₹{plan.discountedPrice}
                  </p>
                </div>
                <ul className="mb-6 space-y-3 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <HashLink smooth to="/#ContactUs">
              <button className="w-full py-2 mt-auto font-medium text-white transition-all bg-green-600 rounded-full hover:bg-green-700">
                Choose Plan
              </button>

              </HashLink>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default BackendDesign;