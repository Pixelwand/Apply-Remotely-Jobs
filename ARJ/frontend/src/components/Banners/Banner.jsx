// import React from 'react';
// import { MegaphoneIcon } from '@heroicons/react/24/outline'
// import {
//     Alert,
//     AlertTitle,
//     AlertDescription,
//     useDisclosure,
//     Box,
//     CloseButton,
//   } from '@chakra-ui/react'


// export const Banner = () => {
//     const {
//       isOpen: isVisible,
//       onClose,
//     } = useDisclosure({ defaultIsOpen: true })
  
//     return isVisible ? (
//         <div className='bg-indigo-600 pt-14'>
//       <Alert status='success' bg="indigo-600">
       
//         <Box className='flex flex-row gap-6'>
//           <AlertTitle>
//           <MegaphoneIcon className="h-6 w-6 text-white mb-2 " aria-hidden="true" />
//           </AlertTitle>
//           <AlertDescription color={"white"} className="ml-10">
            
//             Free posting of Remote Jobs
//           </AlertDescription>
//         </Box>
//         <CloseButton
//           alignSelf='flex-start'
//           position='relative'
//           top={-1}
//           onClick={onClose}
//           color="white"
//         />
//       </Alert>
//       </div>
// ) : (
//       null
//     )
//   }