import * as React from 'react';
import classes from './button.less';
import { Link } from '@reach/router';

interface Props {
    children: string;
    to: string;
}

function LinkButton(props: Props) {
    const { children } = props;
    return (
        <div className={classes.linkButtonWrapper}>
            <Link to={props.to} className={`${classes.linkButtonStyling} ${classes.button}`}>
                {children}
            </Link>
        </div>
    );
}

export default LinkButton;
