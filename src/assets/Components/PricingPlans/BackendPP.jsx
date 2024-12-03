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
    <div className="flex flex-col items-center h-[80vh] px-6 py-6 scroll-animate bg-gray-50xs:px-10">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 lg:pt-20">
        Backend Design Plans
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center">
        Get professional backend development services using industry-standard
        technologies like MongoDB, Express.js, PostgreSQL, Passport.js,
        Middleware, and Node.js.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {plans.map((plan, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={400}
            className="rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
          >
            <div
              className={`rounded-xl p-8 text-center ${plan.bgColor} border-t-4 border-green-500 flex flex-col justify-between h-full`}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {plan.title}
                </h2>
                <p className="text-sm italic text-gray-500 mb-4">
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
                <ul className="space-y-3 mb-6 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 justify-center"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <HashLink smooth to="/#ContactUs">
              <button className="mt-auto w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700 transition-all">
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
