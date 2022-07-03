import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sasimi from "./pages/Items/Sasimi";
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
      </Routes>
    </div>
  );
}

export default App;
