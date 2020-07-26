import * as React from 'react';
// @ts-ignore
import classes from './button.less';
import { Link } from '@reach/router';

interface Props {
    children: string;
    to: string;
    className?: string;
}

function LinkButton(props: Props) {
    const { children } = props;
    return (
        <div className={`${classes.linkButtonWrapper} ${props.className}`}>
            <Link to={props.to} className={`${classes.linkButtonStyling} ${classes.button}`}>
                {children}
            </Link>
        </div>
    );
}

export default LinkButton;
