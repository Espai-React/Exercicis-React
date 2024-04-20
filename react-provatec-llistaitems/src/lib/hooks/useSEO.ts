import { useEffect } from 'react';
import type { SeoT } from '../../types';

export const useSEO = ({ titol, descripcio }: SeoT) => {
  useEffect(() => {
    document.title = titol;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', descripcio);
  }, [titol, descripcio]);
};
