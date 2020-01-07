import { Valg } from './valg';
import { ListeElement } from './liste';

export type ListMaker = (valg: Valg) => ListeElement[];
