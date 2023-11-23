// library
import React from 'react'

interface UploadBlockProps {
  onImageUpload: (file: File) => void
}

export const UploadBlock: React.FC<UploadBlockProps> = ({
  onImageUpload,
}) => {
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0])
    }
  }

  return (
    <div className='p-4 shadow rounded flex justify-between w-full gap-6'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col items-center justify-center w-[301px] h-[145px] p-4 border-2 border-dashed border-ctp-pink rounded text-slate-500'>
          <input
            type='file'
            onChange={handleImageChange}
            className='opacity-0 absolute cursor-pointer h-56 w-72 '
          />
          <p className='font-bold text-xl'>Upload Image</p>
          <p className='text-xs text-slate-500 italic'>
            Max 1920x1080
          </p>
        </div>

        <div>
          <p className='text-slate-500 pb-4'>Images Copyright</p>

          <input
            type='text'
            placeholder="Image's Copyright"
            className='rounded-full bg-white p-2 w-full placeholder:px-2'
          />
        </div>
      </div>

      <div className=' h-full border-2 border-ctp-pink rounded' />

      <div className='flex flex-col w-full gap-1.5'>
        <label
          htmlFor='title'
          className='text-slate-500 font-bold px-2'
        >
          Title
        </label>
        <input
          id='title'
          type='text'
          placeholder='Title'
          className='mb-2 p-2 border rounded-full focus:outline-0 placeholder:px-4'
        />
        <label
          htmlFor='author'
          className='text-slate-500 font-bold px-2'
        >
          Author
        </label>
        <select
          className='mb-2 p-2 border rounded-full focus:outline-0 px-4'
          id='author'
        >
          <option value='crossnetics'>Crossnetics</option>
        </select>

        <label
          htmlFor='tag'
          className='text-slate-500 font-bold px-2'
        >
          Tag
        </label>
        <select
          className='p-2 border rounded-full focus:outline-0 px-4'
          id='tag'
        >
          <option value='crossnetics'>Crossnetics</option>
        </select>
      </div>
    </div>
  )
}
