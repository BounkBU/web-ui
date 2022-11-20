export default function ScrollableCard({ number }: { number: number }) {
  return (
    <div className='bg-white w-[210px] h-[315px] rounded flex items-center justify-center'>
      {number}
    </div>
  )
}
