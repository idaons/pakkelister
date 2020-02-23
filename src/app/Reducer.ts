export interface IState {
    listeNavn?: string;
}

export type Actions =
    | { type: 'SET_LISTENAVN'; listeNavn: string }


export const reducer : React.Reducer<IState, Actions> = (state, action) => {
    switch (action.type) {
        case 'SET_LISTENAVN':
            return {
                ...state,
                listeNavn: action.listeNavn
            };
        default:
            return state;
    }
};
