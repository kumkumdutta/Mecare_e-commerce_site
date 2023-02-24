import { Box, Image, Flex ,Input,Spacer} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'
import { FaUser  } from 'react-icons/fa';
import {  BsFillCartFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import Logo from "../images/Logo.png"

function Navbar(){
    return (
        <>
        <Box bg={"gray.100"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>
        <Flex flexDirection={"row"}  >
    <Box ml={9}>
        <Image m={2} borderRadius={5} boxSize={"40px"} width={"200px"} src={Logo} alt='Dan Abramov' />
    </Box>
<Spacer/>
<Box>
    <Flex flexDirection={"row"} >
        <Input htmlSize={8} bg={"white.300"} width='700px' borderColor={"gray.300"}  variant='outline' placeholder='Outline' alignSelf={"center"} />
        <Search2Icon  m={5}/>
    </Flex>
</Box>
<Spacer/>
<Flex flexDirection={"row"} gap={"20px"} alignItems={"center"} mr={100} >
<FaUser />

< IoMdHeart />
<BsFillCartFill />
</Flex>
</Flex>
    </Box>  

        </>
    





    )
}
export default Navbar