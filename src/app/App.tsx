import * as React from 'react';
import LagListe from '../lagListe/LagListe';
import Pakk from '../pakk/Pakk';
import { Redirect, Router } from '@reach/router';

export const basepath = '/pakkelister';

const HandleRedirect = (props: { default: boolean }) => {
    const redirect = window.localStorage.getItem('redirect');
    window.localStorage.removeItem('redirect');
    return <Redirect noThrow from={'/'} to={redirect || `${basepath}/urlParams`} />;
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
