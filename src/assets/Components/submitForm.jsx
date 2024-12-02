import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import  '../css/animation.css'
import { initScrollAnimations } from '../js/scrollAnimation';
import { useEffect } from 'react';

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
    <div className="min-h-screen scroll-animate bg-[#F8F9FA] flex items-center justify-center px-4" id="ContactUs">
      <div className="flex flex-col w-full max-w-6xl gap-8 p-8 bg-white rounded-lg shadow-lg md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-3/5">
          <h2 className="mb-4 text-2xl font-bold text-center text-blue-800">
            Submit Your Query
          </h2>
          <p className="mb-6 text-center text-gray-600">
            We will be glad to help you
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <p>📞 +91-6350559030</p>
            <p>📧 codexarena@gmail.com</p>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-2/5">
          <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-left">
            We are available 24x7 for you!
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-600 md:text-left">
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
