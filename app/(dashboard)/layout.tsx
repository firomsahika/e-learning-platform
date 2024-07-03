import Header from "./_components/Header"


const DashboardLayout = ({
    children 
}:{children:React.ReactNode}
) =>{
  return (
    <div>
        <div className = "hidden md:flex fixed z-50 h-16 w-full ">
            <Header />
        </div>
        {children}
    </div>
  )
}

export default DashboardLayout;

