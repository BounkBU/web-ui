import WebLogo from '../public/logo.png'
import Image from 'next/image'
import { Searchbar, ScrollableCardList, MovieList } from '../components'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  fetchTmdbMovies,
  fetchTmdbSeries,
  tmdbMoviesState,
  tmdbSeriesState,
} from '../features/movie/tmdbSlice'

export default function Home() {
  const dispatch = useAppDispatch()
  const tmdbMovies = useAppSelector(tmdbMoviesState)
  const tmdbSeries = useAppSelector(tmdbSeriesState)

  useEffect(() => {
    async function onFetchTmdbMovies() {
      dispatch(fetchTmdbMovies({ page: 1 }))
      dispatch(fetchTmdbSeries({ page: 1 }))
    }
    onFetchTmdbMovies()
  }, [dispatch])

  return (
    <div className='min-h-screen bg-zinc-900'>
      <div className='py-12 flex flex-col items-center'>
        <Image src={WebLogo} alt='logo' className='w-44 md:w-80' />
        <Searchbar />
        <ScrollableCardList title='Top 10 Popular Search Movies' />
        <ScrollableCardList title='Top 10 Popular Playlists' />
        {tmdbMovies && (
          <MovieList
            title='Popular Movies from TMDB'
            movies={tmdbMovies}
            isMovie={true}
          />
        )}
        {tmdbSeries && (
          <MovieList
            title='Popular Series from TMDB'
            movies={tmdbSeries}
            isMovie={false}
          />
        )}
      </div>
    </div>
  )
}
