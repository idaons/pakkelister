import * as React from 'react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// @ts-ignore
import classes from './LagListe.less';
import SesongValg from './valg/SesongValg';
import AktiviteterValg from './valg/AktiviteterValg';
import OvernattingValg from './valg/Overnatting';
import KjønnValg from './valg/KjønnValg';
import CustomValg from './valg/CustomValg';
import { Sesong } from '../models/sesong';
import { Aktivitet } from '../models/aktivitet';
import { Overnatting } from '../models/overnatting';
import { Kjønn } from '../models/kjønn';
import LengdeValg from './valg/LengdeValg';
import { UnmountClosed } from 'react-collapse';
import LinkButton from '../utils/baseComponents/LinkButton';
import { decodeUrlParams, valgToUrlParams } from '../utils/valgToUrlParams';
import TextInput from '../utils/baseComponents/TextInput';
import { basepath } from '../app/App';
import Button from '~utils/baseComponents/Button';
import { getStoredListeNavn, getStoredValg } from '~utils/localStorage';
import Radio from '~utils/baseComponents/Radio';
import { navigate, RouteComponentProps } from '@reach/router';
import { defaultValg } from '~lagListe/valg/defaultValg';

interface Props extends RouteComponentProps {
    urlValg?: string;
}

export default function LagListe(props: Props) {
    const urlValg = decodeUrlParams(props.urlValg || '');
    const [sesong, setSesong] = useState<Sesong>(urlValg.valg.sesong);
    const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>(urlValg.valg.aktiviteter);
    const [overnatting, setOvernatting] = useState<Overnatting[]>(urlValg.valg.overnatting);
    const [kjønn, setKjønn] = useState<Kjønn>(urlValg.valg.kjønn);
    const [lengde, setLengde] = useState<number>(urlValg.valg.lengde);
    const [tittel, setTittel] = useState<string>(urlValg.currentListe);
    const [valgtListe, setValgtListe] = useState<string>('');
    const [endreEksisterende, setEndreEksisterende] = useState<boolean>(!!urlValg.currentListe);
    const [spesielleBehov, setSpesielleBehov] = useState<boolean>(urlValg.valg.spesielleBehov);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (endreEksisterende) {
            const listeKnapp = document.getElementById('knapp_' + tittel);
            if (listeKnapp) {
                listeKnapp.click();
                listeKnapp.focus();
            }
        }
    }, []);

    useEffect(() => {
        const nyUrl = `${basepath}/${valgToUrlParams(
            {
                sesong,
                aktiviteter,
                overnatting,
                kjønn,
                lengde,
                spesielleBehov,
            },
            tittel
        )}`;
        navigate(nyUrl);
    }, [sesong, aktiviteter, overnatting, kjønn, lengde, spesielleBehov, tittel]);

    useEffect(() => {
        if (!endreEksisterende) {
            setValgtListe('');
        } else {
        }
    }, [endreEksisterende]);

    const onNyEllerEksisterendeRadioChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setEndreEksisterende(!endreEksisterende);

        // Nullstill verdier
        const valg = defaultValg;
        setTittel('');
        setSesong(valg.sesong);
        setAktiviteter(valg.aktiviteter);
        setOvernatting(valg.overnatting);
        setKjønn(valg.kjønn);
        setLengde(valg.lengde);
        setSpesielleBehov(valg.spesielleBehov);
    };

    const onListeValgt = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValgtListe(e.currentTarget.value);

        // oppdater verdier
        const valg = getStoredValg(e.currentTarget.value);
        if (!valg) return;
        setTittel(e.currentTarget.value);

        setSesong(valg.sesong);
        setAktiviteter(valg.aktiviteter);
        setOvernatting(valg.overnatting);
        setKjønn(valg.kjønn);
        setLengde(valg.lengde);
        setSpesielleBehov(valg.spesielleBehov);
    };

    return (
        <form className={classes.wrapperstyle} onSubmit={handleSubmit}>
            <h1 className={classes.header}>Tid for å pakke</h1>
            <div className={`${classes.inputGruppe} ${classes.valgGruppe}`}>
                <Radio
                    label="Lag liste"
                    checked={!endreEksisterende}
                    onChange={onNyEllerEksisterendeRadioChanged}
                    name="nyEllerEksisterende"
                    value="ny"
                />
                <Radio
                    label="Endre eksisterende"
                    checked={endreEksisterende}
                    onChange={onNyEllerEksisterendeRadioChanged}
                    name="nyEllerEksisterende"
                    value="eksisterende"
                />
            </div>
            {endreEksisterende ? (
                <div className={`${classes.valgGruppe} ${classes.velgListeWrapper}`}>
                    <label>Velg liste</label>
                    <div className={classes.inputGruppe}>
                        {getStoredListeNavn().map(liste => (
                            <Button
                                key={liste}
                                id={'knapp_' + liste}
                                value={liste}
                                className={classes.listeNavn}
                                onClick={onListeValgt}
                            >
                                {liste}
                            </Button>
                        ))}
                    </div>
                </div>
            ) : (
                <TextInput
                    label="Navn på liste"
                    className={classes.listeNavn}
                    onChange={e => setTittel(e.target.value)}
                    value={tittel}
                />
            )}
            {(!endreEksisterende || valgtListe) && (
                <>
                    <SesongValg sesong={sesong} setSesong={setSesong} />
                    <OvernattingValg overnatting={overnatting} setOvernatting={setOvernatting} />
                    <UnmountClosed
                        theme={{ collapse: classes.transition }}
                        isOpened={overnatting.length > 0}
                    >
                        <LengdeValg lengde={lengde} setLengde={setLengde} />
                    </UnmountClosed>
                    <AktiviteterValg
                        valgteAktiviteter={aktiviteter}
                        setAktiviteter={setAktiviteter}
                    />
                    <KjønnValg kjønn={kjønn} setKjønn={setKjønn} />
                    <CustomValg
                        spesielleBehov={spesielleBehov}
                        setSpesielleBehov={setSpesielleBehov}
                    />
                    <div className={classes.opprett}>
                        <LinkButton
                            to={`${basepath}/pakk/${valgToUrlParams(
                                {
                                    sesong,
                                    aktiviteter,
                                    overnatting,
                                    kjønn,
                                    lengde,
                                    spesielleBehov,
                                },
                                tittel
                            )}`}
                        >
                            Pakk
                        </LinkButton>
                    </div>
                </>
            )}
        </form>
    );
}
