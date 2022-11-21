import Image from 'next/image'
import { praseDateFormat } from '../utils/parse_date'
import type { SerieCardProps } from '../types/components/card'

export default function SerieCard({ title, season }: SerieCardProps) {
  return (
    <div className='bg-zinc-800 w-full rounded-lg flex'>
      <Image
        src={season.poster_path}
        alt='season'
        width={130}
        height={195}
        className='rounded-l-lg'
      />
      <div className='flex flex-col text-white p-8'>
        <span className='text-2xl'>{season.name}</span>
        <span>
          {season.air_date.split('-')[0]} | {season.episode_count} Episodes
        </span>
        <span className='font-light mt-4'>
          {`${season.name} of ${title} premiered on ${praseDateFormat(
            season.air_date,
          )}`}
        </span>
      </div>
    </div>
  )
}
