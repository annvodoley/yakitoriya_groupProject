import { BsFillBasket3Fill } from "react-icons/bs";
import classes from "./Cart.module.scss";
import { useSelector } from "react-redux";

function App() {
  const { orderList } = useSelector((state) => state.CartsReducers);
  const allPrices = orderList.map((obj) => obj.price);
  console.log(allPrices);
  const totalPrice = allPrices.reduce((sum, obj) => obj + sum, 0);
  const totalCount = orderList.reduce((sum, obj) => obj.count + sum, 0);

  console.log(totalCount);

  return (
    <div className={classes.flex}>
      <div></div>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>
          <BsFillBasket3Fill className={classes.cartIcon} />
          {totalCount ? `${totalCount} | ${totalPrice}` : "Пустая корзина"}
        </button>
        <div className={classes.dropdownBox}>
          <div className={classes.dropdownContent}>
            <h3 className={classes.dropdownTitle}>Корзина заказа</h3>
            <div className={classes.dropdownItem}>
              <div className={classes.dropdownOrder}>
                <h3>Мой заказ</h3>
                <span>
                  0 <span>руб.</span>
                </span>
              </div>
            </div>
            <div className={classes.dropdownTotal}>
              <span>Всего:</span>
              <span>
                0 <span>руб.</span>
              </span>
            </div>
            <div className={classes.dropdownTotalPrice}>
              <span>Общая сумма заказа:</span>
              <span>
                0 <span>руб.</span>
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

export default App;
