import React from "react";
import classes from "./MenuItem.module.scss";

function MenuItem() {
  return (
    <div className={classes.catalog__item}>
      <a href="#" className={classes.catalog__img}>
        <img
          width={262}
          height={262}
          src="https://static.yakitoriya.ru/media/cache/63/1e/631e973c2f1f958214c9d514dcf5e4bb.jpg"
          alt="Ролл зеленый дракон"
        />
      </a>
      <p className={classes.catalog__title}>
        <a href="#">Ролл зеленый дракон</a>
      </p>
      <div className={classes.catalog__description}>
        в слайсах опаленного лосося, авокадо, копченый угорь, сливочный сыр,
        масаго, чука, васаби (7 шт.)
      </div>
      <div className={classes.catalog__bottom}>
        <div className={classes.catalog__price}>
          897 <span>руб.</span>
        </div>
        <div className={classes.catalog__spinner}>
          <button>-</button>
          <input type="text" readOnly placeholder="0" />
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
