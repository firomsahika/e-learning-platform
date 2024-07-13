'use client'
import React from "react"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandSafari } from "react-icons/tb";
import Link from "next/link";
import {usePathname, useRouter} from 'next/navigation'
import {cn} from "@/lib/utils";

interface sideBarProps{
    icon: React.ReactNode,
    href: string,
    label:string
}

const SidebarItem = ({
    icon,
    href,
    label
}: sideBarProps) => {
    const pathname = usePathname();
    const router = useRouter();
    
    const isActive = 
    (   pathname==="/dashboard" && href==="/dashboard") ||
        pathname===href ||
        pathname?.startsWith(`${href}/dashboard`)
    
    const onClick = () => {
        router.push(href);
    }
    
    return(
        <button
        onClick={onClick}
            type="button"
            className = { cn(
              "flex items-center w-full gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
              isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )

            }
        >
            <div className="flex w-full items-center gap-x-2 py-4">
            {React.isValidElement(icon) && React.cloneElement(icon, {
                
                    className: cn(
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )
                }
              )
            }
            
            {label}

            <div className="ml-auto opacity-0 border-2 border-sky-700 h-full transition-all "/>
            </div>
            
        </button>
    )
}


export default SidebarItem;