import * as React from 'react';
import { FormEvent, useContext, useEffect, useState } from 'react';
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
import { UnmountClosed } from 'react-collapse';

export default function NyListe() {
    const setAppContext = useContext(SetAppStateContext);
    const [sesong, setSesong] = useState<Sesong>(Sesong.Sommer);
    const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>([]);
    const [overnatting, setOvernatting] = useState<Overnatting>(Overnatting.DNThytte);
    const [kjønn, setKjønn] = useState<Kjønn>(Kjønn.Mann);
    const [lengde, setLengde] = useState<number>(3);

    useEffect(() => {
        if (overnatting === Overnatting.IkkeOvernatting) {
            setLengde(0);
        }
    }, [overnatting]);

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
            <OvernattingValg overnatting={overnatting} setOvernatting={setOvernatting} />
            <UnmountClosed
                theme={{ collapse: classes.transition }}
                isOpened={overnatting !== Overnatting.IkkeOvernatting}
            >
                <LengdeValg lengde={lengde} setLengde={setLengde} />
            </UnmountClosed>
            <AktiviteterValg valgteAktiviteter={aktiviteter} setAktiviteter={setAktiviteter} />
            <KjønnValg kjønn={kjønn} setKjønn={setKjønn} />
            <div className={classes.opprett}>
                <Button>Opprett liste</Button>
            </div>
        </form>
    );
}
