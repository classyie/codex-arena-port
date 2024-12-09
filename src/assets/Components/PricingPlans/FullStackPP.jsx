import React from "react";
import Tilt from "react-parallax-tilt";
import { HashLink } from "react-router-hash-link";

const FullStackPP = () => {
  const plans = [
    {
      title: "Starter Plan",
      features: [
        "Single Page Application (React.js)",
        "Basic Backend with Node.js and Express.js",
        "Database Setup (MongoDB)",
        "Responsive Design",
      ],
      price: 15000,
      discountedPrice: 13500,
      tagline: "Perfect for basic full-stack solutions!",
      bgColor: "bg-gradient-to-r from-blue-100 to-blue-200",
    },
    {
      title: "Pro Plan",
      features: [
        "Multi-page Application",
        "Custom Frontend (React.js + Tailwind CSS)",
        "Advanced Backend with Node.js and Express.js",
        "Database Integration (MongoDB & PostgreSQL)",
        "Authentication (Passport.js)",
        "API Development (RESTful)",
      ],
      price: 30000,
      discountedPrice: 27000,
      tagline: "Ideal for medium-sized projects!",
      bgColor: "bg-gradient-to-r from-purple-100 to-purple-200",
    },
    {
      title: "Enterprise Plan",
      features: [
        "Dynamic Web Applications",
        "Custom Admin Panels",
        "Real-time Updates (WebSockets)",
        "Database Management (MongoDB & PostgreSQL)",
        "Secure Authentication with Passport.js",
        "Scalable Backend Architecture",
        "Comprehensive Frontend (React.js + Tailwind CSS)",
        "API Development (RESTful and GraphQL)",
      ],
      price: 60000,
      discountedPrice: 54000,
      tagline: "Comprehensive solutions for enterprises!",
      bgColor: "bg-gradient-to-r from-teal-100 to-teal-200",
    },
  ];

  return (
    <div className="flex flex-col items-center h-[80vh] px-6 py-6 scroll-animate bg-gray-50xs:px-10">
      <h1 className="self-center text-5xl font-bold sm:text-4xl xxs:text-2xl xs:text-3xl md:text-5xl lg:text-6xl">
            Full Stack Web Plans
          </h1>
      <p className="max-w-2xl mb-12 text-lg text-center text-gray-600">
        Build powerful full-stack solutions with technologies like React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Choose a plan that fits your project 's needs.
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
              className={`rounded-xl p-8 text-center ${plan.bgColor} border-t-4 border-blue-500 flex flex-col justify-between h-full`}
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
                  <p className="text-3xl font-extrabold text-blue-600">
                    ₹{plan.discountedPrice}
                  </p>
                </div>
                <ul className="mb-6 space-y-3 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <HashLink smooth to="/#ContactUs">
              <button className="w-full py-2 mt-auto font-medium text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700">
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

export default FullStackPP;