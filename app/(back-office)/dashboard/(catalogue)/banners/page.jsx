import Heading from '@/components/backoffice/Heading'
import React from 'react'
import Link from 'next/link'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'

export default function page() {
  return (
    <div>
      <PageHeader heading="Banners" href="/dashboard/banners/new" LinkTitle="Add Banner"/>
      <TableActions/>

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}