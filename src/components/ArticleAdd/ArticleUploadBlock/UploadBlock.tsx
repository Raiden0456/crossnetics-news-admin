'use client'
// library
import React from 'react'

// components
import { ImageUpload } from '@/components/ArticleAdd/ArticleUploadBlock/ImageUpload/ImageUpload'
import { Input } from '@/components/Input/Input'
import { Select } from '@/components/Select/Select'

interface UploadBlockProps {
  onImageUpload: (file: File) => void
  visible: boolean
  bgColor?: string
  padding?: string
  borderRadius?: string
}

export const UploadBlock: React.FC<UploadBlockProps> = ({
  onImageUpload,
  visible,
  bgColor,
  padding,
  borderRadius,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null)

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      onImageUpload(file)
      setImageUrl(URL.createObjectURL(file))
    }
  }
  return (
    <div className='pb-4 flex w-full justify-between gap-6'>
      <ImageUpload
        handleImageChange={handleImageChange}
        imageUrl={imageUrl}
        bgColor={bgColor}
        padding={padding}
        borderRadius={borderRadius}
      />

      <div
        className={`h-full border border-ctp-pink rounded ${
          visible ? 'block' : 'hidden'
        }`}
      />

      <div
        className={`flex flex-col w-full gap-1.5 ${
          visible ? 'block' : 'hidden'
        }`}
      >
        <Input
          id='tittle'
          label='Tittle'
          placeholder='Tittle'
          className='mb-2 p-2 rounded-full placeholder:px-4 bg-ctp-crust text-ctp-text focus:outline-none border-ctp-pink border focus:border-ctp-lavender'
          htmlFor='title'
          labelClassName='text-ctp-subtext1 font-bold px-2'
        />
        <Select
          label='Author'
          labelClassName='text-ctp-subtext1 font-bold px-2'
          SelectClassName='mb-2 p-2 border rounded-full focus:outline-0 px-4 bg-ctp-crust text-ctp-text border-ctp-pink focus:border-ctp-lavender'
          optionValue='Crossnetics'
          htmlFor='author'
          id='author'
          value='crossnetics'
        />

        <Select
          label='Tag'
          labelClassName='text-ctp-subtext1 font-bold px-2'
          SelectClassName='p-2 border rounded-full focus:outline-0 px-4 bg-ctp-crust text-ctp-text border-ctp-pink focus:border-ctp-lavender'
          optionValue='Crossnetics'
          htmlFor='tag'
          id='tag'
          value='crossnetics'
        />
      </div>
    </div>
  )
}
