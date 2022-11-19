import Image from 'next/image'
import { Fragment, useState } from 'react'
import PlayIcon from '../public/play-icon.png'

export default function PlaylistCard() {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <div
      className='bg-zinc-800 hover:bg-opacity-70 rounded-lg cursor-pointer p-6 flex flex-col'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='w-full mb-2 relative'>
        <Fragment>
          <Image
            src='https://media.glamour.com/photos/5fab426f655313e3e2d3d72a/1:1/w_2400,h_2400,c_limit/EIP_101_Unit_00278R.jpg'
            alt='playlist'
            width='150'
            height='150'
          />
          <Image
            src={PlayIcon}
            alt='play icon'
            width='60'
            height='60'
            className={`absolute right-0 duration-300 cursor-default ${
              isHovering ? 'opacity-100 bottom-0' : 'opacity-0 -bottom-3'
            }`}
          />
        </Fragment>
      </div>
      <span className='overflow-hidden whitespace-nowrap text-ellipsis font-medium text-lg text-whitesmoke w-[150px]'>
        Emily in paris Emily in paris Emily in paris Emily in paris
      </span>
      <span className='text-zinc-500 overflow-hidden whitespace-nowrap text-ellipsis w-[150px]'>
        By
        rexintonrexintonrexintonrexintonrexintonrexintonrexintonrexintonrexintonrexintonrexinton
      </span>
    </div>
  )
}
