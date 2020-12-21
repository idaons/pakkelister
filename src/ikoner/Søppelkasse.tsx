import * as React from 'react';

const Søppelkasse = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.016 3h-7V.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5V3h-6a.5.5 0 000 1h2v19.5a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V4h3a.5.5 0 000-1zm-15-2h7v2h-7V1zm-4 22h15V4h-15v19z"
                stroke="#fff"
            />
            <path
                d="M7.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM11.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM15.016 7v12a.5.5 0 001 0V7a.5.5 0 00-1 0z"
                stroke="#fff"
            />
        </svg>
    );
};
export default Søppelkasse;
