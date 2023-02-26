import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";

import {Link as RouterLink} from 'react-router-dom'
export default function Checkout(){
return (
    <>
    <Center>
    <Flex width={"50%"} justifyContent={"center"} flexDirection={"column"}>
    <Text fontSize={"2xl"}>Shipping Information</Text>
    <Flex flexDirection={"column"}>
    <Text mr={"600px"}>Full name</Text>
    <Input m={"auto"} placeholder="Enter your full name" type={"text"}width={"400px"}></Input>
    <Text mr={"600px"}>Street address</Text>
    <Input m={"auto"} placeholder="Enter your address" type={"text"} width={"400px"}></Input>
    <Flex flexDirection={"column"}>
    <Text mr={"600px"}>Zip code</Text>
        <Input m={"auto"} placeholder="Zip code" type={"number"} width={"400px"}></Input>
        <Text mr={"600px"}>City</Text>
        <Input m={"auto"} placeholder="City" type={"text"} width={"200px"}></Input>
    </Flex>
    <Text mr={"600px"}>Email Adress</Text>
    <Input m={"auto"} placeholder="Enter Email" type={"email"} width={"200px"}></Input>
    </Flex>
    
    

<Text fontSize={"2xl"} mt={"40px"} mb={"40px"}>Payment Information</Text>
<Flex >
    <Box>
        <Text>Credit card Number</Text>
        <Input m={"auto"} placeholder="Credit card number" type={"number"} width={"200px"}></Input></Box>
        
    <Box>
    <Text>Name on card</Text>
        <Input m={"auto"} placeholder="Enter Name" type={"text"} width={"200px"}></Input></Box>
    </Flex>
    <Flex mb={"40px"}>
    <Box m={"auto"}>
    <Text>Expiry date</Text>
        <Input m={"auto"} placeholder="to" type={"date"} width={"100px"}></Input>
    <Input m={"auto"} placeholder="from" type={"date"} width={"100px"}></Input>
    </Box>
    <Box m={"auto"}>
        <Text>CVV/CVC</Text>
        <Input m={"auto"} placeholder="CVV/" type={"text"} width={"100px"}></Input></Box>
    </Flex>
    <RouterLink to="/success"><Button mt={"60px"} mr={"30px"} width={"300px"} m={"auto"} >Pay</Button></RouterLink>
    
    </Flex>
    
    </Center>
    
</>
)
}