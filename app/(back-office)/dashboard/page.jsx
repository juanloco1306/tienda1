import React from 'react'
import DashboardCharts from "../../../components/backoffice/DashboardCharts";
import Heading from "../../../components/backoffice/Heading";
import LargeCards from '../../../components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';

export default function page() {
  return (
    <div>
        <Heading title="Dashboard Overview"/>
        <LargeCards/>
        <SmallCards/>
        <DashboardCharts/>
    </div>
  )
}

