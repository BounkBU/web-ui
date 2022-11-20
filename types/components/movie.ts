import type { TmdbI } from '../tmdb'

export interface MovieListProps {
  title: string
  movies: TmdbI[]
  isMovie: boolean
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
