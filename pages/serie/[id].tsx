import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  fetchTmdbSerieDetail,
  thdbSerieDetailState,
} from '../../features/movie/tmdbSlice'
import WebLogo from '../../public/logo.png'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import * as GiIcons from 'react-icons/gi'
import * as TbIcons from 'react-icons/tb'
import 'react-circular-progressbar/dist/styles.css'
import { Link as SmoothLink } from 'react-scroll'
import { SerieCard, PlaylistCard, Searchbar } from '../../components'

export default function SerieDetail() {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useAppDispatch()
  const tmdbSerie = useAppSelector(thdbSerieDetailState)

  useEffect(() => {
    async function onFetchTmdbSerieDetail() {
      dispatch(fetchTmdbSerieDetail({ id: Number(id) }))
    }
    onFetchTmdbSerieDetail()
  }, [dispatch, id])

  return (
    <div className='min-h-screen bg-zinc-900 scroll-smooth'>
      <div className='px-12 mx-auto flex items-center justify-between shadow'>
        <Link href='/'>
          <Image src={WebLogo} alt='logo' className='w-44' />
        </Link>
        <div className='w-[900px] h-[110px] flex justify-end'>
          <Searchbar />
        </div>
      </div>
      {tmdbSerie && (
        <Fragment>
          <div className='relative w-full h-[600px] flex items-center'>
            <div
              style={{ backgroundImage: `url(${tmdbSerie.backdrop_path})` }}
              className='w-full h-full absolute top-0 opacity-5 z-0'
            ></div>
            <div className='max-w-[1260px] mx-auto flex opacity-100 z-10'>
              <Image
                src={tmdbSerie.image_path}
                alt=''
                width={300}
                height={450}
                className='rounded-xl shadow-xl'
              />
              <div className='flex flex-col ml-24 text-white'>
                <div className='flex flex-col'>
                  <span className='text-4xl font-hover font-bold mb-2'>
                    {tmdbSerie.title}
                  </span>
                  <div className='flex items-center'>
                    <span>{tmdbSerie.number_of_seasons} Season(s)</span>
                    <GiIcons.GiPlainCircle className='w-2 mx-2' />
                    <span>{tmdbSerie.genres}</span>
                  </div>
                </div>
                <div className='flex items-center my-6'>
                  <span className='text-xl font-medium'>User Score:</span>
                  <div className='ml-4 w-16'>
                    <CircularProgressbar
                      value={tmdbSerie.rating * 10}
                      text={`${Math.round(tmdbSerie.rating * 10)}%`}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        textSize: '26px',
                        backgroundColor: '#002f3f',
                        textColor: '#fff',
                        pathColor: '#fffc2d',
                        trailColor: '#ddd',
                      })}
                    />
                  </div>
                  <SmoothLink
                    activeClass='active'
                    to='playlist'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <div className='p-4 flex items-center rounded-lg ml-8 shadow-lg border border-zinc-700 bg-green-600 cursor-pointer'>
                      <TbIcons.TbPlaylist className='text-2xl' />
                      <span className='text-lg ml-2'>Soundtrack Playlists</span>
                    </div>
                  </SmoothLink>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl mb-2'>Overview</span>
                  <p className='font-light'>
                    {tmdbSerie.overview ||
                      `Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Accusamus doloribus ratione, nulla ex
                    error voluptatum voluptas sint voluptate reiciendis natus!
                    Aut in voluptatum sapiente velit aliquam architecto non
                    incidunt nesciunt facere praesentium! Iste nostrum quos
                    assumenda molestias dolorem laudantium eos provident saepe
                    optio? Impedit accusantium possimus iure! Iste, labore
                    voluptates.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className='py-8 w-11/12 mx-auto' id='season'>
            <span className='text-2xl font-medium text-white'>Seasons</span>
            <div className='grid grid-cols-2 mt-8 gap-8'>
              {tmdbSerie.seasons.map((season, index) => (
                <SerieCard
                  title={tmdbSerie.title}
                  season={season}
                  key={index}
                />
              ))}
            </div>
          </section>
          <section className='py-8 w-11/12 mx-auto' id='playlist'>
            <span className='text-2xl font-medium text-white'>
              Soundtrack Playlists
            </span>
            <div className='flex flex-wrap mt-8 gap-8'>
              {[...Array(4)].map((_, index) => (
                <PlaylistCard key={index} />
              ))}
            </div>
          </section>
        </Fragment>
      )}
    </div>
  )
}
