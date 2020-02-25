import { Valg } from './valg';
import { Item } from './liste';

export type ItemsGetter = (valg: Valg) => Item[];
