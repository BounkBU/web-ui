import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { searchResultMoviesState } from '../features/movie/movieSlice'
import type { SearchbarProps } from '../types/components/searchbar'
import type { Movie, Result } from '../types/movie'
import SearchMovieCard from './SearchMovieCard'

export default function Searchbar({
  defaultValue,
  disabled,
  isShowResults,
}: SearchbarProps) {
  const router = useRouter()
  const searchResultMovies = useAppSelector(searchResultMoviesState)
  const [searchValue, setSearchValue] = useState(defaultValue || '')
  const [searchResults, setSearchResults] = useState<Movie[]>()

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault()
    router.push(`/search?q=${searchValue}`)
  }

  function onSetSearchResultsMovieHandler(
    results: Result[],
    searchValue: string,
  ) {
    const allMovies = results.map((result: Result) => {
      return result.movies
        .filter((movie) => movie.title.toLowerCase().includes(searchValue))
        .map((movie) => {
          return {
            ...movie,
            isMovie: result.topic.toLowerCase().includes('movie'),
          }
        })
    })
    const initialSelectedMovies = allMovies.reduce(
      (accumulator: Movie[], currentValue: Movie[]) =>
        accumulator.concat(currentValue),
      [],
    )
    setSearchResults(initialSelectedMovies)
  }

  useEffect(() => {
    onSetSearchResultsMovieHandler(searchResultMovies, searchValue)
  }, [searchResultMovies, searchValue])

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex w-11/12 max-w-3xl relative my-8'
    >
      <input
        type='text'
        disabled={disabled}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Search for movies...'
        className='flex-1 px-2 rounded border focus:border-zinc-400 focus:outline-none'
      />
      <button
        type='submit'
        disabled={disabled}
        className='border border-zinc-400 text-white p-2 rounded ml-3'
      >
        SEARCH
      </button>
      {isShowResults && searchValue !== '' && (
        <div className='search-results absolute w-full bg-zinc-700 max-h-96 top-12 rounded overflow-y-auto z-10'>
          {searchResults?.map((movie, index) => (
            <SearchMovieCard
              key={index}
              movie={movie}
              isMovie={movie.isMovie}
            />
          ))}
        </div>
      )}
    </form>
  )
}
