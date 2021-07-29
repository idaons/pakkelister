import * as React from 'react';
import { InputHTMLAttributes, useRef } from 'react';
import { guid } from '../guid';
import * as classes from './input.less';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    strikeThrough?: boolean;
    header?: boolean;
}

function InputBase(props: InputProps) {
    const ref = useRef(guid());
    const { label, strikeThrough, header, ...rest } = props;

    const classNames = [
        strikeThrough ? classes.strikeThrough : '',
        header ? classes.header : '',
    ].join(' ');
    return (
        <div className={`${classes.input} ${classNames}`}>
            <input id={ref.current} {...rest} />
            <label htmlFor={ref.current}>{props.header ? <h2>{label}</h2> : label}</label>
        </div>
    );
}

export default InputBase;
