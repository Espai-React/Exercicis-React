export const data = (data) => {

  const dadesData = data.split("/");
  return new Date(dadesData[2], dadesData[1] - 1, dadesData[0]).toLocaleDateString();
};

export const temps = (totalMinuts) => {
  let segons = totalMinuts % 60;
  if (segons.toString().length === 1) segons = "0" + segons;
  const minuts = Math.floor(totalMinuts / 60);
  const duracio = `${minuts}:${segons}`;
  return duracio;
};
