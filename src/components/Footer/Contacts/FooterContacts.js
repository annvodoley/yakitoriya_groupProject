import React from 'react';
import icon from "../../../images/yakitoria_logo.svg";
import classes from "./Contacts.module.scss";
import {Link} from "react-router-dom";

const FooterContacts = () => {
    return (
        <div className={classes.Footer__contacts}>
            <div className={classes.Footer__contacts_logo}>
            <Link to="home">
                <img src={icon} className={classes.Footer__contacts_logo_icon}/>
            </Link>
            </div>
            <div className={classes.Footer__contacts_txt}>
                <p>Доставка суши — онлайн сервис заказа суши и других блюд в Москве.</p>
                <p>ООО "Авион" ОГРН 1163926058340</p>
                <p>
                    Прием заказов: ВС-ЧТ c 10:00 до 23:30. ПТ, СБ с 10:00 - 01:00
                    Телефон: <a href="tel:+7(4012) 30-10-30">+7(4012) 30-10-30</a>
                </p>
            </div>
        </div>
    );
};

export default FooterContacts;