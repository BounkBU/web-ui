export default function FilteredTopic({
  topic,
  resultLength,
  active,
  onClickHandle,
}: {
  topic: string
  resultLength: number
  active: boolean
  onClickHandle: () => void
}) {
  return (
    <div
      className={`p-6 w-full cursor-pointer flex justify-between ${
        active ? 'bg-zinc-600 ' : ''
      }`}
      onClick={onClickHandle}
    >
      <span className='text-xl font-medium'>{topic}</span>
      <span className='px-3 bg-zinc-800 rounded-md'>{resultLength}</span>
    </div>
  )
}
