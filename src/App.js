
import "./App.module.scss";
import Cart from "./components/Cart/Cart";
import MenuItem from "./components/MenuItem/MenuItem";
import classes from "../src/components/MenuItem/MenuItem.module.scss";

function App() {
  return (
    <div className="app">
      <Cart />
      <div className={classes.catalog}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default App;
