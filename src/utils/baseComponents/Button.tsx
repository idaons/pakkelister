import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classes from './button.less';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function Button(props: Props) {
    const { children, ...rest } = props;
    return (
        <button {...rest} className={`${classes.button} ${rest.className}`}>
            {children}
        </button>
    );
}

export default Button;
