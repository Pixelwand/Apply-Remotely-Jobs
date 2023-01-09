import React from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useState, useMemo} from 'react';
import countryList from 'react-select-country-list';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import {useForm} from 'react-hook-form';

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
  
  

  const {register, handleSubmit, formState:{errors}} = useForm();

  const formSubmit = async(data) => {
   const response = await fetch("http://localhost:8080/name", {
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify(data)
  
      }).then((res)=>{
        console.log(data)
      })
    
      return () => {
        response.json()
      }
    }
  
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
            <form onSubmit={handleSubmit(formSubmit)}>
              <fieldset class="text-center font-semibold text-base mb-14">Sign up with your email<hr class="mt-3 font-" /></fieldset>
              
              <div class="mb-8 font-xl">
              <label>
                <input onChange={changeHandler}  name='name' type={"text"} class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Enter Your Name'
                {...register("name", {required:true})}
                
                />
              </label>
              {errors.name && <p class="text-red-600 font-normal">please check your Full Name!</p>}
              </div>
              
              <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='email' class="w-72 h-10 pl-5 outline outline-2 outline-offset-1 outline-slate-500 rounded-lg" type={"email"} placeholder='Email'
                {...register("email", {required:true, pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                />
              </label>
              {errors.email && <p class="text-red-600 font-normal">Please check your Email!</p>}
              </div>
              <div class="mb-8 ">
              <label>
                <input name='number' onChange={changeHandler} class="w-72 h-10 pl-5 outline outline-2 outline-offset-1 outline-slate-500 rounded-lg" placeholder='Phone Number'
                {...register("number", {required:true, minLength:10, maxLength:10})}
                ></input>
              </label>
              {errors.number && <p class="text-red-600 font-normal">Please check your phone number!</p>}
              </div>
              <div class="mb-5">
                <label>
                  <input name='password' onChange={changeHandler} class="w-72 h-10 pl-5 outline outline-2 outline-offset-1 outline-slate-500 rounded-lg" type={"password"} placeholder="Create New Password"
                  {...register("password", {required:true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}
                  />
                </label>
                {errors.password && <p class="text-red-600 font-normal">Please check your password!</p>}
              </div>
              <div class="mb-5">
                <input type={"checkbox"} 
                {...register("checkbox", {required:true})}
                />
                <label class="font-sans text-sm ml-5">I agree to the <a href="#/" class="text-blue-700 font-semibold">Terms of Service</a> and <a href='#/' class="font-semibold font-sans text-blue-700">Privacy Policy</a></label>
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded px-6 py-3" type='submit'>Create account</button>
              </div>
            </form>
          </div>

    </TabPanel>
    <TabPanel>
      <div class="px-10 pb-10">
    <form>
      <fieldset  class="text-center font-semibold text-base mb-14">Login with email</fieldset>
      <div class="mb-8">
              <label>
                <input class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans"  type={"email"} placeholder='Email'/>
              </label>
              </div>
              <div class="mb-8">
              <label>
                <input  class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" type={"password"} placeholder='Enter Your Password'/>
              </label>
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded-xl px-6 py-3" type='submit'>Login</button>
              </div>
    </form>
    </div>
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