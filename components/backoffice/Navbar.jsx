
import {AlignJustify, Sun, Bell, User } from "lucide-react";
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-4 fixed top-0 w-full px-8 z-50 pr-[20rem] ">
        <button><AlignJustify/></button>
        <div className="flex space-x-3">
            <button><Sun/></button>
            <button><Bell/></button>
            <button><User/></button>
        </div>
    </div>
  )
}

