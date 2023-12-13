// library
import React, { FC } from 'react'

interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
  setItemsPerPage: (number: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  setCurrentPage,
  setItemsPerPage,
}) => {
  const pageNumbers: number[] = []
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pageNumbers.push(i)
    }
  }

  const handleChangeItemsPerPage = (newItemsPerPage: number) => {
    const newTotalPages = Math.ceil(totalItems / newItemsPerPage)
    if (currentPage > newTotalPages) {
      // Не изменяем, если текущая страница будет пустой
      return
    }
    setItemsPerPage(newItemsPerPage)
  }

  return (
    <div className='flex items-center space-x-2 text-ctp-mantle'>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='py-1 px-3 bg-ctp-pink rounded-xl'
      >
        {'<'}
      </button>
      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {index > 0 && pageNumbers[index - 1] !== number - 1 && (
            <div className='py-1 px-3 rounded-full bg-ctp-surface2 text-center'>
              ...
            </div>
          )}
          <button
            onClick={() => paginate(number)}
            className={`py-1 px-3 rounded-full ${
              currentPage === number
                ? 'bg-ctp-lavender'
                : 'bg-ctp-surface2'
            }`}
          >
            {number}
          </button>
        </React.Fragment>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='py-1 px-3 bg-ctp-pink rounded-xl'
      >
        {'>'}
      </button>
      <select
        value={itemsPerPage}
        onChange={e =>
          handleChangeItemsPerPage(Number(e.target.value))
        }
        className='rounded-md p-1 text-ctp-surface2'
      >
        {[5, 10, 20].map(number => (
          <option key={number} value={number}>
            {number} / Page
          </option>
        ))}
      </select>
    </div>
  )
}
