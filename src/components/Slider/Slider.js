import React from 'react';
import classes from "./Slider.module.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import title from '../image/slider/yakitoria_restaurant.jpg';
import spl1 from '../../images/spl1.jpeg';
import monsters from '../image/slider/monsters.jpg';


const Slider = (props) => {
    return (
        <Splide
            className={classes.Slider_module}
            options= { {
                direction: 'ttb',
                arrows: false,
                cover: true,
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
                <div className={classes.Slider_module}>
                    <img src={spl1}  className={classes.Slider_module_img} alt=""/>
                    {/*<div className={classes.Slider_module_img} style={{*/}
                    {/*    backgroundImage: `url(${monsters})`}}>*/}
                    {/*    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >{props.link}</a></h2>*/}
                    {/*</div>*/}
                </div>
            </SplideSlide>
            <SplideSlide>
                <img src={spl1}  className={classes.Slider_module_img} alt=""/>
                {/*<div className={classes.Slider_module_img} style={{*/}
                {/*    backgroundImage: `url(${title})`}}>*/}
                {/*    /!*<h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"Бизнес ланчи"</a></h2>*!/*/}
                {/*</div>*/}
            </SplideSlide>
            <SplideSlide>
                <img src={spl1}  className={classes.Slider_module_img} alt=""/>
                {/*<div className={classes.Slider_module_img} style={{*/}
                {/*    backgroundImage: `url(${kombo})`}}>*/}
                {/*    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"Комбо наборы – выгодно и удобно!"</a></h2>*/}
                {/*</div>*/}
            </SplideSlide>
            <SplideSlide>
                <img src={spl1}  className={classes.Slider_module_img} alt=""/>
                {/*<div className={classes.Slider_module_img} style={{*/}
                {/*    backgroundImage: `url(${busenessLunch})`}}>*/}
                {/*    <img src={busenessLunch}  className={classes.Slider_module_img} alt=""/>*/}
                {/*    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"БЕНТО- ЛАНЧИ с ДОСТАВКОЙ"</a></h2>*/}
                {/*</div>*/}
            </SplideSlide>
            <SplideSlide>
                <img src={spl1}  className={classes.Slider_module_img} alt=""/>
                {/*<div className={classes.Slider_module_img} style={{*/}
                {/*    backgroundImage: `url(${lunchSell})`}}>*/}
                {/*    <h2><a href={''} target={'_blank'} className={classes.Slider_module_link} >"-10 % на доставку"</a></h2>*/}
                {/*</div>*/}
            </SplideSlide>
        </Splide>
    );
};

export default Slider;
