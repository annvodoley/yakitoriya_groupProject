import React from 'react';
import classes from './MenuItem.module.scss';


function MenuItem({imgUrl, name, text, price, onClick, onClick2, addToCart, id, count}) {
    return (
        <div className={classes.catalog__item}>
            <a href="#" className={classes.catalog__img}>
                <img width={262} height={262} src={imgUrl} alt="Ролл зеленый дракон"/>
            </a>
            <p className={classes.catalog__title}>
                <a href="#">{name}</a>
            </p>
            <div className={classes.catalog__description}>{text}</div>
            <div className={classes.catalog__bottom}>
                <div className={classes.catalog__price}>
                    {price} <span>руб.</span>
                </div>
                <div className={classes.catalog__spinner}>
                    <button onClick={() => onClick2(id)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => onClick({name: name, price: price, id: id, count: count+1})}>+</button>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
