import React from "react";
import Slider from "react-slick";
//import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SliderContainer = styled.div`
  background: linear-gradient(210deg,#943cff 0%,#dd45d3 40.13%,#fc9a57 90%);
  color: white;
  padding: 2rem 0 3rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);

`

export default () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 4000
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                <div>
                    <div className="text-center">
                        <h1 className="h1-slider">Fast Service</h1>
                        <p className="p-slider">Get A Policy In Minutes</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h1 className="h1-slider">Insurance Pros</h1>
                        <p className="p-slider">Get An SR-22 Separate From Your Current Insurance</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h1 className="h1-slider">Affordable Coverage</h1>
                        <p className="p-slider">We Only Sell Insurance We Believe In</p>
                    </div>
                </div>
            </Slider>
        </SliderContainer>
    )
}
