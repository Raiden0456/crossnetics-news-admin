// library
import React from 'react'

// components
import { Header } from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Article } from '@/components/ArticleAdd/Article'

function Posts() {
  return (
    <div className='container mx-auto  w-10/12'>
      <Header />

      <div className='mt-10 flex justify-between mx-auto'>
        <Sidebar />
        <Article />
      </div>
    </div>
  )
}

export default Posts
