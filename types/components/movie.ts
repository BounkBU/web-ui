import type { TmdbI } from '../tmdb'

export interface MovieListProps {
  title: string
  movies: TmdbI[]
  isMovie: boolean
}
