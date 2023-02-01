import React from 'react';
import {SiDiscord} from 'react-icons/si';
import {FaTwitter} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

export default function Footer() {
  return (
    <>
    <div className=" mt-20 pb-36  flex-col bg-black text-white pt-1">
        <div className="flex flex-row mx-auto gap-10 px-4 mt-10 mb-12 xl:justify-center">
  <div className="basis-1/4 ">
    <label className="mb-24 font-sans text-lg font-semibold">Socials</label>
    <ul className="space-y-3.5 mt-4 pl-3">
    <li>
        <a href='https://www.twitter.com/applyremotely'><FaTwitter className='text-3xl text-white' /></a>
    </li>
    <li>
        <a href='https://discord.gg/w5wj5yD8'><SiDiscord className='text-3xl text-white' /></a>
    </li>
    <li>
        <a href='mailto:applyremotelyjobs@gmail.com'><FiMail className='text-3xl text-white' /></a>
    </li>
    </ul>
  </div>
  <div className="basis-1/4 bg-blue">
    <label className="font-sans text-lg font-semibold">Pages</label>
    <ul className="space-y-3.5 mt-4">
    <li>
        <a href='http://localhost:3000/'>Home</a>
    </li>
    <li>
        <a href='http://localhost:3000/about'>About</a>
    </li>
    <li>
        <a href='http://localhost:3000/contact'>Contact us</a>
    </li>
    </ul>
  </div>
  <div class="basis-1/4 ">
    <label class="font-sans text-lg font-semibold">
        Overview
    </label>
    <ul class="space-y-3.5 mt-4">
    <li>
        <a href="/">Terms</a>
    </li>
    <li>
        <a href='/'>Privacy</a>
    </li>
    <li>
        <a href='/'>Copyright</a>
    </li>
    </ul>
  </div>
  
</div>
<div class="text-center xl:mt-20">
    <button>
    <input type={"email"} placeholder="Enter your email" class="outline-none border-2 placeholder:text-black text-black font-sans font-semibold border-blue-600  p-1.5" />
    <span class="bg-blue-600 text-white font-sans p-1.5 border-2 border-blue-600">Get Started</span>
    </button>
  </div>
  <div className='text-center mt-5'>All Rights reserved @copyright 2023</div>
    </div>
   
    </>
  )
}
