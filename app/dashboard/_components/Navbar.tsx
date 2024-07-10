import Search from "@/components/Search"
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";

export default function Navbar(){
    return(
        <div className="text-gray-500 w-full font-poppins flex items-center justify-between pl-8 p-2 border-b">
           <Search />
           <div className="text-sm flex gap-4 items-center justify-center pr-4">
              <p>Teacher Mode</p>
              <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
          
           </div>
        </div>
    )
}
