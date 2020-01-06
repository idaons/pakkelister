import * as React from 'react';
import { useState } from 'react';
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

export default function NyListe() {
    const [sesong, setSesong] = useState<Sesong>(Sesong.Sommer);
    const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>([]);
    const [overnatting, setOvernatting] = useState<Overnatting>(Overnatting.DNThytte);
    const [kjønn, setKjønn] = useState<Kjønn>(Kjønn.Mann);

    return (
        <form className={classes.wrapperstyle}>
            <h1 className={classes.header}>Ny Liste</h1>
            <SesongValg sesong={sesong} setSesong={setSesong} />
            <AktiviteterValg valgteAktiviteter={aktiviteter} setAktiviteter={setAktiviteter} />
            <OvernattingValg overnatting={overnatting} setOvernatting={setOvernatting} />
            <KjønnValg kjønn={kjønn} setKjønn={setKjønn} />
            <div className={classes.opprett}>
                <Button>Opprett liste</Button>
            </div>
        </form>
    );
}
