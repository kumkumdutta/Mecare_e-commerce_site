
import {
    useColorModeValue,
        useDisclosure,
        MenuItem,
        Menu,
        MenuButton,
        MenuList,
    } from "@chakra-ui/react"
    import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
   
    
import {Link as RouterLink} from "react-router-dom"
function Banner({main,item1,item2,item3,item4,item5,fn1,fn2,fn3,fn4,fn5}){
    const { isOpen, onOpen, onClose } = useDisclosure();
    

    return (
        <>
        
       
       
        <Menu 
        isOpen={isOpen}
        >
            <MenuButton
                variant="ghost"
                height={"40px"}
                // mx={1}
                // py={[1, 2, 2]}
                // px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("teal.100", "gray.700"), height:"40px"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
               {main} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <RouterLink to={fn1}><MenuItem>{item1}</MenuItem> </RouterLink>
                  <RouterLink to={fn2}><MenuItem>{item2}</MenuItem> </RouterLink>
                  <RouterLink to={fn3}><MenuItem>{item3}</MenuItem> </RouterLink>
                  <RouterLink to={fn4}><MenuItem>{item4}</MenuItem> </RouterLink>
                  <RouterLink to={fn5}><MenuItem>{item5}</MenuItem> </RouterLink>
        
            
                
                
            </MenuList>
        </Menu>
    
       
        
        </>
        
    )
}



export default Banner
    
