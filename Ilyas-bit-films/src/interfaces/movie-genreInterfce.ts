interface GenreInfo {
  id: number;
  name: string;
}

export interface WelcomeResponse {
  genres: GenreInfo[];
}
