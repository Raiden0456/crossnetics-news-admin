'use client'
// library
import React, { FC, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Oval } from 'react-loader-spinner'

// components
import { Pagination } from '@/components/Table/Pagination/Table-Pagination'
import { TableHeader } from '@/components/Table/TableHeader/TableHeader'
import { TableRow } from '@/components/Table/TableRow/TableRow'

// hooks
import { useAuthCheck } from '@/hooks/useAuthCheck'

// utils
import { GET_POSTS_QUERY_TABLE } from '@/lib/apollo/getPosts'
import { useSearchData } from '@/context/SearchArticle'
import DeleteConfirmationModal from '@/components/Modal/Modal'

interface Description {
  title: string
  author: string
  date: string
  likes: number
  views: number
  tags: string[]
}

interface TableProps {
  id: string
  postType: string
  description: Description
}

export const Table: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [isModalOpen, setModalOpen] = useState(false)
  const { data, loading, error } = useQuery(GET_POSTS_QUERY_TABLE)
  const { searchData } = useSearchData()
  const postsData = searchData ? searchData.getPosts : data?.getPosts

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const authCheck = useAuthCheck()

  if (!authCheck) {
    return null
  }

  if (loading)
    return (
      <div className='mx-auto flex items-center'>
        <Oval
          ariaLabel='loading-indicator'
          height={100}
          width={100}
          strokeWidth={2000}
          strokeWidthSecondary={2030}
          color='#191926'
          secondaryColor='#565693'
        />
      </div>
    )
  if (error) return <p>Error: {error.message}</p>

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = postsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='flex w-full flex-col items-center gap-12 mb-10'>
      <TableHeader />

      <div className='flex flex-col gap-5 w-full lg:max-w-screen-md xl:max-w-screen-lg'>
        {currentItems.map((data: TableProps, index: number) => (
          <TableRow
            id={data.id}
            key={index}
            date={data.description.date}
            title={data.description.title}
            likes={data.description.likes}
            views={data.description.views}
            author={data.description.author}
            tags={data.description.tags}
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
          />
        ))}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.getPosts.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  )
}
