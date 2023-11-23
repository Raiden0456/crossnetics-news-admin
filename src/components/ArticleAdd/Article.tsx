// library
import React, { FC } from 'react'

//components
import { ArticleHeader } from '@/components/ArticleAdd/ArticleHeader'
import { ArticleDescription } from '@/components/ArticleAdd/ArticleDescription'

export const Article: FC = () => {
  return (
    <div className='flex w-full flex-col items-center gap-12 mb-10'>
      <h1 className='text-xl w-full max-w-screen-lg mx-auto text-white font-bold'>
        ADD NEW ARTICLE
      </h1>
      <ArticleHeader />

      <ArticleDescription />
    </div>
  )
}
