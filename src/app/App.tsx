import * as React from 'react';
import NyListe from '../nyListe/NyListe';
import Pakk from '../pakk/Pakk';
import { Redirect, Router } from '@reach/router';

function App() {
    return (
        <Router>
            <NyListe path="/nyliste/:urlValg" />
            <Pakk path="/pakk/:urlValg" />
            <Redirect default from={'/'} to={'/nyliste/urlValg'} />
        </Router>
    );
}

export default App;
