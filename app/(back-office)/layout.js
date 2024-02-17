import Sidebar from "../../components/backoffice/Sidebar";
import Navbar from "../../components/backoffice/Navbar"
import React from "react";

export default function Layout({children}) {
    return(
        <div className="flex">
            <Sidebar/>
            <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
                <Navbar/>
                <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16">{children}</main>
            </div>
        </div>
    )
}