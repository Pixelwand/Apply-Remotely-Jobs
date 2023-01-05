import { Resone, Restwo, Resthree } from "../../Assets"

export default function Resources() {
  return (
    <>
  
    <div class="flex justify-center flex-row mx-auto max-w-7xl px-4c mt-10 sm:px-6">
    <div class="basis-1/2 text-xl">
        <div class="text-5xl font-sans font-bold">Resources</div>
    </div>
    <div class="left-40 relative">
    <button class="basis-1/2 bg-blue-700 text-white px-8  py-4 hover:bg-blue-800">Get Started</button>
    </div>
    </div>
    <br/>
    <br/>
    <div class="flex flex-row justify-center gap-20 mx-auto max-w-7xl px-4 sm:px-6">
      <div class="basis-1/4">
        <div>
          <img src={Resone} alt="Image-1" class="w-76 h-80 top-6 left-6" />
        </div>
        <div class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2 class="font-bold text-2xl mb-5">A high converting, high-performing template</h2>
        <div>
          <p>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
        </div>
        </div>
        <div class="mt-8">
          <button class="bg-gray-200 py-3 px-5 font-medium hover:bg-gray-500">Read more</button>
        </div>
      </div>
      <div class="basis-1/4">
      <div>
          <img src={Restwo} alt="Image-2"  class="w-76 h-80 top-6 left-6" />
        </div>
        <div class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2  class="font-bold text-2xl mb-5">With a clean, minimal and professional look</h2>
        <div>
          <p>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
        </div>
        </div>
        <div  class="mt-8">
          <button class="bg-gray-200 py-3 px-5 font-medium hover:bg-gray-500">Read more</button>
        </div>
      </div>
      <div class="basis-1/4">
      <div>
          <img src={Resthree} alt="Image-3"  class="w-76 h-80 top-6 left-6" />
        </div>
        <div  class="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
        <h2  class="font-bold text-2xl mb-5">Opus made our journey possible</h2>
        <div>
          <p>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
        </div>
        </div>
        <div class="mt-8">
          <button class="bg-gray-200 py-3 px-5 font-medium hover:bg-gray-500">Read more</button>
        </div>
      </div>
    </div>
    </>
  )
}
