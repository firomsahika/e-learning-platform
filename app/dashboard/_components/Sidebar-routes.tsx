import SidebarItem from "../_components/Sidebar-item"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandSafari } from "react-icons/tb";
const guestRoutes = [
    {
        icon: <MdOutlineSpaceDashboard />,
        label:"My Learning",
        href : "/dashboard"
    },
    {
        icon: <TbBrandSafari />,
        label:"Browse",
        href : "/Search"
    },

]


export default function SideBarRoutes (){
    const routes = guestRoutes;
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