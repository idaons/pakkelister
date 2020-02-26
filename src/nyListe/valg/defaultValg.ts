import { Valg } from '../../models/valg';
import { Sesong } from '../../models/sesong';
import { Kjønn } from '../../models/kjønn';

const today = new Date();

const erVinter = today.getMonth() >= 10 || today.getMonth() <= 3;

export const defaultValg: Valg = {
    sesong: erVinter ? Sesong.Vinter : Sesong.Sommer,
    overnatting: [],
    kjønn: Kjønn.Begge,
    lengde: 3,
    aktiviteter: [],
};
