import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, } from '@chakra-ui/react'
import React from 'react'


const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
   <div>
    
    <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>

   </div>
   
  ) 
}

export default SideBar