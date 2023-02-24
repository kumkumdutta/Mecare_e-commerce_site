import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
const images = [
    { url: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/gun1_1600x.png?v=1676812714" },
          { url: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newyearbanner-4_1600x.png?v=1672417750" },
          { url: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/salebanner1_1600x.png?v=1673019270" },
          
  ];


function ImageSlider() {
  return (
    <div className="box">
      <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
        {images.map((URL, index) => (
          <div className="slide" key={Date.now()}>
            <img alt="sample_file" key={index} src={URL.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}



export default ImageSlider