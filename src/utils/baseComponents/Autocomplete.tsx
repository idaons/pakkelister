import * as React from 'react';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { guid } from '../guid';
// @ts-ignore
import classes from './input.less';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    options: string[];
    listeId: string;
}

function Autocomplete(props: InputProps) {
    const ref = useRef(guid());
    const { label, className, listeId, options, ...rest } = props;

    return (
        <div className={`${classes.textInput} ${className}`}>
            <label htmlFor={ref.current}>{label}</label>
            <input type="text" id={ref.current} autoComplete="off" list={listeId} {...rest} />
            <datalist id={listeId}>
                {options.map(o => (
                    <option key={'listenavn_' + o}>{o}</option>
                ))}
            </datalist>
        </div>
    );
}

export default Autocomplete;
