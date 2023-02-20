import { Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, FormControl, FormLabel, ModalFooter } from "@chakra-ui/react";
import React, {useRef} from "react";


function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Edit Profile</Button>
        <Button ml={4} ref={finalRef} >
          Logout
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Profile Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder='eg. Frontend Developer' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Portfolio</FormLabel>
                <Input placeholder='eg. website link' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Profile;