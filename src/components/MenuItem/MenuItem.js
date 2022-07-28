import React from "react";
import classes from "./MenuItem.module.scss";

<<<<<<< HEAD
function MenuItem({ imgUrl, name, text, price, onClick, onRemove, id, count }) {
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
=======

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
>>>>>>> 23cbcb5d8b2d911af8e17b8f55bd00d290a49e03
        </div>
        <div className={classes.catalog__spinner}>
          {count < 1 ? (
            <button disabled>-</button>
          ) : (
            <button
              onClick={() =>
                onRemove({ name: name, price: price, id: id, count: count - 1 })
              }
            >
              -
            </button>
          )}
          <span>{count}</span>
          <button
            onClick={() =>
              onClick({ name: name, price: price, id: id, count: count + 1 })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
