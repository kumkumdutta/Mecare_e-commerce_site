import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://mecare-api.onrender.com/mecare/auth/login",
        user
      );

      if (res.data.token) {
        toast({
          title: "Login Successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (err) {
      toast({
        title: "Login Failed",
        description: err.response?.data?.message || "Invalid credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      minH="100vh"
      bg="gray.50"
      direction={{ base: "column", md: "row" }}
    >
      {/* Left Banner */}
      <Flex
        flex={1}
        align="center"
        justify="center"
        bgGradient="linear(to-tr, #f6d365, #fda085)"
        color="white"
        px={10}
        py={8}
        textAlign="center"
        direction="column"
      >
        <Box>
          <Heading fontSize="4xl" mb={4}>Welcome to MeCare</Heading>
          <Text fontSize="lg">
            Your wellness, our priority. Login to explore amazing health products.
          </Text>
          <Image
            src="https://i.postimg.cc/fbBkyjgD/undraw-conference-3n82.png"
            alt="E-commerce Illustration"
            mt={6}
            borderRadius="lg"
          />
        </Box>
      </Flex>

      {/* Login Form */}
      <Flex flex={1} align="center" justify="center" px={6} py={12}>
        <MotionBox
          bg="white"
          p={10}
          w="full"
          maxW="400px"
          boxShadow="2xl"
          rounded="xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={6} align="stretch">
            <Heading size="lg" textAlign="center" color="gray.700">
              Login to your account
            </Heading>

            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                <InputRightElement h="full">
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="orange"
              size="lg"
              onClick={handleSubmit}
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
            >
              Login
            </Button>

            <Text textAlign="center" fontSize="sm" color="gray.500">
              Don’t have an account?{" "}
              <Text as="span" color="orange.500" fontWeight="bold">
                Sign up
              </Text>
            </Text>
          </VStack>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
