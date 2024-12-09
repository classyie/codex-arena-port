import codexsvg from "../imgs/codex.svg";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6  bg-[#232931] xxs:p-1 xs:p-1  dark:text-white-900 md:p-16 lg:p-16 xl:p-16 pt-10 " style={{ paddingBottom: '15px' }}>
      <div className="container px-6 mx-auto space-y-6 divide-y xs:p-0 dark:divide-gray-600 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 text-center col-span-full md:pb-0 md:col-span-6 xs:pt-6">
            <a  href="#" className="flex justify-center space-x-3 md:justify-start ">
              <div className="flex items-center justify-center rounded-full xs:hidden md:block w-28 h-28">
                <img
                  className="flex-shrink-0 rounded-full w-18 h-18 "
                  src={codexsvg}
                  alt="Codex Arena Logo"
                />
              </div>
              <span className="self-center text-lg font-semibold text-white md:mb-0 xs:mb-5 xs:text-2xl xs:w-full">BUILDING <font color="orange">SOMETHING</font> IS BETTER THAN <font color="orange">DOING</font> NOTHING</span>
            </a>
            <p className="p-3 mt-2 ml-5 text-base leading-relaxed text-justify text-white w-1/9 sm:text-xl md:text-md lg:text-md xl:text-md sm:leading-loose md:leading-loose lg:leading-normal xl:leading-normal xs:text-lg xs:p-0 " style={{fontFamily:'Century Gothic'}}>
              Codex Arena is a rapidly growing web development company dedicated
              to delivering innovative and high-quality solutions. We specialize
              in creating unique, top-tier websites, as well as producing
              animated and motion graphic videos that captivate and engage
              audiences. Additionally, we offer comprehensive digital marketing
              services, all at highly competitive prices, ensuring exceptional
              value for our customers.
            </p>
          </div>
          
          <div className="grid justify-around col-span-12 pt-5 text-center text-white pb-18 lg:ml-16 xl:ml-16 md:ml-16 md:text-left md:col-span-6">
            <p className="text-xl font-medium ">Quick Links</p>
            <ul className="">
              <li className="mt-2">
                <a  href="#" className="hover:dark:text-violet-600">Home</a>
              </li>
              <li className="mt-2">
                <a  href="#Services" className="hover:dark:text-violet-600">Services</a>
              </li>
              <li className="mt-2">
                <a  href="#ContactUs" className="hover:dark:text-violet-600">Contact us</a>
              </li>
              <li className="mt-2">
                <Link to='/team' className="hover:dark:text-violet-600" >Our Team</Link>
              </li>
              <li className="mt-2">
                <Link to='/about' className="hover:dark:text-violet-600" >About us</Link>
              </li>
            </ul>
          </div>
        </div>
-        <div className="grid justify-center pt-6 text-white lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©Codex Arena | 2024 All rights reserved</span>
            <a  href="#">
              <span>Privacy policy</span>
            </a>
            <a  href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <SocialIcons/>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer;