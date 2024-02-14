
import {AlignJustify, Sun, Bell, User, LayoutDashboard, Settings, LogOut } from "lucide-react";
import React from 'react'
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-20  py-8 fixed top-0 w-full px-8 z-50 pr-[20rem] ">
        <button><AlignJustify/></button>
        <div className="flex space-x-3">
            <button><Sun className="text-green-600"/></button>
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"><Bell className="text-green-600"/>
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
</button>
            
            <DropdownMenu>
  <DropdownMenuTrigger><button><Image src='/profile.jpg' alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/></button></DropdownMenuTrigger>
  <DropdownMenuContent className="py-2 px-4 pr-8">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <button className="flex items-center space-x-2">
      <LayoutDashboard className="mr-2 h-4 w-4"/>
      <span>Dashboard</span>
      </button>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <button className="flex items-center space-x-2">
    <Settings className="mr-2 h-4 w-4"/>
      <span>Edit Profile</span> 
      </button>     
    </DropdownMenuItem>
    <DropdownMenuItem>
      <button className="flex items-center space-x-2">
    <LogOut className="mr-2 h-4 w-4"/>
      <span>Logout</span>   
      </button>   
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
    </div>
  )
}

