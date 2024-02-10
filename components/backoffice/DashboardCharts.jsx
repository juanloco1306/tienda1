import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellingProductsChart from "./BestSellingProductsChart";

export default function DashboardCharts(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <WeeklySalesChart/>
    <BestSellingProductsChart/>
  </div>
 );
}
