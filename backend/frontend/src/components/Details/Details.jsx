import React from 'react';
import {ImArrowUpLeft2} from 'react-icons/im';
import {RiRocketFill} from 'react-icons/ri'

export default function Details() {
  return (
    <>
    <div class="mt-20">
    <div class="font-bold text-3xl text-center">Trusted and loved by world's best team</div>
    <div class="flex text-center font-bold text-slate-700 flex-col  mt-24 gap-12">
    <div class="">
      <div class="text-3xl">Applicants</div>
    <div class="basis-1/2">
    <div class="my-2 font-bold text-3xl">99.95%</div>
    <div class="my-2 font-semibold text-xl">Accuracy Rate</div>
    <div class="text-slate-600 font-sans">In getting qualified applicants</div>
    </div>
    </div>
    <div class="">
      <div className='text-3xl'>Candidates</div>
      <div className="basis-1/2">
    <div className="my-2 font-bold text-3xl">5,000+</div>
    <div className="my-2 font-semibold text-xl">Qualified candidates</div>
    <div className="text-slate-600 font-sans">choose best candidates</div>
    </div>
    </div>
    <div class="">
      <div className='text-3xl'>Hiring Rate</div>
      <div class="basis-1/2">
    <div class="my-2 font-bold text-3xl">99.96%</div>
    <div class="my-2 font-semibold text-xl">Of hiring reate on time</div>
    <div class="text-slate-600 font-sans">within three weeks</div>
    </div>
    </div>
    <div class="">
      <div className='text-3xl'>Remote Jobs</div>
      <div class="basis-1/2">
    <div class="my-2 font-bold text-3xl">#1</div>
    <div class="my-2 font-semibold text-xl">for finding Remote Jobs</div>
    <div class="font-sans text-slate-600 ">around the world</div>
    </div>
    </div>
    
    
    
    
    </div>
    <div class="text-center">
    <div class="text-3xl font-semibold text-center mb-10 font-sans mt-12">Are Remote Jobs secure? By Kunal Kushwaha</div>
    <div>
<iframe className='w-full h-60 px-2' src="https://www.youtube.com/embed/asg9lBbxLHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="max-w-lg">
      <p className='px-4 mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
    </div>
    </div>
    <div class="flex justify-center flex-col  w-full mx-auto gap-32 mt-20 pb-10">
      <div class="">
        <div class="text-3xl mb-8 font-sans font-bold w-full px-4 text-center">Make your career better with Remote Jobs</div>
        <div class="text-center w-full px-8 text-slate-600 font-sans font-normal mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
</div>
        <div class="text-center text-white">
          <button class="bg-blue-600 py-3 px-6 hover:bg-blue-800">Learn More</button>
        </div>
      </div>
      <div class="text-center font-bold text-2xl font-sans">
      <div class="mb-12 w-5/6 text-center mx-auto "> <ImArrowUpLeft2 class="text-blue-600 font-bold mx-auto" /> Find or Apply for Remote Jobs in Seconds
</div>
      <div class="w-5/6 mx-auto text-center"> <RiRocketFill class="text-blue-600 font-bold mx-auto" />Our search section is made for creativity.
</div>
      </div>
    </div>
    </div>
    </>
  )
}
