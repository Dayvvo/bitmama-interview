import Slider from "react-slick";

const Carousel = ({children})=>{

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
            {children}
        </Slider>
      </div>
    );

}

export default Carousel;