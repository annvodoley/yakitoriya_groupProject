import React from "react";
import classes from "./Slider.module.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import sale from '../image/slider/-10_fon_sajt.jpg';
import spl1 from '../../images/spl1.jpeg';
import monsters from '../image/slider/monsters.jpg'
import kombo from '../image/slider/kombo.jpg'
import blunch from '../image/slider/BLunch.jpg'
import sajt from  '../image/slider/fon_sajt.jpg'
import business_lunch from '../image/slider/busnes_lunch.png'


const Slider = () => {
    return (
        <Splide
            className={classes.Slider_module}
            options= { {
                direction: 'ttb',
                arrows: false,
                // cover: true,
                pagination: true,
                height: '100vh',
                wheel    : true,
                autoplay: 'playing',
                autoScroll: {
                    speed: 2,
                    autoStart: true,
                    rewind: true,
                },
            } }
            aria-label="React Splide Example">
            <SplideSlide>
                <div>
                    {/*<img src={sajt}  className={classes.Slider_module_img} alt=""/>*/}
                    <div className={classes.Slider_module_img} style={{ backgroundImage: `url(${sajt})`}}>
                        <h2><a href={''} target={'_blank'} className={classes.Slider_module_link}>Summer Menu</a></h2>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                {/*<img src={monsters}  className={classes.Slider_module_img} alt=""/>*/}
                <div className={classes.Slider_module_img} style={{ backgroundImage: `url(${monsters})`}}>
                    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"Монстры на каникулах в Якитории"</a></h2>
                </div>
            </SplideSlide>
            <SplideSlide>
                {/*<img src={spl1}  className={classes.Slider_module_img} alt=""/>*/}
                <div className={classes.Slider_module_img} style={{
                    backgroundImage: `url(${spl1})`}}>
                    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >All Colors of Lemonades</a></h2>
                </div>
            </SplideSlide>
            <SplideSlide>
                {/*<img src={business_lunch}  className={classes.Slider_module_img} alt=""/>*/}
                <div className={classes.Slider_module_img} style={{
                    backgroundImage: `url(${business_lunch})`}}>
                    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"БЕНТО- ЛАНЧИ с ДОСТАВКОЙ"</a></h2>
                </div>
            </SplideSlide>
            <SplideSlide>
                {/*<img src={kombo}  className={classes.Slider_module_img} alt=""/>*/}
                <div className={classes.Slider_module_img} style={{
                    backgroundImage: `url(${kombo})`}}>
                    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"Комбо наборы – выгодно и удобно!"</a></h2>
                </div>
            </SplideSlide>
            <SplideSlide>
                {/*<img src={sale}  className={classes.Slider_module_img} alt=""/>*/}
                <div className={classes.Slider_module_img} style={{
                    background: `url(${sale})`,backgroundRepeat: 'no-repeat', backgroundPositionY: 'center', filter: 'brightness(0.7)', backgroundSize: 'cover',objectFit: 'cover'}}>
                    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >-10 % на доставку</a></h2>

                </div>
            </SplideSlide>
            <SplideSlide>
                {/*<img src={blunch}  className={classes.Slider_module_img} alt=""/>*/}
                <div className={classes.Slider_module_img} style={{
                    backgroundImage: `url(${blunch})`}}>
                    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"Бизнес ланчи"</a></h2>
                </div>
            </SplideSlide>
        </Splide>
    );
};

export default Slider;
