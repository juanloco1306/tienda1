"use client";
import React from "react";
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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname } from "next/navigation";

export default function Sidebar() {
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
      icon: Users2,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: Users2,
      href: "/dashboard/Categories",
    },
    {
      title: "Attributes",
      icon: Users2,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: Users2,
      href: "/dashboard/coupons",
    },
    {
      title: "store sliders",
      icon: Users2,
      href: "/dashboard/sliders",
    },
  ]
  return (
    <div className="dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md">
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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="flex items-center space-x-6 px-6 py-2 ">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              <ChevronRight />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {
              catalogueLinks.map((item,i) => {
                return(
                  <DropdownMenuItem key={i}>
                  <Link 
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-600 text-lime-500"
                        : "flex items-center space-x-3 px-6 py-2"
                    }
                  >
                    <LayoutGrid />
                    <span>{item.title}</span>
                  </Link>
                </DropdownMenuItem>
                )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>
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
