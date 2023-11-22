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

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='p-2 bg-ctp-blue rounded-xl'
      >
        {'<'}
      </button>
      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {index > 0 && pageNumbers[index - 1] !== number - 1 && (
            <span className='p-2'>...</span>
          )}
          <button
            onClick={() => paginate(number)}
            className={`p-2 rounded-full ${
              currentPage === number ? 'bg-blue-200' : 'bg-blue-100'
            }`}
          >
            {number}
          </button>
        </React.Fragment>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='p-2 bg-ctp-blue rounded-xl'
      >
        {'>'}
      </button>
      <select
        value={itemsPerPage}
        onChange={e => setItemsPerPage(Number(e.target.value))}
        className='rounded-md p-1 text-ctp-mantle'
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
