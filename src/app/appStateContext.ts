import { createContext } from 'react';
import { Valg } from '../models/valg';

export enum TrinnEnum {
    LagListe,
    PakkListe,
}

interface Base {
    trinn: TrinnEnum;
}

interface LagListe extends Base {
    trinn: TrinnEnum.LagListe;
}

interface PakkListe extends Base {
    trinn: TrinnEnum.PakkListe;
    valg: Valg;
}

export type AppStates = LagListe | PakkListe;

type SetAppState = (appstate: AppStates) => void;

export const defaultAppState: LagListe = { trinn: TrinnEnum.LagListe };

export const AppStateContext = createContext<AppStates>(defaultAppState);

export const SetAppStateContext = createContext<SetAppState>(() => null);
