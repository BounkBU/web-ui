export interface TmdbI {
  id: number
  poster_path: string
  title: string
}

export interface ITmdbFilter {
  page: number
}

export interface ITmdbMovieDetailFilter {
  id: number
}

export interface TmdbMovieDetailI {
  tmdb_id: number
  title: string
  backdrop_path: string
  genres: string
  overview: string
  image_path: string
  release_date: string
  rating: number
}

export interface TmdbSerieDetailI {
  tmdb_id: number
  title: string
  backdrop_path: string
  genres: string
  overview: string
  image_path: string
  number_of_seasons: number
  seasons: Season[]
  rating: number
}

export interface Season {
  name: string
  air_date: string
  episode_count: number
  poster_path: string
}

export interface ITmdbMovieSlice {
  movies: TmdbI[]
  movieDetail: TmdbMovieDetailI | null
  series: TmdbI[]
  serieDetail: TmdbSerieDetailI | null
}
