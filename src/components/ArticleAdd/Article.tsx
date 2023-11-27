'use client'
// library
import React, { FC, useState } from 'react'

//components
import { ArticleHeader } from '@/components/ArticleAdd/ArticleHeader/ArticleHeader'
import { ArticleDescription } from '@/components/ArticleAdd/ArticleDescription/ArticleDescription'
import { ArticleBlock2 } from '@/components/ArticleAdd/ArticleBlock-2/ArticleBlock_2'

export const Article: FC = () => {
  const [block, setBlock] = useState([{}])

  const addNewBlock = () => {
    setBlock([...block, {}])
  }

  return (
    <div className='flex w-full flex-col items-center gap-12 mb-10'>
      <h1 className='text-3xl w-full max-w-screen-lg mx-auto text-ctp-text font-bold'>
        Add New Article
      </h1>
      <ArticleHeader
        blog='blog post'
        news='news entry'
        visible={true}
        className='justify-center items-center gap-3'
        paddingX='px-7'
      />

      <ArticleDescription />

      {block.map((block, index) => (
        <ArticleBlock2
          key={index}
          addNewBlock={addNewBlock}
          numberOfBlock={index}
        />
      ))}
    </div>
  )
}
