import React from 'react'

export default function Footer() {
  return (
    <>
    <div class="ml-32 mt-32 pb-12">
        <div class="flex flex-row mx-auto max-w-7xl px-4 sm:px-6 mt-10">
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
  <div class="basis-1/2 w-auto h-auto">
    <button>
    <input type={"email"} placeholder="Enter your email" class="outline-transparent p-3" />
    <span class="bg-black text-white font-sans p-3">Get Started</span>
    </button>
  </div>
</div>
    </div>
    </>
  )
}
