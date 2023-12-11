// library
import React, { FC } from 'react'

// components
import { TableCell } from '@/components/Table/TableCell/TableCell'
import { TableButton } from '@/components/Table/TableButton/TableButton'
import { formatNumber } from '@/utils/format_number'
import { GET_POSTS_QUERY_TABLE } from '@/lib/apollo/getPosts'
import DeleteConfirmationModal from '@/components/Modal/Modal'

interface TableRowProps {
  id: string
  date?: string
  title: string
  tags?: string[]
  likes: number
  views: number
  author?: string
  openModal: () => void
  closeModal: () => void
  isModalOpen: boolean
}

export const TableRow: FC<TableRowProps> = ({
  id,
  date,
  title,
  tags,
  likes,
  views,
  author,
  openModal,
  closeModal,
  isModalOpen,
}) => {
  return (
    <div className='px-7 py-5 bg-ctp-mantle opacity-90 rounded-3xl flex justify-between items-center'>
      <TableCell width='w-20' text_align='text-center'>
        {date}
      </TableCell>
      <TableCell width='w-52' text_align='text-center'>
        {title}
      </TableCell>
      <TableCell width='w-28' text_align='text-center'>
        {tags && tags.join(', ')}
      </TableCell>
      <TableCell width='w-10' text_align='text-center'>
        {formatNumber(likes)}
      </TableCell>
      <TableCell width='w-10' text_align='text-center'>
        {formatNumber(views)}
      </TableCell>
      <div className='flex gap-2 w-40 justify-center'>
        <TableButton color='lavender' text='Edit' />
        <TableButton
          color='maroon'
          text='Delete'
          onClick={openModal}
        />
      </div>
      <TableCell width='w-32' text_align='text-center'>
        {author}
      </TableCell>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        id={id}
      />
    </div>
  )
}
