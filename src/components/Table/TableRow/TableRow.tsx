// library
import React, { FC } from 'react'

// components
import { TableCell } from '@/components/Table/TableCell/TableCell'
import { TableButton } from '@/components/Table/TableButton/TableButton'

interface TableRowProps {
  date: string
  title: string
  category: string
  likes: string
  views: string
  author: string
}

export const TableRow: FC<TableRowProps> = ({
  date,
  title,
  category,
  likes,
  views,
  author,
}) => (
  <div className='px-7 py-5 bg-slate-50 rounded-3xl flex justify-between items-center'>
    <TableCell width='w-18'>{date}</TableCell>
    <TableCell width='w-52'>{title}</TableCell>
    <TableCell width='w-28'>{category}</TableCell>
    <TableCell width='w-10'>{likes}</TableCell>
    <TableCell width='w-10'>{views}</TableCell>
    <div className='flex gap-2'>
      <TableButton color='blue' text='Edit' />
      <TableButton color='pink' text='Delete' />
    </div>
    <TableCell width='w-32'>{author}</TableCell>
  </div>
)
