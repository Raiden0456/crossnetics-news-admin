'use client'
// library
import React from 'react'

// components
import { UploadBlock } from '@/components/ArticleAdd/ArticleUploadBlock/UploadBlock'

export const ArticleDescription = () => {
  const handleImageUpload = (file: File) => {
    // Обработка файла изображения
  }
  return (
    <div className='w-full max-w-screen-lg px-7 py-5 bg-ctp-mantle rounded-xl flex justify-between mx-auto md:max-w-screen-md'>
      <UploadBlock onImageUpload={handleImageUpload} visible={true} />
    </div>
  )
}
