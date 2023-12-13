// library
import React from 'react'

// components
import { Header } from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Table } from '@/components/Table/Table'

function Admin() {
  return (
    <div className='container mx-auto'>
      <Header />

      <div className='mt-10 flex justify-between'>
        <Sidebar />
        <Table />
      </div>
    </div>
  )
}

export default Admin
