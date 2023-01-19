// import React from 'react';
// import Modal from 'react-modal';
// import Select from 'react-select';
// import { useState, useMemo} from 'react';
// import countryList from 'react-select-country-list';
// import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
// import { Signup } from '../Authentication/Signup';
// import { Login } from '../Authentication/Login';
// import googleButton from './googleButton.css';
// import Dashboard from '../Dashboard/Dashboard';
// import { Collapse } from "flowbite";

// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   function handleLogout(){
//     localStorage.removeItem("token");
//     window.location.reload();
//   }
// ]

// const customStyles = {
//   content: {
//     top: '55%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }


// export default function Header() {
//     // const options = useMemo(() =>countryList().getValues(), []);

// //     const $navbarsticky = document.getElementById("navbar-sticky");

// // // optionally set a trigger element (eg. a button, hamburger icon)
// // const $myDropdown = document.getElementById('myDropdown');

// // // optional options with default values and callback functions
// // const options = {
// //   onExpand: () => {
// //     return true
// //   }
// // };

// // let collapse = new Collapse($navbarsticky, $myDropdown, options);
// //   collapse.expand()


//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function openModal(){
//     setIsModalOpen(true)
//   }

//   function closeModal(){
//     setIsModalOpen(false)
//   }


//   return (
//     <>
    
// <nav class="bg-white w-full  py-2.5 dark:bg-gray-900 fixed z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="container flex flex-wrap items-center justify-between mx-auto">
//   <a href="http://localhost:3000" class="flex items-center">
//       <span class="self-center text-2xl font-bold whitespace-nowrap ml-4 dark:text-white">ARJ</span>
//   </a>
//   <div class="flex md:order-2">
//       {/* <button type="button" onClick={openModal} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center ml-28 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Get started</button>
//       <button data-collapse-toggle="navbar-sticky" onClick={onExpand}  type="button" class="inline-flex ml-4 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"  id='myDropdown'>
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button> */}
    
//     <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//   </div>
//   <Disclosure.Panel className="md:hidden">
//                 <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block px-3 py-2 rounded-md text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pt-4 pb-3">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">{user.name}</div>
//                       <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
//                     </div>
//                     <button
//                       type="button"
//                       className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//   {/* <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="/http://localhost:3000" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="http://localhost:3000/jobs" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Jobs</a>
//       </li>
//       <li>
//         <a href="http://localhost:3000/candidates" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Candidates</a>
//       </li>
//       <li>
//         <a href="http://localhost:3000/about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//     </ul>
//   </div> */}
//   </div>
//   <Modal class="z-2 w-1/2"
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         >
//           <Tabs>
//     <TabList class="flex flex-row gap-16 justify-center mb-10 font-semibold text-2xl">
//       <Tab class="bg-blue-600 hover:bg-blue-800  px-6 py-3 text-white rounded-2xl">Signup</Tab>
//       <Tab class="bg-blue-600 hover:bg-blue-800  px-6 py-3 text-white rounded-2xl">Login</Tab>
//     </TabList>
//     <TabPanel>
//       <Signup />
//     </TabPanel>
//     <TabPanel>
//       <Login />
//     </TabPanel>
//   </Tabs>
//   <form className='ml-12' p-10 action="http://localhost:8080/auth/google">
//           <button type="submit" className="google-button">
//             <span className="google-button__icon">
//               <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
//             </span>
//             <span className="google-button__text">sign in with Google</span>
//           </button>
//         </form>
//         </Modal>

// </nav>

//     </>
//   )
// }

// const navbarsticky = document.getElementById("navbar-sticky");

// // optionally set a trigger element (eg. a button, hamburger icon)
// const myDropdown = document.getElementById('myDropdown');

// // optional options with default values and callback functions

//   function onExpand(navbarsticky, myDropdown){
//     return true
//   }


  import React, {Fragment} from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useState, useMemo} from 'react';
import countryList from 'react-select-country-list';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import { Signup } from '../Authentication/Signup';
import { Login } from '../Authentication/Login';
import googleButton from './googleButton.css';
import Dashboard from '../Dashboard/Dashboard';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: 'http://localhost:3000/', current: true },
  { name: 'Jobs', href: 'http://localhost:3000/', current: false },
  { name: 'Candidates', href: 'http://localhost:3000/', current: false },
  { name: 'About', href: 'http://localhost:3000/', current: false }
]

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white text-blue">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href='http://localhost:3000' className='text-black font-sans font-bold text-xl mr-10'>ARJ</a>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="-mr-2 flex md:hidden">
                          <button type="button" onClick={openModal} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center ml-28 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Get started</button>
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-800 font-bolder hover:text-blue focus:outline-none  ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6 bg-white text-blue-800" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6 bg-white text-blue-800" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
         <Modal class="z-2 w-1/2"
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
      <Signup />
    </TabPanel>
    <TabPanel>
      <Login />
    </TabPanel>
  </Tabs>
  <form className='ml-12' p-10 action="http://localhost:8080/auth/google">
          <button type="submit" className="google-button">
            <span className="google-button__icon">
              <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
            </span>
            <span className="google-button__text">sign in with Google</span>
          </button>
        </form>
        </Modal>
      </div>
    </>
  )
}
