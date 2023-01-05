import React from 'react'

export default function Header() {
  return (
    <>
        <div class="relative bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#/">
          <span class="font-bold text-2xl font-sans">Kriyax</span>
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
        </button>
      </div>
      <nav class="hidden space-x-10 md:flex">
        <a href="#/" class="text-base font-medium text-gray-500 hover:text-gray-900">Overview</a>
        <a href="#/" class="text-base font-medium text-gray-500 hover:text-gray-900">Pages</a>
        <a href="#/" class="text-base font-medium text-gray-500 hover:text-gray-900">Template</a>  
      </nav>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
       
        <a href="#/" class="ml-8 inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Contact Us</a>
      </div>
    </div>
  </div>
        <div>
        </div>
      </div>
    </>
  )
}
