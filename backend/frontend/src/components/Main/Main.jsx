import React from 'react';
import {PostJobs} from '../Jobs/PostJobs';
import { ProfileMain } from '../../Assets';

export default function Main() {
  return (
    <>
    <div class="mt-3 mb-72 flex flex-wrap sm:bg-black">
      <div class="flex flex-row flex-wrap">
        <div class="bg-indigo-900 text-white pt-5 pb-16   ">
          <div class="font-bold text-4xl w-full  text-center mx-auto my-auto">Find High Paying Remote Jobs</div>
        
          <p class="text-center mt-10 mx-4 my-auto text-lg font-normal leading-9">Find 100+ Remote Jobs for more than 20+ category from Entry level to Senior level and work from anywhere.</p>
          <div class="text-center mt-10">
            <span class="mr-5">
             <a href='http://localhost:3000/postjobs' className='bg-green-600 p-4 rounded-xl font-bold font-sans'>Post Remote Jobs </a>
            </span>
            <a href='http://localhost:3000/jobs' className='bg-green-600 p-4 rounded-xl font-bold font-sans'>Find Remote Jobs</a>
          </div>
          </div>
          <div class="w-full mb-28">
          <img src={ProfileMain} class="object-fill" alt="ProfileMain" />
          
        <div class="bg-white text-black  absolute mt-4  shadow-2xl rounded-3xl ">
          <div class="font-normal p-10 text-lg text-center">I felt like I couldn’t find qualified candidates until I moved to Kriyax. Now I am encouraged to find more qualified candidates with Apply Remotely Jobs.</div>
          <div class="font-bold text-base text-center">Deependra Kumar</div>
          <div class="font-medium text-center py-3">CEO @KRIYAX</div>
        </div>
        </div>
      </div>
      <div>
        </div>
      </div>
    
    </>
  )
}
