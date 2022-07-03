import React from "react";
import classes from "./Items.module.scss";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalatsAction } from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";

function Salats() {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  const salats = useSelector((state) => state.SalatsReducer.salats);

  React.useEffect(() => {
    dispatch(fetchSalatsAction());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={classes.Salats}>
      <Header />
      <div className={classes.MainContent}>
        <AsideMenu />
        <div className={classes.itemsWrapper}>
          <h1>Салаты</h1>
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
            ? [...Array(3)].map((item) => {
                return (
                  <div className={classes.ldsRipple}>
                    <div></div>
                    <div></div>
                  </div>
                );
              })
            : salats.map((item) => {
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
      </div>
    </div>
  );
}

export default Salats;
