import ValgStyle from './ValgStyle';
import * as React from 'react';
import Checkbox from '../../utils/baseComponents/Checkbox';

export enum AktiviteterEnum {
    Klatring = 'Klatring',
    Fottur = 'Fottur',
    Tinderangling = 'Tinderangling',
    Jogging = 'Jogging',
    Randonée = 'Randonée',
    Fjellski = 'Fjellski',
    Langrenn = 'Langrenn',
    Skøyteski = 'Skøyteski',
    Fest = 'Fest',
    Bytur = 'Bytur',
}

export function getAktiviteterArray(): AktiviteterEnum[] {
    // @ts-ignore
    return [...Object.keys(AktiviteterEnum)].map((a: string) => AktiviteterEnum[a]);
}

export function erSommerAktivitet(aktivitet: AktiviteterEnum) {
    return [
        AktiviteterEnum.Klatring,
        AktiviteterEnum.Fottur,
        AktiviteterEnum.Tinderangling,
        AktiviteterEnum.Jogging,
    ].includes(aktivitet);
}

export function erVinterAktivitet(aktivitet: AktiviteterEnum) {
    return [
        AktiviteterEnum.Randonée,
        AktiviteterEnum.Fjellski,
        AktiviteterEnum.Langrenn,
        AktiviteterEnum.Skøyteski,
    ].includes(aktivitet);
}

export function erAnnenAktivitet(aktivitet: AktiviteterEnum) {
    return [AktiviteterEnum.Fest, AktiviteterEnum.Bytur].includes(aktivitet);
}

interface Props {
    valgteAktiviteter: AktiviteterEnum[];
    setAktiviteter: (aktiviteter: AktiviteterEnum[]) => void;
}

function Aktiviteter(props: Props) {
    const handleChange = (e: any) => {
        if (e.target.checked) {
            props.setAktiviteter([...props.valgteAktiviteter, e.target.value]);
        } else {
            props.setAktiviteter(props.valgteAktiviteter.filter(a => a !== e.target.value));
        }
    };

    return (
        <ValgStyle name="Aktiviteter">
            {getAktiviteterArray().map(aktivitet => {
                return (
                    <Checkbox
                        key={aktivitet}
                        label={aktivitet}
                        value={aktivitet}
                        checked={props.valgteAktiviteter.includes(aktivitet)}
                        onChange={handleChange}
                    />
                );
            })}
        </ValgStyle>
    );
}

export default Aktiviteter;
