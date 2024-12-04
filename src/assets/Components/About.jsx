import {useEffect,useState} from "react";
import codexsvg from "../imgs/logo.svg";
import { HashLink } from "react-router-hash-link";



const About = () => {
  const [isWideScreen, setIsWideScreen] = useState(true);  
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 764); // Check if window width is more than 764px
    };

    // Check on initial render
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full px-5 pt-10 text-black scroll-animate lg:overflow-hidden lg:px-6">
      <div className="flex flex-col items-center w-full h-full lg:flex-row">
        
        {/* Image Section - Hidden on mobile */}
        {isWideScreen && (
        <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
          <div className="relative flex justify-center w-full">
            <img
              src={codexsvg}
              alt="Creative Team"
              className="object-cover w-full h-auto max-w-md transition-transform transform rounded-lg hover:scale-105"
            />
          </div>
        </div>
        )}
        {/* Text Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h1 className="mb-6 text-4xl font-extrabold text-indigo-500">
            Welcome to Codex Arena
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            At <span className="font-semibold text-indigo-400">Codex Arena</span>, we specialize in creating personalized websites that resonate with your unique identity. Our mission is to blend cutting-edge technology with modern aesthetics to craft solutions that are both stunning and highly functional.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Whether you're an aspiring entrepreneur looking to build your brand, a growing business seeking to enhance your digital footprint, or a creative individual looking for a unique portfolio, Codex Arena brings your vision to life with a seamless blend of innovation and design.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            We don’t just create websites; we create digital experiences that leave lasting impressions. Our team combines the latest technologies with custom-tailored design to ensure that your website stands out in today’s competitive digital landscape, ensuring a lasting impact on your audience.
          </p>
          
          {/* Learn More Button */}
          <HashLink smooth to="/#ContactUs">
            <button className="justify-center px-8 py-3 my-5 text-white transition-all transform bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105">
              Connect With Us
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default About;
