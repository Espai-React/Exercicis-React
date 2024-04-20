const VALORSIDMOMENT = {
  uuid: () => crypto.randomUUID(),
  moment: () => new Date().toLocaleString(),
};

export const { uuid, moment } = VALORSIDMOMENT;
