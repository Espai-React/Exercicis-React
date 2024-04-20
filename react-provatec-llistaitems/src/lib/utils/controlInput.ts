import type { ControlInputT, ElementT } from '../../types';

export const controlInput = (element: ElementT): ControlInputT => {
  const control = element instanceof HTMLInputElement;
  return !control || element === null ? null : element;
};
