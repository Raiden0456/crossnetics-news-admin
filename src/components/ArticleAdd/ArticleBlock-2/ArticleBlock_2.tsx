// library
import React from 'react'

// components
import { ArticleHeader } from '@/components/ArticleAdd/ArticleHeader/ArticleHeader'
import { ArticleDescriptionBlock2 } from '@/components/ArticleAdd/ArticleBlock-2/ArticleBlock-2Description/ArticleDescriptionBlock_2'

export const ArticleBlock2 = () => {
  return (
    <div className='w-full max-w-screen-lg px-7 py-5 bg-ctp-mantle rounded-xl flex flex-col'>
      <h1 className='text-2xl w-full max-w-screen-lg mx-auto text-ctp-text italic'>
        Block #2
      </h1>

      <ArticleHeader
        blog={''}
        news={''}
        visible={false}
        titleLeft='Tittle H1'
        tagLeft='h1'
        titleRight='Tittle H2'
        tagRight='h2'
        className='justify-start items-center gap-3 w-full'
        paddingX='px-0'
      />

      <ArticleDescriptionBlock2 />
    </div>
  )
}
