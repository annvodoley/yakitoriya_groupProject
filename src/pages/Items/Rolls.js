import React from "react";
import classes from "./Items.module.scss";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchRollsAction } from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";

function Rolls() {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  const rolls = useSelector((state) => state.RollsReducer.rolls);

  React.useEffect(() => {
    dispatch(fetchRollsAction());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={classes.itemsWrapper}>
      <h1>Роллы</h1>
      <div className={classes.itemsFilter}>
        <div>
          <span>Фильтр</span>
          <span>Сортировать по цене</span>
        </div>
        <div className={classes.filterReset}>
          <span>
            <span>x</span> Сбросить фильтры
          </span>
        </div>
      </div>
      {isLoading
        ? [...Array(9)].map((item) => {
            return (
              <div className={classes.ldsRipple}>
                <div></div>
                <div></div>
              </div>
            );
          })
        : rolls.map((item) => {
            return (
              <MenuItem
                imgUrl={item.imgUrl ? item.imgUrl : ""}
                name={item.name ? item.name : ""}
                text={item.desc ? item.desc : ""}
                price={item.price ? item.price : ""}
              />
            );
          })}
    </div>
  );
}

export default Rolls;
