// Dependencies
import React from 'react';
import { useMutation } from '@apollo/client';

// Components and GraphQL
import { TableButton } from '@/components/Table/TableButton/TableButton';
import { DELETE_POST_BY_ID } from '@/lib/apollo/deletePost';

// Hooks
import { useSearchData } from '@/context/SearchArticle';

// Types
interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

interface DeletePostResponse {
  deletePost: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  id,
}) => {
  // Custom hook to access and update the search data context
  const { setSearchData } = useSearchData();

  // Setting up the mutation
  const [executeDeletePost, { loading, error }] = useMutation<DeletePostResponse>(DELETE_POST_BY_ID, {
    onCompleted: data => handleDeletePostSuccess(data),
    onError: (error) => console.error('Delete Post Error:', error),
  });

  const handleDeletePostSuccess = (data: DeletePostResponse) => {
    // Update the context data
    setSearchData(prevData => ({
      ...prevData,
      getPosts: prevData?.getPosts.filter(post => post.id !== id) || [],
    }));

    // Close the modal
    onClose();
  };

  // Handle the delete
  const handleDelete = async () => {
    try {
      // Mutation with the post ID
      const response = await executeDeletePost({
        variables: { deletePostId: id },
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      });
      console.log('Delete Post Response:', response);
    } catch (e) {
      console.error('Error Deleting Post:', e);
    }
  };

  // Render nothing if the modal is not open
  if (!isOpen) return null;

  // Modal layout
  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-20 flex'>
      <div className='relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg'>
        <div>
          <h3 className='text-lg font-bold'>
            Are you sure you want to delete this entry?
          </h3>
        </div>
        <div className='mt-4 flex justify-between items-center'>
          <TableButton color='maroon' text='Cancel' onClick={onClose} />
          <TableButton color='maroon' text='Delete' onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
