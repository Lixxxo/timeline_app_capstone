export interface Event {
  id: number;
  name: string;
  date: string;
  members: { name: string }[];
  results: { tag: string; result: string }[];
  links: { url: string; alias: string }[];
}
