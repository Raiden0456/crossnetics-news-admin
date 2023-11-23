// library
import React, { FC } from 'react'

interface TableButton {
  color: string
  text: string
}

export const TableButton: FC<TableButton> = ({ color, text }) => (
  <div
    className={`h-7 px-5 py-1 bg-ctp-${color} rounded-lg flex items-center`}
  >
    <span className=' text-ctp-mantle text-xs font-medium'>{text}</span>
  </div>
)
