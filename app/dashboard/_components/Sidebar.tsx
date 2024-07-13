import SideBarRoutes from "../_components/Sidebar-routes"
import Logo from "../_components/Logo"
interface sideBarProps{
    href:string,
    label:string
    icon:React.ReactNode
}



export default function Sidebar ({
    icon,
    href,
    label
}:sideBarProps){
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
            <Logo />
            </div>
            <SideBarRoutes />
        </div>
    )
}