// library
import React, { FC } from 'react'

export const TableHeader: FC = () => (
  <div className='w-full max-w-screen-lg px-7 py-5 bg-ctp-mantle rounded-xl flex justify-between mx-auto'>
    <div className='w-20 text-center text-ctp-text text-xs font-medium'>
      Date
    </div>
    <div className='w-52 text-center text-ctp-text text-xs font-medium'>
      Articles
    </div>
    <div className='w-28 text-center text-ctp-text text-xs font-medium'>
      Category
    </div>
    <div className='w-10 text-center text-ctp-text text-xs font-medium'>
      Likes
    </div>
    <div className='w-10 text-center text-ctp-text text-xs font-medium'>
      Views
    </div>
    <div className='text-center text-ctp-text text-xs font-medium w-40'>
      Management
    </div>
    <div className='w-32 text-center text-ctp-text text-xs font-medium'>
      Author
    </div>
  </div>
)
