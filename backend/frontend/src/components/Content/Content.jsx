import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
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
                <div class="font-bold font-sans text-2xl mb-5 sm:text-3xl">Choose Your Sections</div>
                <div>
                    <p className='sm:text-xl sm:font-medium sm:w-2/3 sm:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
                <div class="font-bold font-sans text-2xl mb-5 sm:text-3xl sm:w-2/3 sm:mx-auto">Add the Logo and information for remote jobs</div>
                <div>
                    <p className='sm:text-xl sm:font-medium sm:w-2/3 sm:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full text-center">
        <div class="text-3xl font-bold mb-6  mx-auto px-6">Post jobs using our Job Posting section.</div>
        <div>
            <p class="mx-auto px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
        <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 7 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Yes.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
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
                <div class="text-5xl max-w-lg font-bold font-sans mb-10">You’re not just finding remote jobs. You’re finding life.</div>
                <div>
                    <ul class="mb-10 mt-20 font-semibold text-base">
                        <li class="mb-8"><span class="mr-8 font-bold text-blue-600 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200">&#x2713;</span>Responsive Components</li>
                        <li class="mb-8"><span class="mr-8 font-bold text-blue-600 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200">&#x2713;</span>Over 50 Sections</li>
                        <li><span class="mr-8 font-bold text-blue-600 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200">&#x2713;</span>Handcrafted Pages</li>
                    </ul>
                </div>
            </div>
            <div class="basis-2/5">
                <img src={Profileone} alt="Profileone" className="w-full rounded-xl" />
            </div>
        </div>
        <div class="flex flex-col gap-16 mt-24">
        <div class="basis-2/5">
        <div class="text-2xl mb-6 mt-14 leading-14 text-slate-400 font-semibold">OUR KNOWLEDGE</div>
        <div  class="text-3xl max-w-lg font-bold font-sans mb-16 " >
        A Hiring process that's Modern & Elegant
        </div>
        <div class="max-w-sm">
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
        </div>
        </div>
        <div class=" basis-2/5">
            <img src={Profiletwo} class="w-full rounded-xl" alt="Profiletwo"/>
        </div>
        </div>
        <div class="flex flex-col mt-16 gap-12">
            <div class=" mt-16">
            <div class="font-sans font-bold text-2xl text-center">Kriyax</div>
            <div class="font-sans font-bold text-2xl text-center mt-5 text-slate-500 ">Apply Remotely lets you showcase your hiring post in style. It's helped take best people in our team.</div>
            <div class="font-bold w-18 h-6 text-center mt-10">Deep</div>
            </div>
            <div class="">
                <img src={Profilethree} alt="Profilethree" class="w-full rounded-xl " />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
