import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../css/animation.css";
import { initScrollAnimations } from "../js/scrollAnimation";
import { useEffect } from "react";

const QueryForm = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted successfully:", formData);
      // Here, you can also handle the form submission logic (e.g., API call).
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <>
      <h1
        className="flex items-center bg-[#F8F9FA] justify-center h-12 mt-10 text-3xl sm:text-5xl xxs:text-5xl xs:text-5xl custom-range:mt-0 md:mt-0 text-center md:text-4xl lg:text-5xl xl:text-6xl"
        style={{ fontFamily: "Parkinsans, sans-serif" }}
      >
        Contact Us
      </h1>
      <div
        className=" h-auto scroll-animate bg-[#F8F9FA] flex mt-10 justify-center px-4"
        id="ContactUs"
      >
        <div className="flex flex-col w-full max-w-7xl gap-8 p-8 bg-white rounded-lg shadow-lg md:flex-row">
          {/* Lottie Animation Section */}
          <div className="order-1 w-full md:w-2/5 md:order-2">
            <h1 className="pt-5 text-3xl font-bold text-center text-gray-800 md:text-left">
              We are available 24x7 for you!
            </h1>
            <div className="mt-28">
              <DotLottieReact
                className="w-[90%] h-auto"
                src="https://lottie.host/4a2f24c6-5a75-4e77-8e47-e398fe3c7d0b/Uipclch9If.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="order-2 w-full md:w-3/5 md:order-1">
            <h2 className="mb-4 text-2xl font-bold text-center text-blue-800">
              Submit Your Query
            </h2>
            <p className="mb-6 text-center text-gray-600">
              We will be glad to help you
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Input fields */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-[#ccceba]"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your E-mail"
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-[#ccceba]"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={`w-full p-3 border ${
                  errors.phone ? "border-red-500" : "border-[#ccceba]"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full p-3 border ${
                  errors.subject ? "border-red-500" : "border-[#ccceba]"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]`}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject}</p>
              )}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full p-3 h-24 border ${
                  errors.message ? "border-red-500" : "border-[#ccceba]"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1B493]`}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-[#b1b493] text-white font-bold rounded-md hover:bg-[#B1C493] transition duration-300"
              >
                SEND YOUR MESSAGE
              </button>
            </form>
            {submitted && (
              <div className="mt-6 font-bold text-center text-green-600">
                Your message has been submitted successfully!
              </div>
            )}
            <div className="mt-6 text-sm text-center text-gray-500">
              <p>📧 arenacodex@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryForm;
