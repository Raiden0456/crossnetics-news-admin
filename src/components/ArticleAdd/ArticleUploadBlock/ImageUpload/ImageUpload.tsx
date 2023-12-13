// library
import React, { FC } from 'react'

interface ImageUploadProps {
  imageUrl: string | null
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  bgColor?: string
  padding?: string
  borderRadius?: string
}

export const ImageUpload: FC<ImageUploadProps> = ({
  imageUrl,
  handleImageChange,
  bgColor,
  padding,
  borderRadius,
}) => {
  return (
    <div
      className={`flex flex-col gap-5 ${bgColor} ${padding} ${borderRadius}`}
    >
      <div
        className='flex flex-col items-center justify-center w-[301px] h-[145px] p-4 border-2 border-dashed border-ctp-pink rounded-2xl overflow-hidden text-ctp-subtext1'
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          objectFit: 'cover',
        }}
      >
        <input
          type='file'
          onChange={handleImageChange}
          className='opacity-0 absolute cursor-pointer h-56 w-72'
        />
        {!imageUrl && (
          <>
            <p className='font-bold text-xl text-ctp-subtext1'>
              Upload Image
            </p>
            <p className='text-xs text-ctp-subtext0 italic'>
              Max 1920x1080
            </p>
          </>
        )}
      </div>

      <div>
        <p className='text-ctp-subtext1 pb-4'>
          Image&apos;s Copyright
        </p>

        <input
          type='text'
          placeholder='Source'
          className='rounded-full border focus:outline-none bg-ctp-crust text-ctp-text border-ctp-pink focus:border-ctp-lavender p-2 w-full placeholder:px-2'
        />
      </div>
    </div>
  )
}
