import React from 'react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {

  test('afegir i esborrar tasques', async () => {
    const usuari = userEvent.setup();
    render(<App />);

    const element1 = screen.getByText(/Jugar a rugby/);
    expect(element1).toBeDefined();
    const element2 = screen.getByText(/Estudiar programació/);
    expect(element2).toBeDefined();

    const llista = screen.getByRole('list');
    expect(llista).toBeDefined();
    expect(llista.childNodes.length).toBe(2);

    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    const botoAfegir = form.querySelector('button');
    expect(botoAfegir).toBeDefined();

    const textAleatori = crypto.randomUUID();
    await usuari.type(input, textAleatori);
    await usuari.click(botoAfegir!);

    expect(llista.childNodes.length).toBe(3);

    const regExpTextAleatori = new RegExp(textAleatori);
    const elementTextAletatori = screen.getByText(regExpTextAleatori);

    /* const elementTextAletatori = screen.getByText((contingut, element) => {
      if (element && contingut) return contingut.includes(textAleatori);
      return false;
    }); */

    const botoEsborrarTextAleatori =
      elementTextAletatori.parentElement!.querySelector('button');
    expect(botoEsborrarTextAleatori).toBeDefined();

    await usuari.click(botoEsborrarTextAleatori!);
    screen.debug();
    expect(llista.childNodes.length).toBe(2);

    const botoEsborrar1 = element1.parentElement!.querySelector('button');
    await usuari.click(botoEsborrar1!);
    expect(llista.childNodes.length).toBe(1);
    const botoEsborrar2 = element2.parentElement!.querySelector('button');
    await usuari.click(botoEsborrar2!);
    const llistaNull = screen.queryByRole('list');
    expect(llistaNull).toBeNull();

    const textNoTasques = screen.getByText('No hi ha tasques');
    expect(textNoTasques).toBeDefined();
  });
});
