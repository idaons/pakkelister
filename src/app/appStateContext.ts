import { Sesong } from '../models/sesong';
import { Aktivitet } from '../models/aktivitet';
import { Overnatting } from '../models/overnatting';
import { Kjønn } from '../models/kjønn';
import { createContext } from 'react';

export enum AppStages {
    Setup,
    Pack,
}

interface Setup {
    stage: AppStages.Setup;
}

interface Pack {
    stage: AppStages.Pack;
    sesong: Sesong;
    aktiviteter: Aktivitet[];
    overnatting: Overnatting;
    kjønn: Kjønn;
}

export type AppStates = Setup | Pack;

type SetAppState = (appstate: AppStates) => void;

export const defaultAppState: Setup = { stage: AppStages.Setup };

export const AppStateContext = createContext<AppStates>(defaultAppState);

export const SetAppStateContext = createContext<SetAppState>(() => null);
