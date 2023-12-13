// library
import React, { FC } from 'react'

interface TableButtonProps {
  color: string
  text: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const TableButton: FC<TableButtonProps> = ({
  color,
  text,
  onClick,
}) => {
  return (
    <div
      className={`h-7 px-5 py-1 bg-ctp-${color} rounded-lg flex items-center cursor-pointer`}
      onClick={e => onClick && onClick(e)}
    >
      <span className=' text-ctp-mantle text-xs font-medium'>
        {text}
      </span>
    </div>
  )
}
