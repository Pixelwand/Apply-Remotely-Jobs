import React from 'react';
import {SiDiscord} from 'react-icons/si';
import {FaTwitter} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

export default function Footer() {
  return (
    <>
    <div class=" mt-20 pb-36  flex-col bg-black text-white pt-1">
        <div class="flex flex-row mx-auto gap-10 px-4 mt-10 mb-12">
  <div class="basis-1/4 ">
    <label class="mb-24 font-sans text-lg font-semibold">Socials</label>
    <ul class="space-y-3.5 mt-4">
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
  <div class="basis-1/4 bg-blue">
    <label class="font-sans text-lg font-semibold">Company</label>
    <ul class="space-y-3.5 mt-4">
    <li>
        Overview
    </li>
    <li>
        Landings
    </li>
    <li>
        Company
    </li>
    </ul>
  </div>
  <div class="basis-1/4 ">
    <label class="font-sans text-lg font-semibold">
        Pages
    </label>
    <ul class="space-y-3.5 mt-4">
    <li>
        Overview
    </li>
    <li>
        Landings
    </li>
    <li>
        Company
    </li>
    </ul>
  </div>
  
</div>
<div class="text-center">
    <button>
    <input type={"email"} placeholder="Enter your email" class="outline-black p-3" />
    <span class="bg-black text-white font-sans p-3">Get Started</span>
    </button>
  </div>
    </div>
    </>
  )
}
