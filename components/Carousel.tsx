import Slider from "react-slick";
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
import { Box } from "@chakra-ui/react";

const Carousel=({children,arrows}:{children:any,arrows?:boolean})=>{

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: arrows===undefined?true:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:<Box><BsChevronRight   color={'black'} className="nextArrow"  fontSize={'40px'} /></Box>,
      prevArrow: <Box left={['-30px','-40px','-50px']}> <BsChevronLeft color='black' className="prevArrow" fontSize={'40px'}/> </Box>
  };


    return (
        <Slider {...settings}>
          {children}
        </Slider>
    );
}

export default (Carousel)
