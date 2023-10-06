import Banner from "../Component/Banner";
import Navbar from "../Component/Nav";
import { Flex, Center, Box, Text, Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
// import ImageSlider from "./imageSlider";
import best from "../images/best.png";
import bestslr from "../images/bestslr.png";
import newss from "../images/newss.png";
import ImageSlider from "../Component/imageSlider";
import SimpleSlider from "../Component/slick";
import LargeWithLogoLeft from "../Component/Footer";
// import MassageChairPage from "./MassageChair";
import { Link as RouterLink } from "react-router-dom";

// import { Carousel } from '@trendyol-js/react-carousel';

function Home() {
  return (
    <>
      <Navbar />
      <Center>
        <Flex flexDirection={"row"} gap={30}>
          <Banner
            main="Massage"
            item1="Massage Chairs"
            item2="Eye"
            item3="Foot & Leg"
            item4="Hand"
            item5="Roller"
            fn1={"/massagechair"}
          />
          <Banner
            main="Wellness"
            item1="Bath"
            item2="Cleansers & Serums"
            item3="CGrooming"
            item4="Hair Care"
            item5="Skin Care"
          />
          <Banner
            main="Sleep"
            item1="Pillows"
            item2="Mattress"
            item3="Bedding"
            item4="Clocks"
            item5="Air Quality"
          />
          <Banner
            main="Home"
            item1="Bathroom"
            item2="Furniture"
            item3="Accent & Decor"
            item4="Kitchen"
            item5="Home Office"
          />
          <Banner
            main="Wine & Bar"
            item1="Glasswear"
            item2="Tech"
            item3="Decanters"
            item4="Gift Sets"
            item5="Tools & Accessories"
          />
          <Banner
            main="Fitness"
            item1="Connected Fitness"
            item2="Yoga"
            item3="Exercise Machines"
            item4="Sports Recovery"
            item5="Accessories"
          />
          <Banner
            main="Outdoor"
            item1="E-Bikes"
            item2="Decor"
            item3="Furniture"
            item4="Gardening"
            item5="Lighting"
          />
          <Banner
            main="Technology"
            item1="Audio"
            item2="Clocks"
            item3="Charging & Batteries"
            item4="Gaming"
            item5="Headphones & Speakers"
          />
          <Banner
            main="Travel"
            item1="Luggage"
            item2="Neck Pillows"
            item3="Accessories"
            item4="Emergency Preparedness"
            item5="Books"
          />
          <Banner
            main="Accessories"
            item1="Bags & Bagpacks"
            item2="Wallets"
            item3="Optical & Sunglasses"
            item4="keychains"
            item5="Watches & jewelry"
          />
          <Banner
            main="Entertainment"
            item1="Discovery"
            item2="Games"
            item3="Halloween"
            item4="Holiday"
            item5="Toys"
          />
        </Flex>
      </Center>

      <Flex flexDirection={"row"} ml={"70px"} mr={"70px"}>
        <Box width={"1000px"} height={"700px"}>
          <ImageSlider />
        </Box>

        <Flex flexDirection={"column"}>
          <Image width={"700px"} height={"300px"} src={bestslr} />
          <Flex
            flexDirection={"row"}
            width={"300px"}
            height={"400px"}
            mr={"70px"}
          >
            <Image
              height={"300px"}
              width={"250px"}
              ml={"5px"}
              mt={"25px"}
              src={newss}
              mr={"40px"}
            />
            <Image height={"300px"} width={"250px"} mt={"25px"} src={best} />
          </Flex>
        </Flex>
      </Flex>
      <Center>
        <Text
          fontFamily={"Georgia, serif"}
          fontSize={"30px"}
          color={"gray.500"}
        >
          BEST SELLER
        </Text>
      </Center>
      <Box width={"1300px"} m={"auto"}>
        <SimpleSlider />
      </Box>

      <Center>
        <Text
          mt={"80px"}
          fontFamily={"sans-serif"}
          fontSize={"30px"}
          mb={"10"}
          color={"gray.500"}
        >
          FEATURED CATEGORIES
        </Text>
      </Center>
      <Center>
        <Grid templateColumns="repeat(6, 1fr)" columnGap={70} rowGap={50}>
          <Flex flexDirection={"column"} justifyContent={"center"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_3_1600x.webp?v=1652917417"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Audio
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <RouterLink to="/massagechair">
              <Image
                width={"150px"}
                height={"150px"}
                src={
                  "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_15_1600x.webp?v=1652917776"
                }
                borderRadius={"full"}
              />
              <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
                Massage Chairs
              </Text>
            </RouterLink>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_5_1600x.webp?v=1652917431"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Foot & Leg Massage
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_6_1600x.webp?v=1652917439"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Neck & Back Massage
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_7_1600x.webp?v=1652917449"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Wine & Bar
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_8_1600x.webp?v=1652917479"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Lighting
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_9_1600x.webp?v=1652917507"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Pillows
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_10_1600x.webp?v=1652917518"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Skincare
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/led_1600x.png?v=1661534692"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              LED light Therapy
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_12_1600x.webp?v=1652917527"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Technology
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_13_1600x.webp?v=1652917545"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Kitchen
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              width={"150px"}
              height={"150px"}
              src={
                "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_14_1600x.webp?v=1652917554"
              }
              borderRadius={"full"}
            />
            <Text fontFamily={"Georgia, serif"} color={"gray.600"} mt={"6px"}>
              Outdoor
            </Text>
          </Flex>
        </Grid>
      </Center>
      <Box
        mt={"50px"}
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        }
      >
        <LargeWithLogoLeft />
      </Box>
    </>
  );
}
export default Home;
