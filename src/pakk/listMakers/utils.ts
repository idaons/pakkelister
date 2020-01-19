import { Valg } from '../../models/valg';
import { Overnatting } from '../../models/overnatting';

export function overnatting(valg: Valg) {
    return valg.overnatting !== Overnatting.IkkeOvernatting;
}
