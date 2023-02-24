import { ReactNode } from 'react';
import Logo from "../images/Logo.png"
import {
    Image,
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';



export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
             <Image src={Logo}/> 
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
          <Text fontSize={"20px"}>Product</Text>
            <Link color={"gray.400"} href={'#'}>Overview</Link>
            <Link color={"gray.400"} href={'#'}>Features</Link>
            <Link color={"gray.400"} href={'#'}>Tutorials</Link>
            <Link color={"gray.400"} href={'#'}>Pricing</Link>
            <Link color={"gray.400"} href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"20px"}>Company</Text>
            <Link color={"gray.400"} href={'#'}>About</Link>
            <Link color={"gray.400"} href={'#'}>Press</Link>
            <Link color={"gray.400"} href={'#'}>Careers</Link>
            <Link color={"gray.400"} href={'#'}>Contact</Link>
            <Link color={"gray.400"} href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"20px"}>Support</Text>
            <Link color={"gray.400"} href={'#'}>Help Center</Link>
            <Link color={"gray.400"} href={'#'}>Terms of Service</Link>
            <Link color={"gray.400"} href={'#'}>Legal</Link>
            <Link color={"gray.400"} href={'#'}>Privacy Policy</Link>
            <Link color={"gray.400"} href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"20px"}>Follow Us</Text>
            <Link color={"gray.400"} href={'#'}>Facebook</Link>
            <Link color={"gray.400"} href={'#'}>Twitter</Link>
            <Link color={"gray.400"} href={'#'}>Dribbble</Link>
            <Link color={"gray.400"} href={'#'}>Instagram</Link>
            <Link color={"gray.400"} href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}