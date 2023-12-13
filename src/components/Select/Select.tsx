// library
import React, { FC } from 'react'

interface SelectProps {
  label: string
  labelClassName: string
  SelectClassName: string
  optionValue: string
  htmlFor: string
  id: string
  value: string
}

export const Select: FC<SelectProps> = ({
  label,
  labelClassName,
  SelectClassName,
  htmlFor,
  id,
  value,
  optionValue,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <select className={SelectClassName} id={id}>
        <option value={value}>{optionValue}</option>
      </select>
    </>
  )
}
