import type { ElementLlistaT } from '../../types';
import { uuid, moment } from '../utils/valorsIdMoment';

export const llistaInicial: ElementLlistaT[] = [
  {
    id: uuid(),
    timestamp: moment(),
    text: 'Jugar a rugby',
  },
  {
    id: uuid(),
    timestamp: moment(),
    text: 'Estudiar programació',
  },
];
