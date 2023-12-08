// library
import React from 'react'

// components
import Image from 'next/image'
import Link from 'next/link'
import { StatCard } from '@/components/Sidebar/StatCard/StatCard'

// image
import avatar from '../../assets/avatar.png'

export const Sidebar = () => {
  return (
    <div className='w-60 h-[450px] py-4 bg-ctp-mantle opacity-90 outline outline-1 outline-ctp-pink rounded-[30px] flex flex-col items-center justify-between'>
      <div className='flex flex-col items-center gap-2.5'>
        <Image
          className='rounded-full'
          src={avatar}
          alt='Avatar'
          width={30}
          height={30}
        />
        <div className='flex flex-col items-center gap-1.5'>
          <span className='text-ctp-text text-base font-semibold'>
            Miracle Vaccaro
          </span>
          <span className='text-ctp-subtext0 text-xs font-normal'>
            Administrator
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2.5'>
        <StatCard title='Articles' value={13900} />
        <StatCard title='Views' value={15700} />
        <StatCard title='Likes' value={25300} />
      </div>
      <button className='py-3 px-10 bg-ctp-pink text-ctp-mantle text-xs font-extrabold uppercase rounded-2xl hover:scale-105 active:scale-100 transition-all duration-200'>
        <Link href='/post'>New article</Link>
      </button>
    </div>
  )
}
