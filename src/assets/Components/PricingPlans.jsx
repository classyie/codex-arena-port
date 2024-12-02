import React from "react";
import Tilt from "react-parallax-tilt";

const PricingPlans = () => {
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10">
        Our Pricing Plans
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center">
        Choose the plan that fits your needs. Get high-quality web page designs
        with professional features at competitive prices.
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
              className={`rounded-xl p-8 text-center ${plan.bgColor} border-t-4 border-indigo-500 flex flex-col justify-between h-full`}
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
                  <p className="text-3xl font-extrabold text-indigo-600">
                    ₹{plan.discountedPrice}
                  </p>
                </div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 justify-center"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto w-full bg-indigo-600 text-white py-2 rounded-full font-medium hover:bg-indigo-700 transition-all">
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
