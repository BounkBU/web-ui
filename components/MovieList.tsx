import type { MovieListProps } from '../types/components/movie'
import MovieCard from './MovieCard'

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <div className='w-[90%] mx-auto my-8'>
      <span className='text-xl font-semibold text-white'>{title}</span>
      <div className='grid grid-cols-6 xxl:grid-cols-7 gap-2 xxl:gap-12 mt-4'>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  )
}
