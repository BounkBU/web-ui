import type { Season, TmdbI } from '../tmdb'

export interface MovieCardProps {
  movie: TmdbI
  isMovie: boolean
}

export interface ScrollableCardProps {
  number: number
}

export interface ScrollableCardListProps {
  title: string
}

export interface SerieCardProps {
  title: string
  season: Season
}
