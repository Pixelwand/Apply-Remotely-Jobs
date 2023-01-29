import React from 'react'
import { Workone, Worktwo, Workthree } from '../../Assets'
export default function Work() {
  return (
    <>
    <div class="bg-blue-700 text-white font-sans w-full">
        <div class="flex flex-row px-6 gap-6 py-12 sm:w-full sm:gap-8 sm:px-0 sm:text-center">
            <div class=" basis-1/2 font-bold text-2xl sm:text-4xl">Ways to post Remote Jobs</div>
              <div className='basis-1/2'>
            <button class=" bg-green-600 relative top-3 px-6 py-3 rounded-full sm:text-2xl font-bold sm:h-24 sm:w-60 hover:bg-blue-500">Get Started</button>
            </div>
        </div>
        <div class="pb-10 mt-12">
        <div class="flex flex-col justify-center gap-28 mx-auto w-full px-4 sm:px-6">
      <div class="basis-1/4">
        <div>
          <div class="h-14 w-14 absolute float-right bg-blue-600"></div>
          <img src={Workone} alt="Im" class="w-full top-6 left-6 rounded-xl" />
        </div>
        <div className="mt-8">
        <h2 class="font-bold text-2xl mb-5 sm:text-3xl">A high converting, high-performing qualified candidates platform</h2>
        <div>
          <p className='sm:text-xl sm:font-medium'>Develop a clear and compelling value proposition: Clearly: Clearly communicate the benefits of working with your company an what sets you apart from competitors.</p>
        </div>
        </div>
      </div>
      <div class="basis-1/4">
      <div>
          <img src={Worktwo} alt="Ima"  class="w-full top-6 left-6 rounded-xl" />
        </div>
        <div class="mt-8">
        <h2  className="font-bold text-2xl mb-5 sm:text-3xl">With a clean, minimal and professional process</h2>
        <div>
          <p className='sm:text-xl sm:font-medium'>Optimize your recruitment process: Streamline your recruitment process to make it as efficient and candidate friendly as possible.</p>
        </div>
        </div>
      </div>
      <div class="basis-1/4 pb-5">
      <div>
          <img src={Workthree} alt="Imag"  class="w-full top-6 left-6 rounded-xl" />
        </div>
        <div  class="mt-8">
        <h2  class="font-bold text-2xl mb-5 sm:text-3xl">ARJ made hiring managers life easy</h2>
        <div>
          <p className='font-sans leading-6 font-normal sm:text-xl sm:font-medium'>Crete a strong employer brand that resonates with top talent and sets your company apart as a greate place to work.</p>
        </div>
        </div>
      </div>
        </div>
    </div>
    </div>
    </>
  )
}
