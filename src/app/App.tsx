import * as React from 'react';
import NyListe from '../nyListe/NyListe';
import {
    TrinnEnum,
    AppStateContext,
    AppStates,
    defaultAppState,
    SetAppStateContext,
} from './appStateContext';
import { useState } from 'react';
import Pakk from '../pakk/Pakk';

function Trinn(props: { state: AppStates }) {
    switch (props.state.trinn) {
        case TrinnEnum.LagListe:
            return <NyListe />;
        case TrinnEnum.PakkListe:
            return <Pakk />;
        default:
            return <div>Her skulle du ikke vært</div>;
    }
}

function App() {
    const [appState, setAppState] = useState<AppStates>(defaultAppState);

    return (
        <AppStateContext.Provider value={appState}>
            <SetAppStateContext.Provider value={setAppState}>
                <Trinn state={appState} />
            </SetAppStateContext.Provider>
        </AppStateContext.Provider>
    );
}

export default App;
