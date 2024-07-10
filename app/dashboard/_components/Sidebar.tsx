import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandSafari } from "react-icons/tb";
import Link from "next/link";

export default function Sidebar(){
    return(
        <div className="text-sm h-screen font-poppins flex flex-col gap-6 w-52 border-r">
            <div > 
                <p className="p-5  text-primary  font-semibold">Skills Horizon</p> 
            </div> 

            <div className=" text-gray-500 flex items-center pl-4 pt-4 cursor-pointer gap-3">
                <MdOutlineSpaceDashboard size={25} />
                <Link href="/dashboard/my-learning"><p className="text-sm ">My Learning</p></Link>
            </div>

            <div className="text-gray-500 flex items-center pl-4 gap-3 cursor-pointer">
                <TbBrandSafari size={25} />
                <Link href="/dashboard"><p className="text-sm ">Browse</p></Link>
            </div>
        </div>
    )
}
