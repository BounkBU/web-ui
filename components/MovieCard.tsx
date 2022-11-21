import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import type { MovieCardProps } from '../types/components/card'

export default function MovieCard({ movie, isMovie }: MovieCardProps) {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <Link href={`/${isMovie ? 'movie' : 'serie'}/${movie.id}`}>
      <div
        className='flex items-center justify-center shadow-lg border border-zinc-800 rounded-md'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {!isHovering ? (
          <div className='w-full h-full'>
            <Image
              className='rounded-md'
              src={movie.poster_path}
              alt={movie.title}
              width={210}
              height={315}
            />
          </div>
        ) : (
          <div className='w-full h-full relative overflow-hidden rounded-md'>
            <Image
              className='rounded-md opacity-30 scale-105 duration-300'
              src={movie.poster_path}
              alt={movie.title}
              width={210}
              height={315}
            />
            <div className='absolute flex items-center justify-center w-full h-full top-0'>
              <span className='text-white font-hover text-2xl text-center'>
                {movie.title}
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
