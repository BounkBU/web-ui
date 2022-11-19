import Item from './Item'

interface ItemListProps {
  title: string
}

export default function ItemList({ title }: ItemListProps) {
  return (
    <div className='w-[90%] mx-auto my-8'>
      <span className='text-xl font-semibold text-white'>{title}</span>
      <div className='grid grid-cols-6 xxl:grid-cols-7 gap-2 xxl:gap-12 mt-4'>
        {[...Array(12)].map((_, index) => (
          <Item key={index} number={index + 1} />
        ))}
      </div>
    </div>
  )
}
