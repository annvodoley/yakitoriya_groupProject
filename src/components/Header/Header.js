import React from 'react';
import classes from './Header.module.scss'
import icon from '../../images/yakitoria_logo.svg'

const Header = () => {
    return (
        <div className={classes.Header_main}>
            <div className={classes.Header_main__container}>
                <div className={classes.Header_logo}>
                    <img src={icon} className={classes.Header_logo__icon}/>
                </div>
                <nav className={classes.Navigation}>
                    <ul className={classes.Navigation_menu}>
                        <li className={classes.Navigation_menu__item}>
                            <a href="/news/" className={classes.Navigation_menu__links}>Акции</a>
                        </li>
                        <li className={classes.Navigation_menu__item}>
                            <a href="/restaurants/" className={classes.Navigation_menu__links}>Рестораны</a>
                        </li>
                        <li className={classes.Navigation_menu__item}>
                            <a href="/delivery/" className={classes.Navigation_menu__links}>О доставке</a>
                        </li>
                        <li className={classes.Navigation_menu__item}>
                            <a href="/yakitoria/" className={classes.Navigation_menu__links}>Якитория помогает</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;