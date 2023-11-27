'use client'
import React from 'react'
import { UploadBlock } from '@/components/ArticleAdd/ArticleUploadBlock/UploadBlock'
import { Input } from '@/components/Input/Input'

export const ArticleDescriptionBlock2 = () => {
  const handleImageUpload = (file: File) => {
    // Обработка файла изображения
  }
  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='w-full flex flex-col gap-3'>
        <Input
          label='Title'
          placeholder='Title'
          className='mb-2 p-2 rounded-full placeholder:px-4 bg-ctp-crust text-ctp-text focus:outline-none border-ctp-pink border focus:border-ctp-lavender'
          htmlFor='title'
          labelClassName='text-ctp-subtext1 font-bold px-2'
          id='title'
        />
      </div>
      <div className='w-full flex flex-col gap-3'>
        <label
          htmlFor='TextBlock'
          className='text-ctp-subtext1 font-bold px-2'
        >
          Text Block
        </label>
        <textarea
          name='textBlock'
          id='TextBlock'
          placeholder='Text Block'
          className='mb-2 p-2 rounded-xl placeholder:px-4 bg-ctp-crust text-ctp-text focus:outline-none border-ctp-pink border focus:border-ctp-lavender resize-none'
          style={{ height: ' 140px' }}
        />
      </div>

      <UploadBlock
        onImageUpload={handleImageUpload}
        visible={false}
        bgColor='bg-ctp-crust'
        padding='p-3'
        borderRadius='rounded-3xl'
      />
    </div>
  )
}
