"use client"
import SidebarItem from "../_components/Sidebar-item"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandSafari } from "react-icons/tb";
import {usePathname} from "next/navigation"
import {BarChart, List,Layout, Compass } from "lucide-react"

const guestRoutes = [
    {
        icon: Layout,
        label:"Dashboard",
        href : "/dashboard"
    },
    {
        icon: Compass,
        label:"Browse",
        href : "/search"
    },

]

const teacherRoutes = [
    {
        icon: List,
        label:"Courses",
        href : "/teacher/courses"
    },
    {
        icon: BarChart,
        label:"Analytics",
        href : "/teacher/analytics"
    },
]


export default function SideBarRoutes (){
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher")
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return(
        <div>
          {
            routes.map((route) => (
                <SidebarItem 
                key={route.href}
                icon = {route.icon}
                label={route.label}
                href={route.href}
                />
            ))
          }
        </div>
    )
}