import React from 'react';
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure,
    Box,
    CloseButton,
    Button
  } from '@chakra-ui/react'


export const Banner = () => {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
        <div className='bg-indigo-600'>
      <Alert status='success' bg="indigo-600" >
        <AlertIcon />
        <Box>
          <AlertTitle>
          <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </AlertTitle>
          <AlertDescription>
            
            Your application has been received. We will review your application
            and respond within the next 48 hours.
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
      </div>
) : (
      <Button onClick={onOpen}>Show Alert</Button>
    )
  }