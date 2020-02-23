import * as React from 'react';
import {createContext, useReducer} from "react";
import NyListe from '../nyListe/NyListe';
import Pakk from '../pakk/Pakk';
import {reducer, IState, Actions } from './Reducer'
import { Redirect, Router } from '@reach/router';

interface IContextProps {
    state: IState;
    dispatch: React.Dispatch<Actions>;
}

const initialState : IState  = {
    listeNavn: 'Ny liste'
};

export const AppContext = createContext({} as IContextProps) ;

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            <Router>
                <NyListe path="/nyliste/:urlValg" />
                <Pakk path="/pakk/:urlValg" />
                <Redirect default from={'/'} to={'/nyliste/urlValg'} />
            </Router>
        </AppContext.Provider>
    );
}
export default App;

