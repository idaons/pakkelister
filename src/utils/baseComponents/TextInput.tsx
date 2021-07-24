import * as React from 'react';
import { InputHTMLAttributes, useRef } from 'react';
import { guid } from '../guid';
// @ts-ignore
import * as classes from './input.less';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
}

function TextInput(props: InputProps) {
    const ref = useRef(guid());
    const { label, className, ...rest } = props;

    return (
        <div className={`${classes.textInput} ${className}`}>
            <label htmlFor={ref.current}>{label}</label>
            <input type="text" id={ref.current} {...rest} />
        </div>
    );
}

export default TextInput;
