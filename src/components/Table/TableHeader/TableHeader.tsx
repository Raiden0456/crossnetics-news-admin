// library
import React, { FC } from 'react'

export const TableHeader: FC = () => (
  <div className='w-full max-w-screen-lg px-7 py-5 bg-sky-50 rounded-xl flex justify-between mx-auto'>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Date
    </div>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Articles
    </div>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Category
    </div>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Likes
    </div>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Views
    </div>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Management
    </div>
    <div className='text-center text-slate-300 text-xs font-medium'>
      Author
    </div>
  </div>
)
