export const fetchPlanets = async ({ queryKey }) => {
  const [key, url, page] = queryKey;
  const res = await fetch(`${url}?page=${page}`);
  return res.json();
};

export const fetchPeople = async({ queryKey, pageParam = 1 }) => {
  const [ key, url ] = queryKey;
  console.log(pageParam, key, url, queryKey);
  const res = await fetch(`${url}?page=${pageParam}`);
  return res.json();
};
