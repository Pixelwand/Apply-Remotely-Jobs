import React from 'react';
import { ProfileMain } from '../../Assets';

export default function Main() {
  return (
    <>
    <div class="mt-16 mb-48">
      <div class="flex flex-row">
        <div class="bg-indigo-900 text-white basis-7/12 py-10 px-20  ">
          <div class="font-bold text-6xl w-64  text-center mx-auto my-auto">Build For Enterprise Businesses</div>
        
          <p class="w-6/12 text-left px-6 mt-10 mx-auto my-auto text-lg font-normal leading-9">Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</p>
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
