import React from "react";
import classes from "./Items.module.scss";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useDispatch, useSelector } from "react-redux";
import {fetchSalatsAction, fetchSetsAction, fetchSoupsAction} from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";


function Soups() {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  const soups = useSelector((state) => state.SoupsReducer.soups);

  React.useEffect(() => {
    dispatch(fetchSoupsAction());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div className={classes.Soups}>
      <Header />
      <div className={classes.MainContent}>
        <AsideMenu />
        <div className={classes.itemsWrapper}>
          <h1>супы</h1>
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
            : soups.map((item) => {
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

export default Soups;
