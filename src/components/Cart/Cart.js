import {BsFillBasket3Fill} from 'react-icons/bs';
import classes from './Cart.module.scss';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function Cart() {

    const CartsReducers = useSelector((state) => state.CartsReducers);

    const sumOrder = () => {
        if (CartsReducers.orderList.length === 0) return
        const allSums = CartsReducers?.orderList?.map((item) => item.price * item.count)
        return allSums?.reduce((accum, currentValue) => accum + currentValue)
    }

    return (
        <div className={classes.flex}>
            <div></div>
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}>
                    <BsFillBasket3Fill className={classes.cartIcon}/>
                    {CartsReducers?.orderList?.length > 0 ? CartsReducers?.orderList.length : 'Пустая корзина'}
                </button>
                <div className={classes.dropdownBox}>
                    <div className={classes.dropdownContent}>
                        <h3 className={classes.dropdownTitle}>Корзина заказа</h3>
                        <div className={classes.dropdownItem}>
                            <div className={classes.dropdownOrder}>
                                <h3>Мой заказ</h3>
                                <span>
                  {sumOrder() || 0} <span>руб.</span>
                </span>
                            </div>
                        </div>
                        <div className={classes.dropdownTotal}>
                            {
                                CartsReducers?.orderList.map(item => {
                                    return(
                                        <div className={classes.menuItemMini}>
                                            <span>{item.name}</span>
                                            <span>{item.count}</span>
                                            <span>{item.price * item.count}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={classes.dropdownTotalPrice}>
                            <span>Общая сумма заказа:</span>
                            <span>
                {sumOrder() || 0} <span>руб.</span>
              </span>
                        </div>
                        <div className={classes.dropdownBtn}>
                            <button>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
