import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar"

interface sideBarProps{
  icon:React.ReactNode
  href:string
  label:string
}
const DashboardLayout = ({
    children 
}:{children:React.ReactNode}
) =>{
  return (
    <div className="flex h-full">
        
       <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
       </div>
        
       <div className="flex flex-col w-full">
        <Navbar />
        {children}
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default DashboardLayout;

