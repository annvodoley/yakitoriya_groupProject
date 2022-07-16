import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MenuItemPage from "./pages/Items/MenuItemPage";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { fetchMenuListAction } from "./state/yakitoriya_state/actions";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.MenuReducer.sectionList);

<<<<<<< HEAD
  const menuSectionName = menu.map((menuItem) => menuItem.categoryName)

  useEffect(() => {
    dispatch(fetchMenuListAction());
  }, []);
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {menuSectionName.map(menuItemName => {
            return(
                <Route path={menuItemName} element={<MenuItemPage />} />
            )
          })}
        </Route>
      </Routes>
    </div>
  );
=======
    useEffect(() => {
        dispatch(fetchMenuListAction())
    }, [])
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </div>
    );
>>>>>>> cbce5d2ad968257a7475592d3e7582c0e402502a
}

export default App;
