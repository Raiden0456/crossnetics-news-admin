// library
import React, { FC } from 'react'

// icon
import basket from '../../assets/basket.svg'
import Image from 'next/image'

export const ArticleHeader: FC = () => {
  return (
    <div className='w-full max-w-screen-lg px-7 py-5 bg-ctp-mantle rounded-xl flex justify-between mx-auto'>
      <div className='flex justify-center items-center gap-3'>
        <div className='text-ctp-text text-xs font-extrabold uppercase px-10 py-3 bg-ctp-surface0 rounded-xl'>
          blog post
        </div>

        <div className='text-ctp-text text-xs font-extrabold uppercase px-10 py-3 bg-ctp-surface0 rounded-xl'>
          news entry
        </div>
      </div>

      <div className='flex justify-start items-center gap-5'>
        <div className='justify-start items-start flex'>
          <div className='cursor-pointer w-11 h-11 rounded-full transition-color duration-200 border border-ctp-maroon hover:bg-ctp-maroon flex justify-center items-center'>
            <Image src={basket} alt={'basket'} />
          </div>
        </div>
        <div className='cursor-pointer px-5 py-2.5 rounded-xl transition-all duration-200 border border-ctp-blue text-ctp-text hover:bg-ctp-blue hover:text-ctp-mantle hover:scale-105 justify-center items-center flex'>
          <div className=" text-xs font-extrabold font-['Montserrat'] uppercase ">
            Preview
          </div>
        </div>
        <div className='cursor-pointer px-5 py-3 transition-all duration-200 border border-ctp-blue text-ctp-text hover:bg-ctp-blue hover:text-ctp-mantle hover:scale-105 rounded-xl justify-center items-center flex'>
          <div className=" text-xs font-extrabold font-['Montserrat'] uppercase">
            PUBLISH
          </div>
        </div>
      </div>
    </div>
  )
}
