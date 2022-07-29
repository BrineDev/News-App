import cls from './Header.module.css'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  const categoryList = [
    {
      id: 0, 
      title: 'Main',
      to: '/'
    },
    {
      id: 1, 
      title: 'Business',
      to: '/business'
    },
    {
      id: 2, 
      title: 'Entertainment',
      to: '/entertainment'
    },
    {
      id: 3,
      title: 'General',
      to: '/general'
    },
    {
      id: 4,
      title: 'Health',
      to: '/health' 
    },
    {
      id: 5,
      category: 'Science',
      to: '/science'
    }, 
    {
      id: 6,
      title: 'Sports',
      to: '/sports'
    },
    {
      id: 7,
      title: 'Technology',
      to: '/technology'
    },
  ]

  return (
    <div className={cls.root}>
      <h1 className={cls.h1logo}>News</h1>
      <div>
        <BsLayoutTextSidebarReverse 
          className={cls.icon}
          onClick={() => onOpen()}
        />

        <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>News selection</DrawerHeader>
          <DrawerBody>
            <h2 className={cls.h2category}>Categories</h2>
              <ul>
                {
                  categoryList.map(({ id, title, to }) => (
                    <li key={id}>
                      <NavLink 
                        to={to}
                        className={({ isActive }) => {
                          return isActive ? cls.active : null
                        }}
                      >{title}</NavLink>
                    </li>
                  ))
                }
              </ul>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </div>
    </div>
  )
}

export default Header