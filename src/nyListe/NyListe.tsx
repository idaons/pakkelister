import * as React from 'react';
import { FormEvent, useState } from 'react';
import classes from './nyListe.less';
import SesongValg from './valg/SesongValg';
import AktiviteterValg from './valg/AktiviteterValg';
import OvernattingValg from './valg/Overnatting';
import KjønnValg from './valg/KjønnValg';
import { Sesong } from '../models/sesong';
import { Aktivitet } from '../models/aktivitet';
import { Overnatting } from '../models/overnatting';
import { Kjønn } from '../models/kjønn';
import LengdeValg from './valg/LengdeValg';
import { UnmountClosed } from 'react-collapse';
import LinkButton from '../utils/baseComponents/LinkButton';
import { decodeUrlParams, valgToUrlParams } from '../utils/valgToUrlParams';

export default function NyListe(props: { urlValg: string }) {
    const urlValg = decodeUrlParams(props.urlValg);

    const [sesong, setSesong] = useState<Sesong>(urlValg.valg.sesong);
    const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>(urlValg.valg.aktiviteter);
    const [overnatting, setOvernatting] = useState<Overnatting>(urlValg.valg.overnatting);
    const [kjønn, setKjønn] = useState<Kjønn>(urlValg.valg.kjønn);
    const [lengde, setLengde] = useState<number>(urlValg.valg.lengde);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
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
                <LinkButton
                    to={`/pakk/${valgToUrlParams({
                        sesong,
                        aktiviteter,
                        overnatting,
                        kjønn,
                        lengde,
                    })}`}
                >
                    Pakk
                </LinkButton>
            </div>
        </form>
    );
}
