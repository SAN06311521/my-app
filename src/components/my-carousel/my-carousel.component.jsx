import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.style.css";
import slide1 from "../../assets/img/carousel/s1.jpg";
import slide2 from "../../assets/img/carousel/s2.jpg";
import slide3 from "../../assets/img/carousel/s3.jpg";
import MyScroll from '../my-scroll/my-scroll.component';

const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <MyScroll />
        </div>
    );
}

export default MyCarousel;