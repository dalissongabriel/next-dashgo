import {
  Flex
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { SiderBar } from '../components/SideBar';

export default function dashboard() {
  return (
    <Flex 
      direction="column"
      h="100vh"
    >
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth="1480"
        mx="auto"
        px="6">
          <SiderBar />
      </Flex>
    </Flex>
  )
}
