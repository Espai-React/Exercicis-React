export type ElementId = `${string}-${string}-${string}-${string}-${string}`;

export type ElementLlistaT = {
  id: ElementId;
  timestamp: string;
  text: string;
};

export type ElementT = Element | RadioNodeList | null;
export type ControlInputT = HTMLInputElement | null;

export type SeoT = {
  titol: string;
  descripcio: string;
}
