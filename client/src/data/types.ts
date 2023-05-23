export interface Badge {
  name: string,
  image: string,
  description: string,
}

export interface Player {
  name: string,
  score: number,
  badges: Badge[],
}