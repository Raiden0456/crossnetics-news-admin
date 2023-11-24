// library
import React, { FC } from 'react'

//components
import { ArticleHeader } from '@/components/ArticleAdd/ArticleHeader'
import { ArticleDescription } from '@/components/ArticleAdd/ArticleDescription'

export const Article: FC = () => {
  return (
    <div className='flex w-full flex-col items-center gap-12 mb-10'>
      <h1 className='text-3xl w-full max-w-screen-lg mx-auto text-ctp-text font-bold'>
        Add New Article
      </h1>
      <ArticleHeader />

      <ArticleDescription />
    </div>
  )
}
