import * as React from 'react';
import LagListe from '../lagListe/LagListe';
import Pakk from '../pakk/Pakk';
import { Redirect, Router } from '@reach/router';
import { useState, useRef } from 'react';

export const basepath = '/pakkelister';

const HandleRedirect = (props: { default: boolean }) => {
    const firstRedirect = useRef(true);

    const redirect = window.localStorage.getItem('redirect');
    window.localStorage.removeItem('redirect');

    const to = (firstRedirect.current && redirect) || `${basepath}/urlParams`;
    firstRedirect.current = false;

    return <Redirect noThrow from={'/'} to={to} />;
};

function App() {
    return (
        <Router>
            <LagListe path={basepath + '/:urlValg'} />
            <Pakk path={basepath + '/pakk/:urlValg'} />
            <HandleRedirect default />
        </Router>
    );
}

export default App;
