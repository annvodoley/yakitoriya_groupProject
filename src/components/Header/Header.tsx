import React, {useRef, useState} from 'react';
// @ts-ignore
import classes from './Header.module.scss';

interface IHeaderProps {
    menuList: (string | number)[]
    className?: string
}

const Header = ({menuList, className}: IHeaderProps): JSX.Element => {

    const [state, setState] = useState(false)

    console.log(state)
    return (
        <div className={className}>
            <textarea rows={1} onBlur={() => setState(true)} className={classes.Inp} />
        </div>
    );
};

export default Header;

