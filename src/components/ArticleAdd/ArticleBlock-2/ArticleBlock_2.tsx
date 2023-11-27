// library
import React, { FC } from 'react'

// components
import { ArticleHeader } from '@/components/ArticleAdd/ArticleHeader/ArticleHeader'
import { ArticleDescriptionBlock2 } from '@/components/ArticleAdd/ArticleBlock-2/ArticleBlock-2Description/ArticleDescriptionBlock_2'

interface ArticleBlock2Props {
  addNewBlock: () => void
  numberOfBlock: number
}

export const ArticleBlock2: FC<ArticleBlock2Props> = ({
  addNewBlock,
  numberOfBlock,
}) => {
  return (
    <div className='w-full max-w-screen-lg px-7 py-5 bg-ctp-mantle rounded-xl flex flex-col'>
      <h1 className='text-2xl w-full max-w-screen-lg mx-auto text-ctp-text italic'>
        Block #{numberOfBlock + 1}
      </h1>

      <ArticleHeader
        blog={''}
        news={''}
        visible={false}
        titleLeft='Title H1'
        tagLeft='h1'
        titleRight='Title H2'
        tagRight='h2'
        className='justify-start items-center gap-3 w-full'
        paddingX='px-0'
      />

      <ArticleDescriptionBlock2 />

      <button
        onClick={addNewBlock}
        className='w-full bg-ctp-crust border border-ctp-surface2 p-3 rounded-2xl text-ctp-text font-bold hover:bg-ctp-surface0'
      >
        Add Block
      </button>
    </div>
  )
}
