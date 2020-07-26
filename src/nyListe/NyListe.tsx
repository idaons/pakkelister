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
import { getStoredListeNavn } from '~utils/localStorage';
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
        console.log(e.target, e.target.value);
        setLagNyListe(!lagNyListe);
        if (e.target.value === 'ny') {
        }
    };

    const onListeValgt = (e: ChangeEvent<HTMLInputElement>) => {
        setValgtListe(e.target.value);
        // oppdater listeNavn
        setTittel(e.target.value);
        dispatch({
            type: 'SET_LISTENAVN',
            listeNavn: e.target.value,
        });

        let valg = localStorage.getItem(e.target.value + '_valg');
    };

    const hentListe = () => {
        let valg = localStorage.getItem(valgtListe + '_valg');
        if (valg) {
            navigate(`${basepath}/pakk/${valgToUrlParams(JSON.parse(valg).valg)}`);
        } else alert(`Fant ikke lista ${tittel}`);
    };

    return (
        <form className={classes.wrapperstyle} onSubmit={handleSubmit}>
            <h1 className={classes.header}>Tid for å pakke</h1>
            <div className={`${classes.inputGruppe} ${classes.valgGruppe}`}>
                <Radio
                    label="Lag ny liste"
                    checked={lagNyListe}
                    onChange={onNyEllerEksisterendeRadioChanged}
                    name="nyEllerEksisterende"
                    value="ny"
                />
                <Radio
                    label="Endre eksisterende"
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
                <div className={classes.hentListeWrapper}>
                    <Autocomplete
                        label="Velg eksisterende liste"
                        className={classes.listeNavn}
                        listeId="mineListeNavn"
                        options={getStoredListeNavn()}
                        onChange={onListeValgt}
                        value={valgtListe}
                    />
                    <Button onClick={hentListe}>Åpne liste</Button>
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
                            to={`${basepath}/pakk/${valgToUrlParams({
                                sesong,
                                aktiviteter,
                                overnatting,
                                kjønn,
                                lengde,
                                spesielleBehov,
                            })}`}
                        >
                            Pakk
                        </LinkButton>
                    </div>
                </>
            )}
        </form>
    );
}
