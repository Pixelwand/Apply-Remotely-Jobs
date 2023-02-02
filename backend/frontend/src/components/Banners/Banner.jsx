// // import { useState } from 'react';
// // import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline';

// // export default function Banner() {
// //     const [hide, setHide] = useState(true)
// //     const clear = ()=>{
// //         setHide(!hide)
// //     }
// //   return (
// //     <div className="bg-indigo-600" id="news">
// //       <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
// //         <div className="flex flex-wrap items-center justify-between">
// //           <div className="flex w-0 flex-1 items-center">
// //             <span className="flex rounded-lg bg-indigo-800 p-2">
// //               <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
// //             </span>
// //             <p className="ml-3 truncate font-medium text-white">
// //               <span className="md:hidden">Free remote jobs posting!</span>
// //               <span className="hidden md:inline">Big news! We're excited to announce Free Remote Jobs posting.</span>
// //             </p>
// //           </div>
// //           <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
// //             <a
// //               href="/"
// //               className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
// //             >
// //               Learn more
// //             </a>
// //           </div>
// //           <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
// //             <button
// //               type="button"
// //               onClick={clear}
// //               className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
// //             >
// //               <span className="sr-only">Dismiss</span>
// //               <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// import React from 'react'
// import {
//     Alert,
//     AlertIcon,
//     AlertTitle,
//     AlertDescription,
//     useDisclosure,
//     Box,
//     CloseButton,
//     Button
//   } from '@chakra-ui/react'


// export const Banner = () => {
//     const {
//       isOpen: isVisible,
//       onClose,
//       onOpen,
//     } = useDisclosure({ defaultIsOpen: true })
  
//     return isVisible ? (
//       <Alert status='success'>
//         <AlertIcon />
//         <Box>
//           <AlertTitle>Success!</AlertTitle>
//           <AlertDescription>
//             Your application has been received. We will review your application
//             and respond within the next 48 hours.
//           </AlertDescription>
//         </Box>
//         <CloseButton
//           alignSelf='flex-start'
//           position='relative'
//           right={-1}
//           top={-1}
//           onClick={onClose}
//         />
//       </Alert>
//     ) : (
//       <Button onClick={onOpen}>Show Alert</Button>
//     )
//   }