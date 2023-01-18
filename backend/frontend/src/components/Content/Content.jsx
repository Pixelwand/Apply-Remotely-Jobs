import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa';
import {AiFillPicture} from 'react-icons/ai';
import { Profileone, Profiletwo, Profilethree } from '../../Assets';

export default function Content() {
  return (
    <>
    <div class="bg-white text-black mt-12 flex flex-col mx-auto py-14 w-full justify-center gap-24">
    <div class="basis-1/2">
        <div class="flex flex-col w-full px-10 text-center gap-6">
            <div class="w-16 h-16 bg-blue-600 mx-auto mb-6">
                <center>
                <FaTelegramPlane class="text-white w-8 h-8 mt-4" />
                </center>
            </div>
            <div class="basis-4/5">
                <div class="font-bold font-sans text-2xl mb-5">Choose Your Sections</div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-12 px-10 text-center">
            <div  class="w-16 h-16 bg-blue-600 mx-auto mb-6">
                <center>
                <AiFillPicture  class="text-white w-8 h-8 mt-4"/>
                </center>
            </div>
            <div class="basis-4/5">
                <div class="font-bold font-sans text-2xl mb-5">Add the images and text you need</div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full text-center">
        <div class="text-3xl font-bold mb-6  mx-auto px-6">Create pages using beautiful components.</div>
        <div>
            <p class="mx-auto px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
        <div class="mt-8 ">
            <button class="bg-slate-300 px-6 py-4 hover:bg-slate-600 ">Learn More</button>
        </div>
    </div>
    </div>
    <br/>
    <div  class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class=" justify-center flex-col">
        <div class="flex justify-center flex-col mt-20 max-w-7xl mx-auto">
            <div class="basis-3/5 gap-12" >
                <div class="text-2xl mb-6 mt-14 leading-14 text-slate-400 font-semibold" >FEATURES</div>
                <div class="text-5xl max-w-lg font-bold font-sans mb-10">You’re not just doing business. You’re doing life.</div>
                <div>
                    <ul class="mb-10 mt-20 font-semibold text-base">
                        <li class="mb-8"><span class="mr-8 font-bold text-blue-600 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200">&#x2713;</span>Responsive Components</li>
                        <li class="mb-8"><span class="mr-8 font-bold text-blue-600 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200">&#x2713;</span>Over 50 Sections</li>
                        <li><span class="mr-8 font-bold text-blue-600 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200">&#x2713;</span>Handcrafted Pages</li>
                    </ul>
                </div>
            </div>
            <div class="basis-2/5">
                <img src={Profileone} alt="Profileone" class="h-154 w-126" />
            </div>
        </div>
        <div class="flex flex-col gap-36 mt-40 px-20">
        <div class=" basis-2/5">
            <img src={Profiletwo} class="h-104 w-96 h-96" alt="Profiletwo"/>
        </div>
        <div class="basis-2/5">
        <div class="text-2xl mb-6 mt-14 leading-14 text-slate-400 font-semibold">OUR KNOWLEDGE</div>
        <div  class="text-5xl max-w-lg font-bold font-sans mb-16 " >
        A UI Kit that's Modern & Elegant
        </div>
        <div class="max-w-sm">
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
        </div>
        </div>
        </div>
        <div class="flex flex-col mt-40 mb-80 gap-12 px-20">
            <div class="basis-3/5 mt-16">
            <div class="font-sans font-bold text-2xl text-center">Stamps</div>
            <div class="font-sans font-bold text-2xl text-center w-3/6 mt-5 text-slate-500 ml-36">The Opus UI Kit lets you showcase your work in style. It's helped take our business online</div>
            <div class="font-bold w-18 h-6 text-center mt-10">Alexa</div>
            </div>
            <div class="h-20 w-20 basis-2/5">
                <img src={Profilethree} alt="Profilethree" class="h-96 w-96 " />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
