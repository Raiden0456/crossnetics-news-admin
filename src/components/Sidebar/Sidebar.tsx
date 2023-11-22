// library
import React from 'react'

// components
import Image from 'next/image'

// image
import avatar from '../../assets/avatar.png'
import { StatCard } from '@/components/Sidebar/StatCard/StatCard'

export const Sidebar = () => {
  return (
    <div className='w-52 h-[450px] py-4 bg-sky-50 rounded-2xl flex flex-col items-center gap-14'>
      <div className='flex flex-col items-center gap-2.5'>
        <Image
          className='rounded-full'
          src={avatar}
          alt='Avatar'
          width={30}
          height={30}
        />
        <div className='flex flex-col items-center gap-1.5'>
          <span className='text-slate-600 text-base font-semibold'>
            Miracle Vaccaro
          </span>
          <span className='text-gray-400 text-xs font-normal'>
            Administrator
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2.5'>
        <StatCard title='Articles' value='243' />
        <StatCard title='Views' value='3589' />
        <StatCard title='Likes' value='420' />
      </div>
      <button className='p-3 bg-blue-500 text-white text-xs font-extrabold uppercase rounded-lg'>
        New article
      </button>
    </div>
  )
}
