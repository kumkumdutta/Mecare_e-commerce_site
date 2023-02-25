
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
function Banner({main,item1,item2,item3,item4,item5,fn1}){
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
        
            
                
                <MenuItem>{item2}</MenuItem>
                <MenuItem>{item3}</MenuItem>
                <MenuItem>{item4}</MenuItem>
                <MenuItem>{item5}</MenuItem>
            </MenuList>
        </Menu>
    
       
        
        </>
        
    )
}



export default Banner
    
