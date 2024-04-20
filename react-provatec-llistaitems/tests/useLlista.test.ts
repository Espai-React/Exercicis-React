import { describe, expect, test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLlista } from '../src/lib/hooks/useLlista';
import { llistaInicial } from '../src/lib/const/llistaInicial';

describe('useLlista custom hook', () => {
  test("hauria d'afegir i esborrar elements", () => {
    const { result } = renderHook(() => useLlista());
    expect(result.current.llista).toEqual(llistaInicial);
    expect(result.current.llista.length).toBe(2);

    const textAleatori = crypto.randomUUID();

    act(() => {
      result.current.afegirElement(textAleatori);
    });
    expect(result.current.llista.length).toBe(3);

    act(() => {
      result.current.esborrarElement(result.current.llista[0].id);
    });
    expect(result.current.llista.length).toBe(2);
  });2
});
