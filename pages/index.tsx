import WebLogo from '../public/logo.png'
import Image from 'next/image'
import Searchbar from '../components/Searchbar'
import CardList from '../components/CardList'

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-900'>
      <div className='py-12 flex flex-col items-center'>
        <Image src={WebLogo} alt='logo' className='w-44 md:w-80' />
        <Searchbar />
        <CardList />
        <CardList />
      </div>
    </div>
  )
}
