
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import {
    Flex,
    Image,
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
 
  useColorModeValue,
} from '@chakra-ui/react';
// import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';





export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text fontSize={"2xl"} mb={"10px"}>Company</Text>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"2xl"} mb={"10px"}>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"2xl"} mb={"10px"}>Legal</Text>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize={"2xl"} mb={"10px"}>Install App</Text>
           <Image src={"https://tse4.mm.bing.net/th?id=OIP.fn_qr7uzdYZfa8zVcFbNYgHaCj&pid=Api&P=0"} height={"60px"} width={"180px"}/>
           <Image src={"https://tse4.mm.bing.net/th?id=OIP.565KyTxmO9dV3WDTaevTvQHaCq&pid=Api&P=0"} height={"60px"} width={"180px"}/>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>©️ 2023 meCare. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
          <Flex borderRadius={'full'} width={"40px"} flexDirection={"column"} height={"40px "} pl={"12px"}  backgroundColor={"gray.300"} justifyContent={"center"} ><BsTwitter  /></Flex>
            
            <Flex borderRadius={'full'} width={"40px"} flexDirection={"column"} height={"40px "}  pl={"12px"}  backgroundColor={"gray.300"} justifyContent={"center"}><BsYoutube  /></Flex>
           
              
              <Flex borderRadius={'full'} width={"40px"}  flexDirection={"column"} height={"40px "}  pl={"12px"} backgroundColor={"gray.300"} justifyContent={"center"}><BsInstagram /></Flex>
           
              
            
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}