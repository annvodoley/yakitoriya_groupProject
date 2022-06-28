import React from 'react';
import classes from "./Slider.module.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import title from '../image/slider/yakitoria_restaurant.jpg'

const Slider = () => {
    return (
        <Splide
            options= { {
                rewind: true,
                direction: 'ttb',
                arrows: false,
                cover      : true,
                height: '100vh',
                autoplay: 'playing',
                autoScroll: {
                    speed: 100,
                    autoStart: true,
                    rewind: true,
                },
                wheel       : true,
                releaseWheel: true,
            } }
            aria-label="React Splide Example">
            <SplideSlide className={'splide__pagination_splide__pagination--ttb'}>
                <img src={title} alt={'title'}/>
            </SplideSlide>
            <SplideSlide>
                <img src={title} alt={'title'}/>
            </SplideSlide>
        </Splide>
    );
};

export default Slider;