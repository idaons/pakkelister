import * as React from 'react';
import { FormEvent, useContext, useState } from 'react';
import classes from './nyListe.less';
import SesongValg from './valg/SesongValg';
import AktiviteterValg from './valg/AktiviteterValg';
import OvernattingValg from './valg/Overnatting';
import KjønnValg from './valg/KjønnValg';
import Button from '../utils/baseComponents/Button';
import { Sesong } from '../models/sesong';
import { Aktivitet } from '../models/aktivitet';
import { Overnatting } from '../models/overnatting';
import { Kjønn } from '../models/kjønn';
import { AppStages, SetAppStateContext } from '../app/appStateContext';
import LengdeValg from './valg/LengdeValg';

export default function NyListe() {
    const setAppContext = useContext(SetAppStateContext);
    const [sesong, setSesong] = useState<Sesong>(Sesong.Sommer);
    const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>([]);
    const [overnatting, setOvernatting] = useState<Overnatting>(Overnatting.DNThytte);
    const [kjønn, setKjønn] = useState<Kjønn>(Kjønn.Mann);
    const [lengde, setLengde] = useState<number>(3);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setAppContext({
            stage: AppStages.Pack,
            valg: {
                sesong,
                aktiviteter,
                overnatting,
                kjønn,
                lengde,
            },
        });
    };

    return (
        <form className={classes.wrapperstyle} onSubmit={handleSubmit}>
            <h1 className={classes.header}>Ny Liste</h1>
            <SesongValg sesong={sesong} setSesong={setSesong} />
            <AktiviteterValg valgteAktiviteter={aktiviteter} setAktiviteter={setAktiviteter} />
            <OvernattingValg overnatting={overnatting} setOvernatting={setOvernatting} />
            <KjønnValg kjønn={kjønn} setKjønn={setKjønn} />
            <LengdeValg lengde={lengde} setLengde={setLengde} />
            <div className={classes.opprett}>
                <Button>Opprett liste</Button>
            </div>
        </form>
    );
}
