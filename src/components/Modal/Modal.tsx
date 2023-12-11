import React from 'react'
import { TableButton } from '@/components/Table/TableButton/TableButton'
import { useMutation } from '@apollo/client'
import { DELETE_POST_BY_ID } from '@/lib/apollo/deletePost'
import { GET_POSTS_QUERY_TABLE } from '@/lib/apollo/getPosts'

interface DeleteConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  id: string
}
interface ModalProps {
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

const DeleteConfirmationModal: React.FC<
  DeleteConfirmationModalProps
> = ({ isOpen, onClose, id }) => {
  const [executeDeletePost, { loading, error }] =
    useMutation<DeletePostResponse>(DELETE_POST_BY_ID, {
      onCompleted: data => handleDeletePostSuccess(data),
      onError: error => console.error('Delete Post Error:', error),
      update: (cache, { data }) => {
        const existingPosts = cache.readQuery<{
          getPosts: ModalProps[]
        }>({
          query: GET_POSTS_QUERY_TABLE,
        })

        const newPosts = existingPosts?.getPosts.filter(
          post => post.id !== id
        )

        cache.writeQuery({
          query: GET_POSTS_QUERY_TABLE,
          data: { getPosts: newPosts },
        })
      },
    })

  const handleDeletePostSuccess = (data: DeletePostResponse) => {
    console.log('Deleted Post Successful:', data)
  }

  const handleDelete = async () => {
    console.log(id)
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

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-20 flex'>
      <div className='relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg'>
        <div>
          <h3 className='text-lg font-bold'>
            Are you sure you want to delete this entry?
          </h3>
        </div>
        <div className='mt-4 flex justify-between items-center'>
          <TableButton
            color='maroon'
            text='Cancel'
            onClick={onClose}
          />
          <TableButton
            color='maroon'
            text='Delete'
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal
