import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import client from '../../client'
import { FilteredMovie, FilteredTopic, Searchbar } from '../../components'
import WebLogo from '../../public/logo.png'
import type { Movie, Result } from '../../types/components/movie'

export default function Search() {
  const router = useRouter()
  const { q } = router.query
  const [filteredMovies, setFilteredMovies] = useState<Result[]>()
  const [selectedTopic, setSelectedTopic] = useState<string>('All')
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])
  const [allMoviesLength, setAllMoviesLength] = useState<number>()

  function setFilteredAllMovies(results: Result[]) {
    const allMovies = results.map((result: Result) => {
      return result.movies.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          isMovie: result.topic.toLowerCase().includes('movie'),
        }
      })
    })
    const initialSelectedMovies = allMovies.reduce(
      (accumulator: Movie[], currentValue: Movie[]) =>
        accumulator.concat(currentValue),
      [],
    )
    setSelectedMovies(initialSelectedMovies)
    setAllMoviesLength(initialSelectedMovies.length)
  }

  useEffect(() => {
    async function onFetchFilteredMovies() {
      if (!q) return
      const { data } = await client.get(`/search?q=${q}`)
      setFilteredMovies(data.results)
      setFilteredAllMovies(data.results)
    }
    onFetchFilteredMovies()
  }, [q])

  useEffect(() => {
    function onFilteredSelectedMovies() {
      if (!filteredMovies) return
      switch (selectedTopic) {
        case 'All':
          setFilteredAllMovies(filteredMovies)
          return
        default:
          const foundedMovie = filteredMovies?.filter(
            (result) => result.topic === selectedTopic,
          )[0]
          setSelectedMovies(
            foundedMovie.movies.map((movie) => ({
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              isMovie: foundedMovie.topic.toLowerCase().includes('movie'),
            })),
          )
          return
      }
    }
    onFilteredSelectedMovies()
  }, [filteredMovies, selectedTopic])

  return (
    <div className='min-h-screen bg-zinc-900 scroll-smooth'>
      <div className='px-12 mx-auto flex items-center justify-between shadow'>
        <Link href='/'>
          <Image src={WebLogo} alt='logo' className='w-32' />
        </Link>
        <div className='w-[900px] h-[110px] flex justify-end'>
          {q && <Searchbar defaultValue={String(q)} disabled />}
        </div>
      </div>
      <div className='max-w-[1360px] flex mx-auto py-24 text-white'>
        <div className='flex flex-col w-80 border border-zinc-700 rounded mr-8 h-max'>
          <FilteredTopic
            topic='All'
            resultLength={allMoviesLength || 0}
            active={selectedTopic === 'All'}
            onClickHandle={() => setSelectedTopic('All')}
          />
          {filteredMovies &&
            filteredMovies.map((result, index) => (
              <FilteredTopic
                key={index}
                topic={result.topic}
                resultLength={result.movies.length}
                active={selectedTopic === result.topic}
                onClickHandle={() => setSelectedTopic(result.topic)}
              />
            ))}
        </div>
        <div className='flex-1 flex flex-col'>
          {selectedMovies.length !== 0 ? (
            selectedMovies.map((movie, index) => (
              <FilteredMovie
                movie={movie}
                isMovie={movie.isMovie}
                key={index}
              />
            ))
          ) : (
            <div className='flex items-center justify-center'>
              <span className='text-2xl'>Not found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
