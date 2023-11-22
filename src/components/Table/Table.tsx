'use client'
// library
import React, { FC, useState } from 'react'

// components
import { Pagination } from '@/components/Table/Pagination/Table-Pagination'
import { TableHeader } from '@/components/Table/TableHeader/TableHeader'
import { TableRow } from '@/components/Table/TableRow/TableRow'

//mock
import { tableData } from '@/components/Table/table-mock/table-mock'
export const Table: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = tableData.slice(
    indexOfFirstItem,
    indexOfLastItem
  )
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <TableHeader />

      <div className='flex flex-col gap-5 w-full max-w-screen-lg'>
        {currentItems.map((data, index) => (
          <TableRow
            key={index}
            date={data.date}
            title={data.title}
            category={data.category}
            likes={data.likes.toString()}
            views={data.views.toString()}
            author={data.author}
          />
        ))}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={tableData.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  )
}
