import React from 'react';
import yand_map from '../../images/yan_map.png'
import classes from "./PageDelivery.module.scss";
import del_monitor from '../../images/del-monitor.svg';
import del_phone from '../../images/del-phone.svg'

function PageDelivery(){
    return (
        <div className={classes.deliveryMap_module}>
            <h2>Карта доставки</h2>
            <span className={classes.deliveryMap_module_time}>🔆
                <p className={classes.deliveryMap_module_time_par}> ВС-ЧТ c 10:00 до 23:30. ПТ, СБ с 10:00 - 01:00</p>
            </span>
            <img src={yand_map} alt={''}/>
            <a href={'/'} target={'_blank'} className={classes.deliveryMap_module__link}>Соглашение об использовании персональных данных
            </a>

            <h2>Как сделать заказ</h2>
            <div className={classes.deliveryMap_module__order}>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_monitor} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>НА САЙТЕ</p>
                    <p className={classes.deliveryMap_module__order_txt2}>Вы можете выбрать блюда в разделе Меню доставки</p>
                </div>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_phone} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ПО ТЕЛЕФОНУ</p>
                    <p className={classes.deliveryMap_module__order_txt2}>+7 (4012) 30-10-30 <p>ВС-ЧТ c 10:00 до 23:30. ПТ, СБ с 10:00 - 01:00</p></p>
                </div>
            </div>
        </div>

    );
}
export default PageDelivery;