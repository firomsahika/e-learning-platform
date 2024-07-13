"use client"
import {useRouter} from "next/navigation"
import {cn} from "@/lib/utils"
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";

import Link from 'next/link'
import SelectDemo from "@/components/Select";
import Search from "./Search"


export default function Header(){
  const router = useRouter();
  const onClick = ()=>{
    router.push("/dashboard")
  }
    return (
        <header className="font-poppins border-b-sm w-full backdrop-blur-3xl  flex items-center  justify-between px-10 ">
          <div className="flex items-center justify-center gap-6">
          <h1 className=" text-primary">SkillsHorizon</h1>
          <SelectDemo />

          </div>

          <div>
            <Search />  
          </div>

          <div className="flex gap-4 items-center justify-center">
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
          <p className="text-primary cursor-pointer">Teacher Mode</p>
          
          </div>
          <button
          onClick={onClick}
          type="button"
          className={cn(
            "text-primary cursor-pointer"
          )

          }
          >
          <p 
          className="text-primary cursor-pointer">Dashboard</p>
          </button>
          
        </header>
      );
}
