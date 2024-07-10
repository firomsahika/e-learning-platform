import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar"


const DashboardLayout = ({
    children 
}:{children:React.ReactNode}
) =>{
  return (
    <div className="flex">
        
       
        <Sidebar />
        
       <div className="flex flex-col w-full">
        <Navbar />
        {children}
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default DashboardLayout;

