import { Sesong } from './sesong';
import { Aktivitet } from './aktivitet';
import { Overnatting } from './overnatting';
import { Kjonn } from './kjonn';

export interface Valg {
    sesong: Sesong;
    aktiviteter: Aktivitet[];
    overnatting: Overnatting[];
    kjønn: Kjonn;
    lengde: number;
    spesielleBehov: boolean;
}
