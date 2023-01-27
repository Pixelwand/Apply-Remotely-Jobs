import React from 'react'
import { Workone, Worktwo, Workthree } from '../../Assets'
export default function Work() {
  return (
    <>
    <div class="bg-blue-700 text-white font-sans w-full">
        <div class="flex flex-row px-6 gap-6 py-12">
            <div class=" basis-1/2 font-bold text-2xl ">Ways to post Remote Jobs</div>
              <div className='basis-1/2'>
            <button class=" bg-green-600 relative top-3 px-8 py-3 rounded-3xl font-bold hover:bg-blue-500">Get Started</button>
            </div>
        </div>
        <div class="pb-10">
        <div class="flex flex-col justify-center gap-28 mx-auto max-w-7xl px-4 sm:px-6">
      <div class="basis-1/4">
        <div>
          <div class="h-14 w-14 absolute float-right bg-blue-600"></div>
          <img src={Workone} alt="Im" class="w-76 h-80 top-6 left-6 rounded-xl" />
        </div>
        <div class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2 class="font-bold text-2xl mb-5">A high converting, high-performing qualified candidates platform</h2>
        <div>
          <p>Develop a clear and compelling value proposition: Clearly: Clearly communicate the benefits of working with your company an what sets you apart from competitors.</p>
        </div>
        </div>
      </div>
      <div class="basis-1/4">
      <div>
          <img src={Worktwo} alt="Ima"  class="w-76 h-80 top-6 left-6 rounded-xl" />
        </div>
        <div class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2  class="font-bold text-2xl mb-5">With a clean, minimal and professional process</h2>
        <div>
          <p>Optimize your recruitment process: Streamline your recruitment process to make it as efficient and candidate friendly as possible.</p>
        </div>
        </div>
      </div>
      <div class="basis-1/4 pb-5">
      <div>
          <img src={Workthree} alt="Imag"  class="w-76 h-80 top-6 left-6 rounded-xl" />
        </div>
        <div  class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2  class="font-bold text-2xl mb-5">ARJ made hiring managers life easy</h2>
        <div>
          <p className='font-sans leading-6 font-normal'>Crete a strong employer brand that resonates with top talent and sets your company apart as  a greate place to work.</p>
        </div>
        </div>
      </div>
        </div>
    </div>
    </div>
    </>
  )
}
