import { Valg } from './valg';
import { Item } from './liste';

export type ItemRule = (valg: Valg) => Item;
