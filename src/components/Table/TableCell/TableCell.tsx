// library
import React, { FC } from 'react'

interface TableCellProps {
  children: React.ReactNode
  width: string
}
export const TableCell: FC<TableCellProps> = ({
  children,
  width,
}) => (
  <div
    className={`text-center text-slate-300 text-xs font-medium ${width}`}
  >
    {children}
  </div>
)
