import React from 'react';
import {PostJobs} from '../Jobs/PostJobs';
import { ProfileMain } from '../../Assets';

export default function Main() {
  return (
    <>
    <div class="mt-16 mb-48 flex flex-wrap sm:bg-black">
      <div class="flex flex-row flex-wrap">
        <div class="bg-indigo-900 text-white py-10   ">
          <div class="font-bold text-4xl w-full  text-center mx-auto my-auto">Find High Paying Remote Jobs</div>
        
          <p class="text-center mt-10 mx-4 my-auto text-lg font-normal leading-9">Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</p>
          <div class="text-center mt-10">
            <span class="mr-10">
             <a href='http://localhost:3000/postjobs'>Post Remote Jobs </a>
            </span>
            <button>Explore Pages</button>
          </div>
          </div>
          <div class="w-full mb-28">
          <img src={ProfileMain} class="object-fill" alt="ProfileMain" />
          
        <div class="bg-white text-black  absolute mt-4  shadow-2xl rounded-3xl ">
          <div class="font-normal p-10 text-lg">I felt like I couldn’t grow until I moved to Kriyax. Now I am encouraged to work more with them.</div>
          <div class="font-bold text-base text-center">Frank Dublin</div>
          <div class="font-medium text-center py-3">CEO @STAMPS</div>
        </div>
        </div>
      </div>
      <div>
        </div>
      </div>
    
    </>
  )
}
