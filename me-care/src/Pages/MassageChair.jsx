import ProductSimple from "../Component/card";
import axios from "axios";
import React from "react";
import { Box, Image,Text, Flex ,Input,Spacer,Grid, Center} from "@chakra-ui/react";
import LargeWithAppLinksAndSocial from "../Component/Footer";
import Navbar from "../Component/Nav";

const baseURL = "http://localhost:8080/massagechair";

export default function MassageChairPage() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
    <Navbar/>
    <Center>
        <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
      {post.map((el)=>(<ProductSimple image={el.image} price={el.price} title={el.title} category={el.category}/>))}
      
    </Grid>
    
    </Center>
   <LargeWithAppLinksAndSocial/>
    
    </>
    
  );
}