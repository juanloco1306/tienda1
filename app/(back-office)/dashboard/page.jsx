import React from 'react'
import DashboardCharts from "../../../components/backoffice/DashboardCharts";
import Heading from "../../../components/backoffice/Heading";
import LargeCards from '../../../components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import CustomDataTable from '@/components/backoffice/CustomDataTable';

export default function page() {
  return (
    <div>
        <Heading title="Dashboard Overview"/>
        <LargeCards/>
        <SmallCards/>
        <DashboardCharts/>
        <CustomDataTable/>
    </div>
  )
}

