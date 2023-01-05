import React from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';

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

  const options = useMemo(() =>countryList().getData(), []);

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
          <div>
            <form>
              <fieldset>Signup</fieldset>
              <label>
                Full Name:
                <input />
              </label>
              <label>
                Email:
                <input />
              </label>
              <div>
              <Select class="w-1/3" options={options} value={value} onChange={changeHandler} />
              </div>
              <input />
            </form>
          </div>

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
