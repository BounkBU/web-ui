import Image from 'next/image'
import Link from 'next/link'
import type { FilteredMovieProps } from '../types/components/movie'

export default function FilteredMovie({ movie, isMovie }: FilteredMovieProps) {
  return (
    <Link
      href={`/${isMovie ? 'movie' : 'serie'}/${movie.id}`}
      className='mt-4 first:mt-0'
    >
      <div className='flex items-center border border-zinc-700 rounded-lg cursor-pointer'>
        <Image
          src={movie.poster_path}
          alt=''
          width={90}
          height={150}
          className='rounded-l-lg'
        />
        <span className='ml-8 text-xl'>{movie.title}</span>
      </div>
    </Link>
  )
}
