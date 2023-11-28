// library
import React, { FC } from 'react'

// icon
import basket from '../../../assets/basket.svg'
import Image from 'next/image'

interface ArticleHeaderProps {
  blog?: string
  news?: string
  visible: boolean
  titleLeft?: string
  titleRight?: string
  tagLeft?: keyof React.ReactHTML
  tagRight?: keyof React.ReactHTML
  className?: string
  paddingX?: string
  numberOfBlock: number
  removeBlock: () => void
}

const ButtonContainer: FC<{
  visible: boolean
  children: React.ReactNode
}> = ({ visible, children }) => {
  return (
    <div
      className={`flex justify-start items-center gap-5 ${
        visible ? 'block' : 'hidden'
      }`}
    >
      {children}
    </div>
  )
}
export const ArticleHeader: FC<ArticleHeaderProps> = ({
  blog,
  news,
  visible,
  titleLeft,
  titleRight,
  tagLeft = 'h1',
  tagRight = 'h2',
  className,
  paddingX,
  numberOfBlock,
  removeBlock,
}) => {
  const Tag = tagLeft || tagRight

  return (
    <div
      className={`w-full max-w-screen-lg ${paddingX} py-5 bg-ctp-mantle rounded-xl flex justify-between mx-auto`}
    >
      <div className={`flex ${className}`}>
        <div className='cursor-pointer text-ctp-text text-xs font-extrabold uppercase px-10 py-3 bg-ctp-surface0 rounded-xl hover:bg-ctp-lavender hover:text-ctp-mantle duration-200'>
          {blog !== '' ? blog : <Tag>{titleLeft}</Tag>}
        </div>

        <div className='cursor-pointer text-ctp-text text-xs font-extrabold uppercase px-10 py-3 bg-ctp-surface0 rounded-xl hover:bg-ctp-lavender hover:text-ctp-mantle duration-200'>
          {news !== '' ? news : <Tag>{titleRight}</Tag>}
        </div>
      </div>

      {visible && (
        <ButtonContainer visible={visible}>
          <div className='cursor-pointer w-11 h-11 rounded-full transition-color duration-200 border border-ctp-maroon hover:bg-ctp-maroon flex justify-center items-center'>
            <Image src={basket} alt='basket' />
          </div>
          <div className='cursor-pointer px-5 py-2.5 rounded-xl transition-all duration-200 border border-ctp-blue text-ctp-text hover:bg-ctp-blue hover:text-ctp-mantle hover:scale-105 justify-center items-center flex'>
            <span className="text-xs font-extrabold font-['Montserrat'] uppercase">
              Preview
            </span>
          </div>
          <div className='cursor-pointer px-5 py-3 transition-all duration-200 border border-ctp-blue text-ctp-text hover:bg-ctp-blue hover:text-ctp-mantle hover:scale-105 rounded-xl justify-center items-center flex'>
            <span className="text-xs font-extrabold font-['Montserrat'] uppercase">
              PUBLISH
            </span>
          </div>
        </ButtonContainer>
      )}

      {numberOfBlock > 0 && !visible ? (
        <div
          className='cursor-pointer w-11 h-11 rounded-full transition-color duration-200 border border-ctp-maroon hover:bg-ctp-maroon flex justify-center items-center'
          onClick={removeBlock}
        >
          <Image src={basket} alt='basket' />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
