// library
import React from 'react'

// components
import { Header } from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Article } from '@/components/ArticleAdd/Article'

function Posts() {
  return (
    <div className='container mx-auto'>
      <Header />

      <div className='mt-10 flex justify-between'>
        <Sidebar />
        <Article />
      </div>
    </div>
  )
}

export default Posts
