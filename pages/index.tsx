import WebLogo from '../public/logo.png'
import Image from 'next/image'
import Searchbar from '../components/Searchbar'
import CardList from '../components/CardList'
import ItemList from '../components/ItemList'
import { useEffect, useState } from 'react'
import type { TmdbMovieI } from '../types/tmdb'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchTmdbMovies, tmdbMoviesState } from '../features/movie/tmdbSlice'

export default function Home() {
  const dispatch = useAppDispatch()
  const tmdbMovies = useAppSelector(tmdbMoviesState)

  useEffect(() => {
    async function onFetchTmdbMovies() {
      dispatch(fetchTmdbMovies({ page: 1 }))
    }
    onFetchTmdbMovies()
  }, [dispatch])

  return (
    <div className='min-h-screen bg-zinc-900'>
      <div className='py-12 flex flex-col items-center'>
        <Image src={WebLogo} alt='logo' className='w-44 md:w-80' />
        <Searchbar />
        <CardList />
        <CardList />
        {tmdbMovies && (
          <ItemList title='Popular from TMDB' movies={tmdbMovies} />
        )}
      </div>
    </div>
  )
}
