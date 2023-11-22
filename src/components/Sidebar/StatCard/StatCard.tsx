// library
import React from 'react'

export const StatCard = ({
  title,
  value,
}: {
  title: string
  value: string
}) => (
  <div className='w-36 px-5 py-1 rounded-lg flex justify-between items-center border'>
    <span className='text-xs font-extrabold uppercase'>{title}</span>
    <span className='px-1 py-0.5 bg-blue-500 text-white text-xs font-extrabold uppercase rounded-lg'>
      {value}
    </span>
  </div>
)
