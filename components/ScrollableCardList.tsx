import ScrollableCard from './ScrollableCard'
import Slider from 'react-slick'
import { sliderSettings } from '../config'
import type { ScrollableCardListProps } from '../types/components/card'

export default function ScrollableCardList({ title }: ScrollableCardListProps) {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='w-[80%] max-w-[900px] mx-auto my-8'>
      <span className='text-xl font-semibold text-white'>{title}</span>
      <div className='mt-4'>
        <Slider {...sliderSettings}>
          {sampleArray.map((el) => (
            <ScrollableCard key={el} number={el} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
