import * as React from 'react';
import { createContext, useReducer } from 'react';
import NyListe from '../nyListe/NyListe';
import Pakk from '../pakk/Pakk';
import { Actions, IState, reducer } from './Reducer';
import { Redirect, Router } from '@reach/router';

interface IContextProps {
    state: IState;
    dispatch: React.Dispatch<Actions>;
}

const initialState: IState = {
    listeNavn: '',
};

export const basepath = '/pakkelister';

const HandleRedirect = () => {
    const redirect = window.localStorage.getItem('redirect');

    window.localStorage.removeItem('redirect');

    return <Redirect from={'/'} to={redirect || `${basepath}/nyliste/urlParams`} />;
};

export const AppContext = createContext({} as IContextProps);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Router>
                <NyListe path={basepath + '/nyliste/:urlValg'} />
                <Pakk path={basepath + '/pakk/:urlValg'} />
                <HandleRedirect default />
            </Router>
        </AppContext.Provider>
    );
}
export default App;
