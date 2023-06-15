import React from 'react';
import {SiDiscord} from 'react-icons/si';
import {FaTwitter} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
// import { Newsletter } from '../../Newsletter/Newsletter';

export default function Footer() {
  return (
    <>
    <div className=" mt-20 pb-20  flex-col bg-black text-white pt-1">
        <div className="flex flex-row mx-auto gap-10 px-4 mt-10 mb-12 xl:justify-center">
  <div className="basis-1/4 ">
    <label className="mb-24 font-sans text-lg font-semibold">Socials</label>
    <ul className="space-y-3.5 mt-4 pl-3">
    <li>
        <a href='https://www.twitter.com/applyremotely'><FaTwitter classNameName='text-3xl text-white' /></a>
    </li>
    <li>
        <a href='https://discord.gg/w5wj5yD8'><SiDiscord classNameName='text-3xl text-white' /></a>
    </li>
    <li>
        <a href='mailto:applyremotelyjobs@gmail.com'><FiMail classNameName='text-3xl text-white' /></a>
    </li>
    </ul>
  </div>
  <div className="basis-1/4 bg-blue">
    <label className="font-sans text-lg font-semibold">Pages</label>
    <ul className="space-y-3.5 mt-4">
    <li>
        <a href='/'>Home</a>
    </li>
    <li>
        <a href='/about'>About</a>
    </li>
    <li>
        <a href='/contact'>Contact us</a>
    </li>
    </ul>
  </div>
  <div className="basis-1/4 ">
    <label className="font-sans text-lg font-semibold">
        Overview
    </label>
    <ul className="space-y-3.5 mt-4">
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
{/* Email subscription form */}
  <div className='text-center mt-5'>All Rights reserved @copyright 2023</div>
    </div>
   
    </>
  )
}
