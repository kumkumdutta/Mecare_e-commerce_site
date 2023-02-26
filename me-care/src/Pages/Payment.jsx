import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {Link as RouterLink} from 'react-router-dom'
export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Payment Successful
      </Heading>
      <Text color={'gray.500'}>
        Happy Shopping!!
      </Text>
      <RouterLink to="/"><Button>Let's shop more</Button></RouterLink>
      
    </Box>
  );
}