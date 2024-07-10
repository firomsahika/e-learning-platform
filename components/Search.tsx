import { CiSearch } from "react-icons/ci";

export default function Search (){
    return(
        <div>
            <div className="text-sm relative flex items-center font-poppins p-2">
            <CiSearch className="absolute left-5 text-gray-400" size={20}/>
            <input type="text" placeholder="Search for a Course"
            className="border px-4 py-2 pl-14 rounded-3xl placeholder:text-gray-400 "
            />
            </div>
        </div>
    )
}