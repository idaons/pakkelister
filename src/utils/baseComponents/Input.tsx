import * as React from 'react';
import { InputHTMLAttributes, useRef } from 'react';
import { guid } from '../guid';
import classes from './input.less';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    strikeThrough? : boolean
}

function Input(props: InputProps) {
    const ref = useRef(guid());
    const { label, strikeThrough, ...rest } = props;

    const className = strikeThrough ? classes.strikeThrough + " ": "";
    return (
        <div className={className + classes.input}>
            <input id={ref.current} {...rest} />
            <label htmlFor={ref.current}>{label}</label>
        </div>
    );
}

export default Input;
