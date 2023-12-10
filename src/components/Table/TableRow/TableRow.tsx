// library
import React, { FC, useState } from 'react'

// hooks
import { useMutation } from '@apollo/client'

// query
import { DELETE_POST_BY_ID } from '@/lib/apollo/deletePost'

// components
import { TableCell } from '@/components/Table/TableCell/TableCell'
import { TableButton } from '@/components/Table/TableButton/TableButton'
import { formatNumber } from '@/utils/format_number'

interface TableRowProps {
  id: string
  date?: string
  title: string
  tags?: string[]
  likes: number
  views: number
  author?: string
}

interface DeletePostResponse {
  DeletePost: {
    deletePost: string
  }
}

export const TableRow: FC<TableRowProps> = ({
  id,
  date,
  title,
  tags,
  likes,
  views,
  author,
}) => {
  const [executeDeletePost, { loading, error }] =
    useMutation<DeletePostResponse>(DELETE_POST_BY_ID, {
      onCompleted: data => handleDeletePostSuccess(data),
      onError: error => console.error('Delete Post Error:', error),
    })

  const handleDeletePostSuccess = (data: DeletePostResponse) => {
    console.log('Deleted Post Successful:', data)
  }

  const handleDelete = async (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    try {
      const response = await executeDeletePost({
        variables: { deletePostId: id },
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      })
      console.log('Delete Post Response:', response)
    } catch (e) {
      console.error('Error Deleting Post:', e)
    }
  }

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
          onClick={e => handleDelete(e)}
        />
      </div>
      <TableCell width='w-32' text_align='text-center'>
        {author}
      </TableCell>
    </div>
  )
}
