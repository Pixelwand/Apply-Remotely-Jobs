import React from 'react'

export default function Footer() {
  return (
    <>
    <div class=" mt-20 pb-36  flex-col">
        <div class="flex flex-row mx-auto gap-10 px-4 mt-10 mb-12">
  <div class="basis-1/4 ">
    <label class="mb-24 font-sans text-lg font-semibold">Overview</label>
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
