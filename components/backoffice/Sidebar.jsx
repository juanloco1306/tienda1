"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import {
  LayoutGrid,
  Users2,
  Slack,
  Truck,
  UserSquare2,
  ExternalLink,
  User,
  Settings,
  Warehouse,
  LogOut,
  ChevronRight,
  Boxes,
  LayoutList,
  SendToBack,
  ScanSearch,
  MonitorPlay,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { usePathname } from "next/navigation";

export default function Sidebar({showSidebar}) {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "store sliders",
      icon: MonitorPlay,
      href: "/dashboard/sliders",
    },
  ]
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <div className=" hidden sm:block dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md">
      <Link className="px-6 py-4" href="#">
        <Image src={logo} alt="Image" className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-600 text-lime-500"
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
            <button className="flex items-center space-x-6  py-2 ">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronDown/> :<ChevronRight />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg py-3 px-3 pl-6 bg-slate-800">
            {
              catalogueLinks.map((item,i) => {
                const Icon = item.icon;
                return(
                  <Link key={i}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center space-x-3 py-1 text-sm text-lime-500"
                        : "flex items-center space-x-3 py-1"
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                )
              })
            }
          </CollapsibleContent>
        </Collapsible>
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
