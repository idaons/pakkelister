import { createContext } from 'react';
import { Valg } from '../models/valg';

export enum AppStages {
    Setup,
    Pack,
}

interface Base {
    stage: AppStages;
}

interface Setup extends Base {
    stage: AppStages.Setup;
}

interface Pack extends Base {
    stage: AppStages.Pack;
    valg: Valg;
}

export type AppStates = Setup | Pack;

type SetAppState = (appstate: AppStates) => void;

export const defaultAppState: Setup = { stage: AppStages.Setup };

export const AppStateContext = createContext<AppStates>(defaultAppState);

export const SetAppStateContext = createContext<SetAppState>(() => null);
