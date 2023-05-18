import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ThemeSwitch from './ThemeSwitch'
const NavBar = () => {
  return (
      <div>
          <HStack justifyContent='space-between' padding='10px'>
              <Image src={logo} boxSize='60px'></Image>
              <ThemeSwitch />
          </HStack>
    </div>
  )
}

export default NavBar