// library
import React from 'react'

interface UploadBlockProps {
  onImageUpload: (file: File) => void
}

export const UploadBlock: React.FC<UploadBlockProps> = ({
  onImageUpload,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onImageUpload(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className='p-4 flex justify-between w-full gap-6'>
      <div className='flex flex-col gap-5'>
      <div
          className='flex flex-col items-center justify-center w-[301px] h-[145px] p-4 border-2 border-dashed border-ctp-pink rounded-2xl overflow-hidden text-ctp-subtext1'
          style={{
            backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <input
            type='file'
            onChange={handleImageChange}
            className='opacity-0 absolute cursor-pointer h-56 w-72'
          />
          {!imageUrl && (
            <>
              <p className='font-bold text-xl text-ctp-subtext1'>Upload Image</p>
              <p className='text-xs text-ctp-subtext0 italic'>
                Max 1920x1080
              </p>
            </>
          )}
        </div>

        <div>
          <p className='text-ctp-subtext1 pb-4'>Copyright</p>

          <input
            type='text'
            placeholder="Source"
            className='rounded-full border focus:outline-none bg-ctp-crust text-ctp-text border-ctp-pink focus:border-ctp-lavender p-2 w-full placeholder:px-2'
          />
        </div>
      </div>

      <div className=' h-full border border-ctp-pink rounded' />

      <div className='flex flex-col w-full gap-1.5'>
        <label
          htmlFor='title'
          className='text-ctp-subtext1 font-bold px-2'
        >
          Title
        </label>
        <input
          id='title'
          type='text'
          placeholder='Title'
          className='mb-2 p-2 rounded-full placeholder:px-4 bg-ctp-crust text-ctp-text focus:outline-none border-ctp-pink border focus:border-ctp-lavender'
        />
        <label
          htmlFor='author'
          className='text-ctp-subtext1 font-bold px-2 '
        >
          Author
        </label>
        <select
          className='mb-2 p-2 border rounded-full focus:outline-0 px-4 bg-ctp-crust text-ctp-text border-ctp-pink focus:border-ctp-lavender'
          id='author'
        >
          <option value='crossnetics'>Crossnetics</option>
        </select>

        <label
          htmlFor='tag'
          className='text-ctp-subtext1 font-bold px-2'
        >
          Tag
        </label>
        <select
          className='p-2 border rounded-full focus:outline-0 px-4 bg-ctp-crust text-ctp-text border-ctp-pink focus:border-ctp-lavender'
          id='tag'
        >
          <option value='crossnetics'>Crossnetics</option>
        </select>
      </div>
    </div>
  )
}
