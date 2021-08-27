export interface Anime {
  id: string;
  titles: {
    en: string;
    jp: string;
  };
  descriptions: {
    en: string;
    jp: string;
    it: string;
  };
  status: number;
  start_date: string;
  end_date: string;
  season_year: number;
  episodes_count: number;
  cover_image: string;
  banner_image: string;
  genres: Array<string>;
  score: number;
}
