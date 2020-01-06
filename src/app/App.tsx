import * as React from 'react';
import NyListe from '../nyListe/NyListe';
import { AppStages, AppStateContext, AppStates, defaultAppState, SetAppStateContext } from './appStateContext';
import { useState } from 'react';
import Pack from '../pakk/Pack';

function Stage(props: { state: AppStates }) {
    switch (props.state.stage) {
        case AppStages.Setup:
            return <NyListe />;
        case AppStages.Pack:
            return <Pack />;
        default:
            return <div>Her skulle du ikke vært</div>;
    }
}

function App() {
    const [appState, setAppState] = useState<AppStates>(defaultAppState);

    return (
        <AppStateContext.Provider value={appState}>
            <SetAppStateContext.Provider value={setAppState}>
                <Stage state={appState} />
            </SetAppStateContext.Provider>
        </AppStateContext.Provider>
    );
}

export default App;
