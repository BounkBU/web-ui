import Image from 'next/image'
import Link from 'next/link'
import type { Movie } from '../types/movie'
export default function SearchMovieCard({
  movie,
  isMovie,
}: {
  movie: Movie
  isMovie: boolean
}) {
  return (
    <Link href={`/${isMovie ? 'movie' : 'serie'}/${movie.id}`}>
      <div className='flex items-center bg-zinc-700 hover:bg-zinc-800 duration-150 cursor-pointer'>
        <Image
          src={movie.poster_path}
          alt={movie.title}
          width={70}
          height={100}
        />
        <span className='text-white text-xl ml-6'>{movie.title}</span>
      </div>
    </Link>
  )
}
