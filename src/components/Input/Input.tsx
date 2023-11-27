// library
import React, { FC } from 'react'

interface InputProps {
  label: string
  placeholder: string
  className: string
  htmlFor: string
  labelClassName: string
  id: string
}

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  className,
  htmlFor,
  labelClassName,
  id,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        className={className}
      />
    </>
  )
}
