export interface TmdbMovieI {
  id: number
  poster_path: string
  title: string
}

export interface ITmdbMovieFilter {
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

export interface ITmdbMovieSlice {
  movies: TmdbMovieI[]
  movieDetail: TmdbMovieDetailI | null
}
