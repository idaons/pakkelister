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
    const overnatting =
        'overnatting=' +
        valg.overnatting.map(overnatting => `${Overnatting[overnatting]}`).join(',');
    const sesong = 'sesong=' + Sesong[valg.sesong];
    const spesiell = 'spesiell=' + valg.spesielleBehov;

    return [aktiviteter, lengde, kjønn, overnatting, sesong, spesiell].join('&');
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
            aktiviteter: paramsObject['aktiviteter']
                ?.split(',')
                // @ts-ignore
                .map(it => Aktivitet[it])
                .filter(it => it !== undefined),
            // @ts-ignore
            lengde:
                paramsObject['lengde'] !== undefined ? parseInt(paramsObject['lengde']) : undefined,
            // @ts-ignore
            kjønn: Kjønn[paramsObject['kjønn']],
            // @ts-ignore
            overnatting: paramsObject['overnatting']
                ?.split(',')
                // @ts-ignore
                .map(it => Overnatting[it])
                .filter(it => it !== undefined),
            // @ts-ignore
            sesong: Sesong[paramsObject['sesong']],
            spesielleBehov: paramsObject['spesiell'] === 'true',
        };

        const manglendeParametere = Object.keys(valg).filter(
            // @ts-ignore
            (it: string) => valg[it] === undefined
        );
        const feilmelding =
            manglendeParametere.length > 0
                ? `Manglende parametere: ${manglendeParametere}`
                : undefined;

        return {
            feilmelding: feilmelding,
            valg: {
                aktiviteter: valg.aktiviteter ?? defaultValg.aktiviteter,
                lengde: valg.lengde ?? defaultValg.lengde,
                kjønn: valg.kjønn ?? defaultValg.kjønn,
                overnatting: valg.overnatting ?? defaultValg.overnatting,
                sesong: valg.sesong ?? defaultValg.sesong,
                spesielleBehov: valg.spesielleBehov ?? defaultValg.spesielleBehov,
            },
        };
    } catch (e) {
        return {
            feilmelding: 'Det skjedde en feil under parsing av url',
            valg: defaultValg,
        };
    }
}
