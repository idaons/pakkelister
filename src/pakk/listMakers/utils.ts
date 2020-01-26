import { Valg } from '../../models/valg';
import { Overnatting } from '../../models/overnatting';
import { Sesong } from '../../models/sesong';
import { Aktivitet } from '../../models/aktivitet';

export function overnatting(valg: Valg) {
    return valg.overnatting.length > 0;
}

export function sikkerhetVinter(valg: Valg) {
    return (
        valg.sesong === Sesong.Vinter ||
        [Aktivitet.Randonée, Aktivitet.Fjellski].some(it => valg.aktiviteter.includes(it))
    );
}
