import React from "react";
import classes from "./Items.module.scss";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchSasimiAction } from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";

function Sasimi() {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchSasimiAction());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const sasimi = useSelector((state) => state.SasimiReducer.sasimi);

  return (
    <div className={classes.itemsWrapper}>
      <h1>Сасими</h1>
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
        : sasimi.map((item) => {
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

export default Sasimi;
