import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';
import { Overnatting } from '../../models/overnatting';
import { Kjønn } from '../../models/kjønn';

export const defaultValg: Valg = {
    sesong: Sesong.Sommer,
    overnatting: [],
    kjønn: Kjønn.Begge,
    lengde: 3,
    aktiviteter: [],
};
