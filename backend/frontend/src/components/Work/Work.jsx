import React from 'react'
import { Workone, Worktwo, Workthree } from '../../Assets'
export default function Work() {
  return (
    <>
    <div class="bg-blue-900 text-white font-sans w-full">
        <div class="flex flex-row px-6 gap-6 py-12">
            <div class=" basis-1/2 font-bold text-2xl ">Ways to work with us</div>
              <div className='basis-1/2'>
            <button class=" bg-blue-600 px-8 py-4 hover:bg-blue-500">Get Started</button>
            </div>
        </div>
        <div class="pb-10">
        <div class="flex flex-col justify-center gap-20 mx-auto max-w-7xl px-4 sm:px-6">
      <div class="basis-1/4">
        <div>
          <div class="h-14 w-14 absolute float-right bg-blue-600"></div>
          <img src={Workone} alt="Im" class="w-76 h-80 top-6 left-6" />
        </div>
        <div class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2 class="font-bold text-2xl mb-5">A high converting, high-performing template</h2>
        <div>
          <p>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
        </div>
        </div>
      </div>
      <div class="basis-1/4">
      <div>
          <img src={Worktwo} alt="Ima"  class="w-76 h-80 top-6 left-6" />
        </div>
        <div class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2  class="font-bold text-2xl mb-5">With a clean, minimal and professional look</h2>
        <div>
          <p>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
        </div>
        </div>
      </div>
      <div class="basis-1/4">
      <div>
          <img src={Workthree} alt="Imag"  class="w-76 h-80 top-6 left-6" />
        </div>
        <div  class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2  class="font-bold text-2xl mb-5">Opus made our journey possible</h2>
        <div>
          <p>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
        </div>
        </div>
      </div>
        </div>
    </div>
    </div>
    </>
  )
}
