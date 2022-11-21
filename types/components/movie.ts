import { Movie } from '../movie'
import type { TmdbI } from '../tmdb'

export interface FilteredMovieProps {
  movie: Movie
  isMovie: boolean
}

export interface FilteredTopicProps {
  topic: string
  resultLength: number
  active: boolean
  onClickHandler: () => void
}

export interface MovieListProps {
  title: string
  movies: TmdbI[]
  isMovie: boolean
}
