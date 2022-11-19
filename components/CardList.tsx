import Card from './Card'
import Slider from 'react-slick'
import { sliderSettings } from '../config'

export default function CardList() {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='w-[80%] max-w-[900px] mx-auto my-8'>
      <span className='text-xl font-semibold text-white'>
        Top picks for you
      </span>
      <div className='mt-4'>
        <Slider {...sliderSettings}>
          {sampleArray.map((el) => (
            <Card key={el} number={el} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
