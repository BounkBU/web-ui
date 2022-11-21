export interface SearchResults {
  search: string
  results: Result[]
}

export interface Result {
  topic: string
  movies: Movie[]
}

export interface Movie {
  id: number
  title: string
  poster_path: string
  isMovie: boolean
}

export interface ICreateSearchMovieFilter {
  tmdb_movie_id: number
  title: string
  overview: string
  genres: string
  image_path: string
  release_date: string
  rating: number
}
