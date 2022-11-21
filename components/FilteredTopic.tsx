import type { FilteredTopicProps } from '../types/components/movie'

export default function FilteredTopic({
  topic,
  resultLength,
  active,
  onClickHandler,
}: FilteredTopicProps) {
  return (
    <div
      className={`p-6 w-full cursor-pointer flex justify-between ${
        active ? 'bg-zinc-600 ' : ''
      }`}
      onClick={onClickHandler}
    >
      <span className='text-xl font-medium'>{topic}</span>
      <span className='px-3 bg-zinc-800 rounded-md'>{resultLength}</span>
    </div>
  )
}
