import classes from "./App.module.scss";
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
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/1" element={<Sasimi />} />
        <Route path="/2" element={<HotRolls />} />
        <Route path="/4" element={<Salats />} />
        <Route path="/5" element={<Sets />} />
        <Route path="/6" element={<Soups />} />
      </Routes>
    </div>
  );
}

export default App;
