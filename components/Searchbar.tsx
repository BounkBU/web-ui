import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

export default function Searchbar() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault()
    router.push(`/search?q=${searchValue}`)
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex w-11/12 max-w-3xl relative my-8'
    >
      <input
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Search for movies...'
        className='flex-1 px-2 rounded border focus:border-zinc-400 focus:outline-none'
      />
      <button
        type='submit'
        className='border border-zinc-400 text-white p-2 rounded ml-3'
      >
        SEARCH
      </button>
      <div className='search-results absolute w-full bg-zinc-700 max-h-96 top-12 rounded overflow-y-auto z-10'></div>
    </form>
  )
}
