import { Valg } from '../models/valg';
import { Aktivitet } from '../models/aktivitet';
import { Kjønn } from '../models/kjønn';
import { Overnatting } from '../models/overnatting';
import { Sesong } from '../models/sesong';
import { defaultValg } from '../nyListe/valg/defaultValg';

export function valgToUrlParams(valg: Valg) {
    const aktiviteter =
        'aktiviteter=' + valg.aktiviteter.map(aktivitet => `${Aktivitet[aktivitet]}`).join(',');
    const lengde = 'lengde=' + valg.lengde;
    const kjønn = 'kjønn=' + Kjønn[valg.kjønn];
    const overnatting = 'overnatting=' + Overnatting[valg.overnatting];
    const sesong = 'sesong=' + Sesong[valg.sesong];
    return [aktiviteter, lengde, kjønn, overnatting, sesong].join('&');
}

interface Returns {
    valg: Valg;
    feilmelding?: string;
}

export function decodeUrlParams(url: string): Returns {
    try {
        const paramsArray = url.split('&').map(param => param.split('='));
        const paramsObject: { [name: string]: string } = paramsArray.reduce(
            (acc, param) => ({
                ...acc,
                [param[0]]: param[1],
            }),
            {}
        );

        const valg: Valg = {
            // @ts-ignore
            aktiviteter: paramsObject['aktiviteter']?.split(',').map(it => Aktivitet[it]),
            // @ts-ignore
            lengde:
                paramsObject['lengde'] !== undefined ? parseInt(paramsObject['lengde']) : undefined,
            // @ts-ignore
            kjønn: Kjønn[paramsObject['kjønn']],
            // @ts-ignore
            overnatting: Overnatting[paramsObject['overnatting']],
            // @ts-ignore
            sesong: Sesong[paramsObject['sesong']],
        };

        // @ts-ignore
        const manglendeParametere = Object.keys(valg).filter(
            (it: string) => valg[it] === undefined
        );
        const feilmelding =
            manglendeParametere.length > 0
                ? `Manglende parametere: ${manglendeParametere}`
                : undefined;
        feilmelding && console.error(feilmelding);

        return {
            feilmelding: feilmelding,
            valg: {
                aktiviteter: valg.aktiviteter || defaultValg.aktiviteter,
                lengde: valg.lengde || defaultValg.lengde,
                kjønn: valg.kjønn || defaultValg.kjønn,
                overnatting: valg.overnatting || defaultValg.overnatting,
                sesong: valg.sesong || defaultValg.sesong,
            },
        };
    } catch (e) {
        return {
            feilmelding: 'Det skjedde en feil under parsing av url',
            valg: defaultValg,
        };
    }
}
