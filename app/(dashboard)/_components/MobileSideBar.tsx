import {Menu} from "lucide-react";
import Sidebar from "../_components/Sidebar"

import{
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"

export default function MobileSideBar (){
   return(
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
            <Sidebar />
        </SheetContent>

    </Sheet>
   )
}
