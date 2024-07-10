
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";

import SelectDemo from "@/components/Select";
import Search from "./Search"


export default function Header(){
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
          <p className="text-primary">Teacher Mode</p>
          <p className="text-primary">Dashboard</p>
          </div>
          
        </header>
      );
}
