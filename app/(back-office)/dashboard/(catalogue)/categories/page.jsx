import Heading from '@/components/backoffice/Heading'
import { Plus } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import PageHeader from '@/components/backoffice/PageHeader'

export default function page() {
  return (
    <div>
      <PageHeader heading="Categories" href="/dashboard/categories/new" LinkTitle="Add Category"/>
    </div>
  )
}
