import React from 'react';
import { ProfileMain } from '../../Assets';

export default function Main() {
  return (
    <>
    <div class="mt-16 mb-48 flex flex-wrap sm:bg-black">
      <div class="flex flex-row flex-wrap">
        <div class="bg-indigo-900 text-white py-10   ">
          <div class="font-bold text-4xl w-full  text-center mx-auto my-auto">Built For Enterprise Businesses</div>
        
          <p class="text-center mt-10 mx-4 my-auto text-lg font-normal leading-9">Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</p>
          <div class="text-center mt-10">
            <span class="mr-10">
              <button class="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3">Learn More</button>
            </span>
            <span>Explore Pages</span>
          </div>
          </div>
          <div class="basis-5/12 ">
          <img src={ProfileMain} class="object-fill" alt="ProfileMain" />
          
        <div class="bg-white text-black w-80 absolute z-10 shadow-2xl rounded-3xl ml-48">
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
