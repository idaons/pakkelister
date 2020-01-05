import * as React from 'react';
import { useState } from 'react';
import classes from './nyListe.less';
import Sesong, { SesongEnum } from './valg/Sesong';
import Aktiviteter, { AktiviteterEnum } from './valg/Aktiviteter';
import Overnatting from './valg/Overnatting';
import Kjønn from './valg/Kjønn';
import Button from '../utils/baseComponents/Button';

export default function NyListe() {
    const [sesong, setSesong] = useState<SesongEnum>(SesongEnum.Sommer);
    const [aktiviteter, setAktiviteter] = useState<AktiviteterEnum[]>([]);
    const [overnatting, setOvernatting] = useState<string>('');
    const [kjønn, setKjønn] = useState<string>('');

    return (
        <form className={classes.wrapperstyle}>
            <h1 className={classes.header}>Ny Liste</h1>
            <Sesong sesong={sesong} setSesong={setSesong} />
            <Aktiviteter valgteAktiviteter={aktiviteter} setAktiviteter={setAktiviteter} />
            <Overnatting overnatting={overnatting} setOvernatting={setOvernatting} />
            <Kjønn kjønn={kjønn} setKjønn={setKjønn} />
            <div className={classes.opprett}>
                <Button>Opprett liste</Button>
            </div>
        </form>
    );
}
