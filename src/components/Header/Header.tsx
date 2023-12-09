'use client'
// library
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'

// components
import Image from 'next/image'

// image
import logo from '../../assets/logo.svg'

export const Header: FC = () => {
  const router = useRouter()
  const LogOut = () => {
    localStorage.removeItem('token')
    router.push('/')
  }
  return (
    <header className='shadow-md p-4 rounded-bl-[30px] rounded-br-[30px] bg-ctp-crust '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={logo} alt='Logo' className='h-10' />
        </div>

        <div className='flex items-center w-36'>
          <button
            className='w-full px-4 py-2.5 rounded-xl hover:bg-ctp-maroon text-ctp-text hover:text-ctp-mantle text-xs font-extrabold uppercase bg-ctp-surface0 transition-all hover:scale-105'
            onClick={LogOut}
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}
