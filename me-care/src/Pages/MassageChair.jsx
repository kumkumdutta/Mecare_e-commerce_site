import ProductSimple from "../Component/card";
import axios from "axios";
import React, { useState } from "react";
import { Box, Image,Text, Flex ,Input,Spacer,Grid, Center} from "@chakra-ui/react";
import LargeWithAppLinksAndSocial from "../Component/Footer";
import Navbar from "../Component/Nav";
import Banner from "../Component/Banner";
import Simple from './singleProductPage'
import PostWithLike from "../Component/cartcard";
import {ColorRing} from 'react-loader-spinner'
const baseURL = "https://mecare-api.onrender.com/mecare/get_product_by_category/eye_massage";

export default function MassageChairPage() {
  const [post, setPost] = React.useState([]);
  const [state,setState] = useState(false);
  let token = localStorage.getItem("token");


  React.useEffect(() => {
    axios.get(baseURL, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
}).then((response) => {
  console.log(response)
  setPost(response.data.result);
  console.log(post,post)
  setState(true);
});
  }, []);

  if (!post) return null;

  return (
    <>
    
    <Navbar/>
    <Center>
    <Flex flexDirection={"row"} gap={30} >
         
        <Banner main="Massage" item1="Massage Chairs" item2="Eye" item3="Foot & Leg" item4="Hand" item5="Roller" fn1={"/massagechair"}/> 
        <Banner main="Wellness" item1="Bath" item2="Cleansers & Serums" item3="CGrooming" item4="Hair Care" item5="Skin Care" /> 
        <Banner main="Sleep" item1="Pillows" item2="Mattress" item3="Bedding" item4="Clocks" item5="Air Quality"/> 
        <Banner main="Home" item1="Bathroom" item2="Furniture" item3="Accent & Decor" item4="Kitchen" item5="Home Office"/> 
        <Banner main="Wine & Bar" item1="Glasswear" item2="Tech" item3="Decanters" item4="Gift Sets" item5="Tools & Accessories"/> 
        <Banner main="Fitness" item1="Connected Fitness" item2="Yoga" item3="Exercise Machines" item4="Sports Recovery" item5="Accessories"/> 
        <Banner main="Outdoor" item1="E-Bikes" item2="Decor" item3="Furniture" item4="Gardening" item5="Lighting"/> 
        <Banner main="Technology" item1="Audio" item2="Clocks" item3="Charging & Batteries" item4="Gaming" item5="Headphones & Speakers"/> 
        <Banner main="Travel" item1="Luggage" item2="Neck Pillows" item3="Accessories" item4="Emergency Preparedness" item5="Books"/> 
        <Banner main="Accessories" item1="Bags & Bagpacks" item2="Wallets" item3="Optical & Sunglasses" item4="keychains" item5="Watches & jewelry"/> 
        <Banner main="Entertainment" item1="Discovery" item2="Games" item3="Halloween" item4="Holiday" item5="Toys"/>
        </Flex>
        </Center> 
    

    <Center>
      <Box>

      <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
        {state ?  post.map((el)=>(<PostWithLike image={el.image} price={el.price} title={el.title} category={el.category} id={el.id}/>)) : <ColorRing
  visible={true}
  height="80"
  width="80"

  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}

     
      
    </Grid>
    
      </Box>
        
    </Center>
   <LargeWithAppLinksAndSocial/>
    
    </>
    
  );
}