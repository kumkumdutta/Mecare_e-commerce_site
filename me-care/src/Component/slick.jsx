import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box , Image} from "@chakra-ui/react";

import React from "react";
import Slider from "react-slick";


  

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    
  };
  return (
    <Slider {...settings} >
      <Box >
        <Image ml={5} src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/lumina3_1600x.png?v=1675981913"}/>
      </Box >
      <Box >
        <Image src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/glo2_1600x.png?v=1670240759"}/>
      </Box >
      <Box >
        <Image src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/solaris2_1_1600x.png?v=1665670319"}/>
      </Box >
      <Box >
        <Image src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/dog1_1_1600x.jpg?v=1663712086"}/>
      </Box >
      <Box >
        <Image src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_1_copy_1600x.jpg?v=1653328103"}/>
      </Box >
      <Box >
        <Image src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/pitaka_1600x.png?v=1659475653"}/>
      </Box >
      <Box >
        <Image src={"https://cdn.shopify.com/s/files/1/0262/2226/4423/files/ohom3_1600x.png?v=1659475686"}/>
      </Box >
    </Slider>
  );
}