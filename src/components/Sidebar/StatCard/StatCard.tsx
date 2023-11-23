// library
import React from 'react'

export const StatCard = ({
  title,
  value,
}: {
  title: string
  value: string
}) => (
  <div className='w-36 px-5 py-2 rounded-2xl flex justify-between items-center bg-ctp-surface0'>
    <span className='text-xs text-ctp-text font-extrabold uppercase'>{title}</span>
    <span className='px-1 py-0.5 bg-ctp-pink text-ctp-mantle text-xs font-extrabold uppercase rounded-lg'>
      {value}
    </span>
  </div>
)
