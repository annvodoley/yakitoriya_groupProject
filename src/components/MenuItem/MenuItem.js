import React from "react";
import classes from "./MenuItem.module.scss";


function MenuItem({ imgUrl, name, text, price,onClick, onClick2, addToCart}) {



  return (
    <div className={classes.catalog__item}>
      <a href="#" className={classes.catalog__img}>
        <img width={262} height={262} src={imgUrl} alt="Ролл зеленый дракон" />
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
          <button onClick={addToCart >0 && onClick2}>-</button>
          <input value={addToCart} type="text" readOnly placeholder="0" />
          <button onClick={onClick}>+</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
