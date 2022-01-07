export interface StatsOtherInterface {
  "attack": number;
  "defense": number;
  "magic": number;
  "difficulty": number;
}

export interface OtherInterface {
  "name": string;
  "title": string;
  "blurb": string;
  "image": string;
  "info":StatsOtherInterface ;
}
