// library
import React, { FC } from 'react'

interface TableCellProps {
  children: React.ReactNode
  width: string
  text_align?: string
}
export const TableCell: FC<TableCellProps> = ({
  children,
  width,
  text_align = 'text-start',
}) => (
  <div
    className={`${text_align} text-ctp-text text-xs font-medium ${width}`}
  >
    {children}
  </div>
)
