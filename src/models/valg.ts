import { Sesong } from './sesong';
import { Aktivitet } from './aktivitet';
import { Overnatting } from './overnatting';
import { Kjønn } from './kjønn';

export interface Valg {
    sesong: Sesong;
    aktiviteter: Aktivitet[];
    overnatting: Overnatting[];
    kjønn: Kjønn;
    lengde: number;
}
