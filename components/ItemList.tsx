import type { ItemListProps } from '../types/components/item'
import Item from './Item'

export default function ItemList({ title, movies }: ItemListProps) {
  return (
    <div className='w-[90%] mx-auto my-8'>
      <span className='text-xl font-semibold text-white'>{title}</span>
      <div className='grid grid-cols-6 xxl:grid-cols-7 gap-2 xxl:gap-12 mt-4'>
        {movies.map((movie, index) => (
          <Item key={index} movie={movie} />
        ))}
      </div>
    </div>
  )
}
