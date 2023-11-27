'use client'
import React from 'react'
import Link from 'next/link'

const LoginCard: React.FC = props => {
  return (
    <div className='rounded-2xl p-8 outline-ctp-pink outline outline-2 w-[500px] shadow-lg'>
      <h1 className='text-4xl font-extrabold capitalize mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-ctp-lavender to-ctp-mauve'>
        Crossnetics Blog <br /> Admin Panel
      </h1>
      <div className='mb-4'>
        <label
          htmlFor='login'
          className='block text-ctp-lavender font-bold text-xl mb-2'
        >
          Login
        </label>
        <input
          type='text'
          id='login'
          className='w-full bg-ctp-mantle border border-ctp-pink rounded-xl py-2 px-3 focus:outline-none focus:border-ctp-lavender text-ctp-text'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-ctp-lavender font-bold text-xl mb-2'
        >
          Password
        </label>
        <div className='relative'>
          <input
            type='password'
            id='password'
            className='w-full bg-ctp-mantle border border-ctp-pink rounded-xl py-2 px-3 focus:outline-none focus:border-ctp-lavender text-ctp-text'
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          type='button'
          className='bg-ctp-lavender transition-transform hover:scale-105 active:scale-100 uppercase text-mantle font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline m-auto'
        >
          <Link href='/admin'>Log in</Link>
        </button>
      </div>
    </div>
  )
}

export default LoginCard
