import { endpoints } from '../const/endpoints';

export const fetchPellicules = async (cerca) => {
  const { urlBase, apiKey } = endpoints;
  const url = `${urlBase}?apikey=${apiKey}&s=${cerca}`;
  console.log('url -->', url);

  if (!cerca) return null;
  try {
    const resposta = await fetch(url);
    const dades = await resposta.json();

    const pellicules = dades.Search;
    const pelliculesMapejades = pellicules?.map(
      ({ imdbID, Title, Year, Poster }) => ({
        id: imdbID,
        titol: Title,
        any: Year,
        cartell: Poster,
      })
    );
    return pelliculesMapejades;
  } catch (error) {
    console.log('error -->', error);
  }
};
