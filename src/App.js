import "./App.module.scss";
import Cart from "./components/Cart/Cart";
import MenuItem from "./components/MenuItem/MenuItem";
import classes from "../src/components/MenuItem/MenuItem.module.scss";
import Header from "./components/Header/Header";
import SectionMenu from "./components/SectionMenu/SectionMenu";
import Slider from "./components/Slider/Slider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sasimi from "./pages/Items/Sasimi";
import HotRolls from "./pages/Items/HotRolls";
import Salats from "./pages/Items/Salats";
import Sets from "./pages/Items/Sets";
import Soups from "./pages/Items/Soups";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMenuListAction } from "./state/yakitoriya_state/actions";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuListAction());
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sasimi" element={<Sasimi />} />
        <Route path="/hotrolls" element={<HotRolls />} />
        <Route path="/salats" element={<Salats />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/soups" element={<Soups />} />
        </Routes>
    </div>
  );
}

export default App;
