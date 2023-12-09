// library
import React, { FC } from 'react'

interface InputProps {
  label: string
  placeholder: string
  className: string
  htmlFor: string
  labelClassName: string
  id?: string
  value?: string
  onChange?: (e: any) => void
  type?: string
}

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  className,
  htmlFor,
  labelClassName,
  id,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  )
}
