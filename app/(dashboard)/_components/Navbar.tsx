import Search from "@/components/Search"
import {usePathname, useRouter} from "next/navigation";
import MobileSideBar from "./MobileSideBar";

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";

import NavbarRoutes from "@/components/Navbar-routes"

export default function Navbar(){
    return(
      <div className=" p-4 border-b h-full flex items-center bg-white shadow-sm z-30">
        <MobileSideBar />
        <NavbarRoutes />

      </div>
    )
}
