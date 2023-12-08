// library
import React, { FC } from 'react'

// components
import { TableCell } from '@/components/Table/TableCell/TableCell'
import { TableButton } from '@/components/Table/TableButton/TableButton'
import { formatNumber } from '@/utils/format_number'

interface TableRowProps {
  date: string
  title: string
  category: string
  likes: number
  views: number
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
  <div className='px-7 py-5 bg-ctp-mantle opacity-90 rounded-3xl flex justify-between items-center  '>
    <TableCell width='w-20' text_align='text-center'>
      {date}
    </TableCell>
    <TableCell width='w-52'>{title}</TableCell>
    <TableCell width='w-28' text_align='text-center'>
      {category}
    </TableCell>
    <TableCell width='w-10' text_align='text-center'>
      {formatNumber(likes)}
    </TableCell>
    <TableCell width='w-10' text_align='text-center'>
      {formatNumber(views)}
    </TableCell>
    <div className='flex gap-2 w-40 justify-center'>
      <TableButton color='lavender' text='Edit' />
      <TableButton color='maroon' text='Delete' />
    </div>
    <TableCell width='w-32' text_align='text-center'>
      {author}
    </TableCell>
  </div>
)
