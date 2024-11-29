import React from 'react';
import bannerr from "../imgs/bannerr.jpg"

function Footer() {
  return (
    <>
      <div className='footer w-full mt-20 px-6 sm:px-32 pt-20' style={{ backgroundImage: `url(${bannerr})` }}
      >
        <div className='inner-footer flex flex-col sm:flex-row justify-between items-center sm:items-start'>
          <div className='left-inner w-full sm:w-[40%] flex flex-col items-center sm:items-start mb-8 sm:mb-0'>
            <div className='first p-4 sm:p-10'>
              <img 
                className="h-[15vw] sm:h-[10vw] mx-auto sm:mx-0" 
                src="https://cdn.discordapp.com/attachments/1311922999909421088/1311990357164032033/codex.png?ex=674addbc&is=67498c3c&hm=d17d7027602e54e8c44e14bd6ce5064d781867133cb991fc203cfa4110e8c5c1&" 
                alt="Flown Developer"
              />
              <p className='text-sm mt-4 font-semibold leading-[1.5rem] text-center sm:text-left text-white'>
                Flown Developer India’s No 1 Web development Company. Flown Developer provides unique and best quality websites, animated & motion graphic videos to customers at a very affordable price.
              </p>
              <h1 className='mt-14 text-sm font-bold text-center sm:text-left text-white'>Flown Developer © All Rights Reserved.</h1>
            </div>
          </div>

      
          <div className='right-inner w-full sm:w-[55%] flex flex-col sm:flex-row justify-between items-center sm:items-start'>
            
    
            <div className="quick-links w-full sm:w-[45%] p-4">
              <h1 className="text-lg font-semibold text-center sm:text-left text-white">Quick Links</h1>
              <ul className="space-y-2 text-center sm:text-left">
                <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
                <li><a href="#services" className="text-blue-600 hover:underline">Services</a></li>
                <li><a href="#contact_us" className="text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
            </div>

          
            <div className="useful-links w-full sm:w-[45%] p-4">
              <h1 className="text-lg font-semibold text-center sm:text-left text-white">Useful Links</h1>
              <ul className="space-y-2 text-center sm:text-left">
                <li><a href="#" className="text-blue-600 hover:underline">Refund & Cancellation</a></li>
                <li><a href="#privacy_policy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              </ul>

             
              <div className="subscribe lg:pt-20 lg:pr-24  mt-8 sm:mt-12 flex flex-col items-center sm:items-end">
                <h2 className="text-lg font-semibold mb-4 text-white">Subscribe</h2>
                <div className='flex gap-4 items-center'>
                  <input className='p-2 border sm:w-64' type="text" placeholder='Email' />
                  <button className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-md'>SEND</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
