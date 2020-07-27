import * as React from 'react';
import { ChangeEvent, FormEvent, useContext, useEffect, useReducer, useState } from 'react';
// @ts-ignore
import classes from './nyListe.less';
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
import { AppContext, basepath } from '../app/App';
import Button from '~utils/baseComponents/Button';
import { navigate } from '@reach/router';
import Autocomplete from '~utils/baseComponents/Autocomplete';
import { getStoredListeNavn, getStoredValg } from '~utils/localStorage';
import Radio from '~utils/baseComponents/Radio';

export default function NyListe(props: { urlValg: string }) {
    const urlValg = decodeUrlParams(props.urlValg);
    const { state, dispatch } = useContext(AppContext);
    const [sesong, setSesong] = useState<Sesong>(urlValg.valg.sesong);
    const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>(urlValg.valg.aktiviteter);
    const [overnatting, setOvernatting] = useState<Overnatting[]>(urlValg.valg.overnatting);
    const [kjønn, setKjønn] = useState<Kjønn>(urlValg.valg.kjønn);
    const [lengde, setLengde] = useState<number>(urlValg.valg.lengde);
    const [tittel, setTittel] = useState<string>(state.listeNavn);
    const [valgtListe, setValgtListe] = useState<string>('');
    const [lagNyListe, setLagNyListe] = useState<boolean>(true);
    const [spesielleBehov, setSpesielleBehov] = useState<boolean>(urlValg.valg.spesielleBehov);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (lagNyListe) {
            setValgtListe('');
        } else {
        }
    }, [lagNyListe]);

    const onBlurTitle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'SET_LISTENAVN',
            listeNavn: e.currentTarget.value,
        });
    };

    const onNyEllerEksisterendeRadioChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setLagNyListe(!lagNyListe);
        if (e.target.value === 'ny') {
        }
    };

    const onListeValgt = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value);
        setValgtListe(e.currentTarget.value);

        // oppdater verdier
        const valg = getStoredValg(e.currentTarget.value);
        console.log(valg);
        setTittel(e.currentTarget.value);

        setSesong(valg.sesong);
        setAktiviteter(valg.aktiviteter);
        setOvernatting(valg.overnatting);
        setKjønn(valg.kjønn);
        setLengde(valg.lengde);
        setSpesielleBehov(valg.spesielleBehov);

        dispatch({
            type: 'SET_LISTENAVN',
            listeNavn: e.currentTarget.value,
        });
    };

    return (
        <form className={classes.wrapperstyle} onSubmit={handleSubmit}>
            <h1 className={classes.header}>Tid for å pakke</h1>
            <div className={`${classes.inputGruppe} ${classes.valgGruppe}`}>
                <Radio
                    label="Lag liste"
                    checked={lagNyListe}
                    onChange={onNyEllerEksisterendeRadioChanged}
                    name="nyEllerEksisterende"
                    value="ny"
                />
                <Radio
                    label="Hent eksisterende"
                    checked={!lagNyListe}
                    onChange={onNyEllerEksisterendeRadioChanged}
                    name="nyEllerEksisterende"
                    value="eksisterende"
                />
            </div>
            {lagNyListe ? (
                <TextInput
                    label="Navn på liste"
                    className={classes.listeNavn}
                    onChange={e => setTittel(e.target.value)}
                    value={tittel}
                    onBlur={onBlurTitle}
                />
            ) : (
                <div className={`${classes.valgGruppe} ${classes.velgListeWrapper}`}>
                    <label>Velg liste</label>
                    <div className={classes.inputGruppe}>
                        {getStoredListeNavn().map(liste => (
                            <Button
                                key={liste}
                                value={liste}
                                className={classes.listeNavn}
                                onClick={onListeValgt}
                            >
                                {liste}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
            {(lagNyListe || valgtListe) && (
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
