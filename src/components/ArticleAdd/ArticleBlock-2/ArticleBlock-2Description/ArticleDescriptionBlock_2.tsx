'use client'
// library
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
})
import 'react-quill/dist/quill.snow.css'

// components
import { UploadBlock } from '@/components/ArticleAdd/ArticleUploadBlock/UploadBlock'
import { Input } from '@/components/Input/Input'

export const ArticleDescriptionBlock2 = () => {
  const [value, setValue] = useState('')
  const handleImageUpload = (file: File) => {
    // Обработка файла изображения
  }

  const moduleOptions = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['image', 'code-block'],
      ['blockquote', 'code-block'],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
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
      <div className='w-full flex flex-col gap-10 h-full'>
        <ReactQuill
          theme='snow'
          value={value}
          onChange={setValue}
          modules={moduleOptions}
          className='h-fit text-ctp-text mb-14'
          placeholder='Text Block'
        />
      </div>

      {/*<UploadBlock*/}
      {/*  onImageUpload={handleImageUpload}*/}
      {/*  visible={false}*/}
      {/*  bgColor='bg-ctp-crust'*/}
      {/*  padding='p-3'*/}
      {/*  borderRadius='rounded-3xl'*/}
      {/*/>*/}
    </div>
  )
}
