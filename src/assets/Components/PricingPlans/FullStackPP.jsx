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
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 lg:pt-30">Full Stack Design Plans</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center">
        Build powerful full-stack solutions with technologies like React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Choose a plan that fits your project's needs.
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
              className={`rounded-xl p-8 text-center ${plan.bgColor} border-t-4 border-blue-500 flex flex-col justify-between h-full`}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {plan.title}
                </h2>
                <p className="text-sm italic text-gray-500 mb-4">{plan.tagline}</p>
                <div className="mb-6">
                  <p className="text-xl font-semibold text-gray-600 line-through">
                    ₹{plan.price}
                  </p>
                  <p className="text-3xl font-extrabold text-blue-600">
                    ₹{plan.discountedPrice}
                  </p>
                </div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 justify-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <HashLink smooth to="/#ContactUs">
              <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition-all">
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
