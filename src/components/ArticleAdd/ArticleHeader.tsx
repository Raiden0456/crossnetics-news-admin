// library
import React, { FC } from 'react'

// icon
import basket from '../../assets/basket.svg'
import Image from 'next/image'

export const ArticleHeader: FC = () => {
  return (
    <div className='w-full max-w-screen-lg px-7 py-5 bg-ctp-mantle rounded-xl flex justify-between mx-auto'>
      <div className='flex justify-center items-center gap-3'>
        <div className='text-ctp-text text-xs font-extrabold uppercase px-10 py-3 bg-ctp-surface1 rounded-xl'>
          blog post
        </div>

        <div className='text-ctp-text text-xs font-extrabold uppercase px-10 py-3 bg-ctp-surface1 rounded-xl'>
          news entry
        </div>
      </div>

      <div className='flex justify-start items-center gap-5'>
        <div className='justify-start items-start flex'>
          <div className='w-11 h-11 rounded-full border border-ctp-maroon flex justify-center items-center'>
            <Image src={basket} alt={'basket'} />
          </div>
        </div>
        <div className='px-5 py-2.5 rounded-full border border-ctp-blue justify-center items-center flex'>
          <div className="text-ctp-text text-xs font-extrabold font-['Montserrat'] uppercase">
            Preview
          </div>
        </div>
        <div className='px-5 py-3 bg-ctp-blue rounded-xl justify-center items-center flex'>
          <div className="text-ctp-mantle text-xs font-extrabold font-['Montserrat'] uppercase">
            PUBLISH
          </div>
        </div>
      </div>
    </div>
  )
}
