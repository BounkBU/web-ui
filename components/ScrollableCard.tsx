import type { ScrollableCardProps } from '../types/components/card'

export default function ScrollableCard({ number }: ScrollableCardProps) {
  return (
    <div className='bg-white w-[210px] h-[315px] rounded flex items-center justify-center'>
      {number}
    </div>
  )
}
