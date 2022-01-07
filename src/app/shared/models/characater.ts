export interface StatsInterface {
  strength: number;
  intelligence: number;
  agility: number;
  gadgets: number;
}

export interface CharacterInterface {
  id: number;
  name: string;
  race: string;
  origin: string;
  image: string;
  alias: string;
  stats: StatsInterface;
}
