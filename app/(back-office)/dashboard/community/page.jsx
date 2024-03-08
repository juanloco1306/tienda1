import Heading from '@/components/backoffice/Heading'
import React from 'react'
import Link from 'next/link'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'

export default function page() {
  return (
    <div>
      <PageHeader heading="Limi Community Trainings" href="/dashboard/community/new" LinkTitle="Add Training"/>
      <TableActions/>

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}
