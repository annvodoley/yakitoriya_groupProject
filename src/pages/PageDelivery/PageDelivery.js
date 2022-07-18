import React from 'react';
import yand_map from '../../images/yan_map.png'
import classes from './PageDelivery.module.scss';
import del_monitor from '../../images/del-monitor.svg';
import del_phone from '../../images/del-phone.svg';
import del_compas from '../../images/del-compas.svg';
import del_clock from '../../images/del-clock.svg';
import del_bag from  '../../images/del-bag.svg';
import del_note from '../../images/del-note.svg';
import del_map from '../../images/del-map.svg';
import del_like from '../../images/del-like.svg';
import del_cart from '../../images/del-cart.svg';
import del_hourglass from '../../images/del-hourglass.svg'


function PageDelivery() {
    return (
        <div className={classes.deliveryMap_module}>
            <div className={classes.deliveryMap_module__wrapper}>
                <h2>Карта доставки</h2>
                <span className={classes.deliveryMap_module_time}>
                <p className={classes.deliveryMap_module_time_par}> ВС-ЧТ c 10:00 до 23:30. ПТ, СБ с 10:00 - 01:00</p>
            </span>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A4df9df42b3a803c7d14151f7ebffcdb3a121559e312a71a0b1be3be3bd565043&amp;source=constructor"
                    width="100%" height="551" frameBorder="0"></iframe>
                <a href={'/'} target={'_blank'} className={classes.deliveryMap_module__link}>Соглашение об использовании
                    персональных данных
                </a>

                <h2>Как сделать заказ</h2>
                <div className={classes.deliveryMap_module__order}>
                    <div className={classes.deliveryMap_module__order_block}>
                        <img src={del_monitor} alt={''}/>
                        <p className={classes.deliveryMap_module__order_txt}>НА САЙТЕ</p>
                        <p className={classes.deliveryMap_module__order_txt2}>Вы можете выбрать блюда в разделе Меню
                            доставки</p>
                    </div>
                    <div className={classes.deliveryMap_module__order_block}>
                        <img src={del_phone} alt={''}/>
                        <p className={classes.deliveryMap_module__order_txt}>ПО ТЕЛЕФОНУ</p>
                        <p className={classes.deliveryMap_module__order_txt2}>+7 (4012) 30-10-30 <p>ВС-ЧТ c 10:00 до
                            23:30.
                            ПТ, СБ с 10:00 - 01:00</p></p>
                    </div>
                </div>
            </div>
            <h2>Как получить заказ</h2>
            <div className={classes.deliveryMap_module__order}>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_compas} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ДОСТАВКА КУРЬЕРОМ</p>
                    <p className={classes.deliveryMap_module__order_txt2}>Вы оплачиваете только заказ, в красной зоне доставка бесплатно от 1000 руб.</p>
                    <a href={'#'} target={'_blank'}>Карта доставки</a>
                </div>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_clock} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ДОСТАВКА В УКАЗАННОЕ ВРЕМЯ</p>
                    <p className={classes.deliveryMap_module__order_txt2}>Укажите время, к которому вы хотите получить заказ, и мы доставим его точно в срок.</p>
                </div>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_bag} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>С СОБОЙ СО СКИДКОЙ 10%.</p>
                    <p className={classes.deliveryMap_module__order_txt2}>Вы можете сами забрать заказ из ближайшего ресторана со скидкой 10% (Кроме праздничных дней).</p>
                </div>
            </div>
            <h2>Условия доставки</h2>
            <div className={classes.deliveryMap_module__delivery}>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_note} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ПРИЕМ ЗАКАЗОВ</p>
                    <p className={classes.deliveryMap_module__order_txt2}>ВС-ЧТ c 10:00 до 23:30. ПТ, СБ с 10:00 - 01:00.</p>
                </div>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_map} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ТЕРРИТОРИЯ ДОСТАВКИ</p>
                    <a href={'#'} target={'_blank'}>Карта доставки</a>
                </div>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_like} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ДОСТАВКА — БЕСПЛАТНО</p>
                    <p className={classes.deliveryMap_module__order_txt2}>Заказы от 1000 руб. в красной зоне доставляются бесплатно, вы оплачиваете только заказ</p>
                </div>
                <div className={classes.deliveryMap_module__order_block}>
                    <img src={del_like} alt={''}/>
                    <p className={classes.deliveryMap_module__order_txt}>ПЛАТНАЯ ДОСТАВКА</p>
                    <p className={classes.deliveryMap_module__order_txt2}>Доставка в зеленую зону карты доставки, осуществляется при заказе от 1300 рублей и дополнительно оплачивается доставка 150 рублей.</p>
                </div>
                    <div className={classes.deliveryMap_module__order_block2}>
                        <img src={del_cart} alt={''}/>
                        <p className={classes.deliveryMap_module__order_txt}>МИНИМАЛЬНАЯ СУММА ЗАКАЗА — 500 РУБ*.</p>
                        <p className={classes.deliveryMap_module__order_txt}>ЗАКАЗ ОТ 500₽ ДО 1000 ₽ - СТОИМОСТЬ ДОСТАВКИ 95 ₽</p>
                        <p className={classes.deliveryMap_module__order_txt2}>*С учетом всех скидок.</p>
                    </div>
                    <div className={classes.deliveryMap_module__order_block}>
                        <img src={del_hourglass} alt={''}/>
                        <p className={classes.deliveryMap_module__order_txt}>ВРЕМЯ ДОСТАВКИ</p>
                        <p className={classes.deliveryMap_module__order_txt2}>Время доставки необходимо уточнять у оператора</p>
                    </div>

            </div>


        </div>

    );
}

export default PageDelivery;
