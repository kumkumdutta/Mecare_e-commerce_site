import ProductSimple from "../Component/card";
import axios from "axios";
import React, { useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Input,
  Spacer,
  Grid,
  Button,
  Center,
  Heading,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import LargeWithAppLinksAndSocial from "../Component/Footer";
import Navbar from "../Component/Nav";
import Banner from "../Component/Banner";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import toast from "react-hot-toast";
// import Simple from './singleProductPage'
const baseURL = "https://mecare-api.onrender.com/cart";

export default function Cart() {
  const [post, setPost] = React.useState([]);
  const [Total, setTotal] = React.useState(0);

  function getdata() {
    axios.get(baseURL).then((response) => {
      // console.log(response.data)
      setPost(response.data);
    });
    console.log(post);
  }
  React.useEffect(() => {
    getdata();
  }, []);

  const HandleDelete = (id) => {
    return axios({
      method: "delete",
      url: `https://mecare-api.onrender.com/cart/${id}`,
    }).then(() => {
    toast.success("item deleted")
    localStorage.clear()
    getdata()})
    
  };
  const handleQuantity = (id, Quantity, val) => {
    post.map((el) => (el.id === id ? (Quantity = Quantity + val) : Quantity));
    axios
      .patch(`${baseURL}/${id}`, {
        Quantity: Quantity,
      })
      .then(() => getdata());
  };
  useEffect(() => {
    let Total = 0;
    post?.forEach((item) => (Total += +item.price * +item.Quantity));
    setTotal(Total);
    console.log(typeof Total);
  }, [post]);

  return (
    <>
      <>
        <Heading mt={50} fontFamily={"sans-serif"}>
          Cart Page
        </Heading>
        <Center maxWidth={2000} ml={100} mb={100}>
          <Flex width={1500}>
            <Grid gap={5}>
              {post?.map((cart) => (
                <GridItem
                  key={cart.id}
                  m={"auto"}
                  display="flex"
                  boxSizing="border-box"
                >
                  <HStack gap={4}>
                    <Box>
                      <Image
                        src={cart.image}
                        alt="cart image"
                        h={150}
                        w={150}
                      />
                    </Box>
                    <Box>
                      <Text fontSize={18}>{cart.Category}</Text>

                      {/* Buttons Quantity */}
                    </Box>
                  </HStack>
                  <HStack gap={10}>
                    <Box ml={10}>
                      <Button
                        bg={"red.400"}
                        isDisabled={cart.Quantity === 1}
                        onClick={() =>
                          handleQuantity(cart.id, cart.Quantity, -1)
                        }
                      >
                        -
                      </Button>

                      <Button isDisabled>{cart.Quantity}</Button>

                      <Button
                        bg={"green.400"}
                        onClick={() =>
                          handleQuantity(cart.id, cart.Quantity, 1)
                        }
                      >
                        +
                      </Button>
                      {/* <Select  onChange ={ handleChange(cart.id, cart.Quantity, ) }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select> */}
                    </Box>
                    <Box>
                      <Text fontSize={16}>{`₹ ${
                        +cart.price * cart.Quantity
                      }`}</Text>
                    </Box>
                    <Box>
                      <Button onClick={() => HandleDelete(cart.id)}>
                        <DeleteIcon />
                        {/* <CloseIcon/> */}
                      </Button>
                    </Box>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
            {/* order Summary */}
            <Box
              m={"auto"}
              h={400}
              w={300}
              lineHeight={10}
              boxShadow={
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              }
              padding={25}
            >
              <Heading fontSize={21} mt={10}>
                Order Summary{" "}
              </Heading>
              <Flex justifyContent={"space-between"}>
                <Text>Shipping + Tax (18% GST)</Text>
                <Text>{`₹ ${Total + 100}`}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>{`₹ ${Total + 100}`}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Coupon Code 10%off </Text>
                <Text>Rishabh40</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Total</Text>
                <Text>{`${(Total - (Total / 100) * 10).toFixed(2)}`}</Text>
              </Flex>
              <RouterLink to="/Checkout">
                <Button bg="blue.300" padding="0,70px">
                  Place Order
                </Button>
              </RouterLink>
            </Box>
          </Flex>
        </Center>
      </>
    </>
  );
}
