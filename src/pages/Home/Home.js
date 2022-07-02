import React from 'react';
import classes from './Home.module.scss'
import Header from '../../components/Header/Header';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div className={classes.Home}>
            <Header/>
            <div className={classes.MainContent}>
                <AsideMenu/>
                <Slider/>
            </div>
        </div>
    );
};

export default Home;
