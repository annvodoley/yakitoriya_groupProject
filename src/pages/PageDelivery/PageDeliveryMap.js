import React from 'react';
import yand_map from '../../images/yan_map.png'
import classes from "./PageDeliveryMap.module.scss";


function PageDeliveryMap(){
    return (
        <div className={classes.deliveryMap_module}>
            <h2>Карта доставки</h2>
            <span>
                <p>ВС-ЧТ c 10:00 до 23:30. ПТ, СБ с 10:00 - 01:00</p>
            </span>
            <img src={yand_map} alt={''}/>
        </div>

    );
}
export default PageDeliveryMap;