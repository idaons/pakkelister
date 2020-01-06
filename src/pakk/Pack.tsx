import * as React from 'react';
import { useContext } from 'react';
import { AppStages, AppStateContext } from '../app/appStateContext';

function Pack() {
    const context = useContext(AppStateContext);

    if (context.stage !== AppStages.Pack) {
        return <div>Her havnet du ved en kjempefeil!</div>;
    }

    return (
        <div>
            Du må pakke!
            {JSON.stringify(context)}
        </div>
    );
}

export default Pack;
