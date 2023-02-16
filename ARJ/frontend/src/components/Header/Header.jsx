import React, {Fragment} from 'react';
import { useState} from 'react';
import {Tab} from '@headlessui/react'
import Modal from 'react-modal'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {Signup} from '../Authentication/Signup';
import Login from '../Authentication/Login';
import PropTypes from 'prop-types';
import useToken from '../../useToken';




const navigation = [
  { name: 'Home', href: 'http://applyremotelyjobs.co/', current: false },
  { name: 'Jobs', href: 'http://applyremotelyjobs.co/jobs', current: false },
  { name: 'Candidates', href: 'http://applyremotelyjobs.co/candidates', current: false },
  { name: 'About', href: 'http://applyremotelyjobs.co/about', current: false }
]

const customStyles = {
  content: {
    top: '45%',
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
 function Header() {
  const {token, setToken} = useToken();
  
    const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }
  

  return (
    <>
      <div className="min-h-full sm:h-24 sm:pt-5 sm:text-3xl">
        <Disclosure as="nav" className="bg-white text-blue">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl sm:w-full px-4  ">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href='http://applyremotelyjobs.co/' className='text-black font-sans font-extrabold text-2xl ml-5 font-mono sm:text-3xl'>ARJ</a>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 sm:text-center lg:ml-96  flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                          
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-black hover:bg-gray-900 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium sm:text-xl sm:ml-5'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                        {token?
                        <div  className="text-white bg-blue-700 hover:bg-blue-800 sm:text-xl sm:relative sm:left-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 mr-6 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><a href='https://www.applyremotelyjobs.co/dashboard'>Dashboard</a></div>:
                        <button type="button" onClick={openModal} className="text-white bg-blue-700 hover:bg-blue-800 sm:text-xl sm:relative sm:left-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 mr-6 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Get started</button>
                        }
                        </div>
                    </div>
                  </div>
                  
                  <div className="mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    {token?<div className='bg-blue-700 hover:bg-blue-800 my-auto px-5 py-2 text-white font-medium rounded-lg text-base mr-6  dark:hover:bg-blue-700 dark:focus:ring-blue-800'><a href='https://www.applyremotelyjobs.co/dashboard'>Dashboard</a></div>:
                        <button type="button" onClick={openModal} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 mr-6 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Get started</button>
                    }
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
                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-900 hover:text-white',
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
         <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="w-11/12 xl:w-1/3 h-84 mx-auto mt-5 rounded-xl shadow-xl bg-white z-2 p-5"
        >
          <button onClick={closeModal} className="float-right relative left-4 bottom-4"><XMarkIcon className="block h-6 w-6 bg-white text-blue-800 text-end" aria-hidden="true" /></button>
          <Tab.Group>
    <Tab.List className="flex flex-row space-x-1 justify-center rounded-xl p-1 text-sm bg-blue-900/20 mb-3">
      <Tab className="w-full text-blue-700  focus:bg-white py-2.5 font-medium leading-5 rounded-lg focus:shadow default:select-all  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400  focus:outline-none focus:ring-2">Signup</Tab>
      <Tab className="text-blue-700 w-full focus:bg-white py-2.5 focus:shadow rounded-lg leading-5 font-medium ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">Login</Tab>
    </Tab.List>
    <Tab.Panels>
    <Tab.Panel className="xl:text-center">
      <Signup />
    </Tab.Panel>
    <Tab.Panel className="xl:text-center">
      <Login setToken={setToken}/>
    </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
  <div className='text-center font-medium text-black mb-2 text-xl'>Or</div>
  <form className='' p-10 action="http://localhost:8080/auth/google">
          <button type="submit" className="flex flex-row gap-5 mx-auto bg-white text-blue-600 shadow-2xl border-2 border-blue-400 px-4 py-3 rounded-3xl font-bold">
            <span className="google-button__icon">
              <svg viewBox="0 0 366 372" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
            </span>
            <span className="google-button__text">sign in with Google</span>
          </button>
        </form>

        </Modal>
      </div>
    </>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Header