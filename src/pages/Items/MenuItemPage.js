import React, {useEffect, useState} from 'react';
import classes from './MenuItemPage.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {
    addMenuItemCartAction, addMenuItemCountAction,
    fetchRollsAction
} from '../../state/yakitoriya_state/actions';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useLocation} from 'react-router-dom';

function MenuItemPage() {
    const params = useLocation();

    const [isLoading, setIsLoading] = useState(true);
    const pathname = params.pathname.split('/')[1]

    const dispatch = useDispatch();

    const menu = useSelector((state) => state.MenuReducer.sectionList);
    const menuList = useSelector((state) => state.MenuReducer);
    console.log(menuList)

    const actualData = menu.find((menuItem) => menuItem.categoryName === pathname)

    const addToCartFunction = (menuItem) => {
        dispatch(addMenuItemCartAction(menuItem))
        dispatch(addMenuItemCountAction(menuItem))
    }

    useEffect(() => {
        dispatch(fetchRollsAction(actualData.categoryName));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [params]);

    return (
        <div className={classes.itemsWrapper}>
            <h1>{actualData.name}</h1>
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
                : menuList.menuItem.map((item) => {
                    return (
                        <MenuItem
                            imgUrl={item.imgUrl ? item.imgUrl : ''}
                            name={item.name ? item.name : ''}
                            text={item.desc ? item.desc : ''}
                            price={item.price ? item.price : ''}
                            onClick={addToCartFunction}
                            id={item._id}
                            count={item.count}
                        />
                    );
                })}
        </div>
    );
}

export default MenuItemPage;
