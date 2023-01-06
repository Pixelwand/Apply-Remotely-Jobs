import React from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default function Header() {
  
  const [value, setValue] = useState('');

  const options = useMemo(() =>countryList().getValues(), []);

  const changeHandler = ()=>{
    setValue(value)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }
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
        <a href="#/" class="text-base font-medium text-gray-500 hover:text-gray-900">Home</a>
        <a href="#/" class="text-base font-medium text-gray-500 hover:text-gray-900">Gigs</a>
        <a href="#/" class="text-base font-medium text-gray-500 hover:text-gray-900">Freelancers</a>  
      </nav>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
       
        <button onClick={openModal} class="ml-8 inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-indigo-600 px-6 text-base py-2  font-medium text-white shadow-sm hover:bg-indigo-700">Signup</button>
        <Modal class="z-20"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
          <Tabs>
    <TabList class="flex flex-row gap-16 justify-center mb-10 font-semibold text-2xl">
      <Tab class="bg-blue-600 hover:bg-blue-800  px-6 py-3 text-white rounded-2xl">Signup</Tab>
      <Tab class="bg-blue-600 hover:bg-blue-800  px-6 py-3 text-white rounded-2xl">Login</Tab>
    </TabList>

    <TabPanel>
    <div class="px-10 pb-10">
            <form>
              <fieldset class="text-center font-semibold text-3xl mb-14">Signup</fieldset>
              <div class="mb-8">
              <label>
                Full Name:
                <input type={"text"} class="ml-10" placeholder='Full Name'/>
              </label>
              </div>
              <div class="mb-8">
              <label>
                Email:
                <input type={"email"} class="ml-10" placeholder='Email'/>
              </label>
              </div>
              <div class="mb-8 ">
                <label>
              
              <div class="flex flex-row gap-10 mb-4">
                <div>Phone No:</div>
                <div>
              <Select options={options} value={value} onChange={changeHandler} />
              </div>
              </div>
              </label>
              <label class="ml-20">
                <input placeholder='Phone Number' />
              </label>
              </div>
              <div>
                <label>
                  Password:
                  <input type={"password"} placeholder="Create New Password" />
                </label>
              </div>
              <div>
                <label>
                 Confirm Password:
                  <input type={"password"} placeholder="Confirm New Password" />
                </label>
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded-xl px-6 py-3" type='submit'>Signup</button>
              </div>
            </form>
          </div>

    </TabPanel>
    <TabPanel>
    <form>
      <fieldset>Login</fieldset>
      <div class="mb-8">
              <label>
                Email:
                <input class="ml-10" type={"email"} placeholder='Email'/>
              </label>
              </div>
              <div class="mb-8">
              <label>
                Password:
                <input class="ml-10" type={"password"} placeholder='Enter Your Password'/>
              </label>
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded-xl px-6 py-3" type='submit'>Login</button>
              </div>
    </form>
    </TabPanel>
  </Tabs>


          
        </Modal>
      </div>
    </div>
  </div>
        <div>
        </div>
      </div>
    </>
  )
}
