import Image from "next/image"
import { IoBookOutline } from "react-icons/io5";
import Rating from "../components/Rating"

interface Coursescardprops  {
    title: string;
    chapter: number;
    category: string;
    rating: number;
    img: string; 
}

const CoursesCard: React.FC<Coursescardprops> = ({title,category,chapter,rating, img}) => {
    return (
        <div className="font-poppins flex flex-col  border items-start p-2 shadow-md rounded-xl  text-sm gap-2">
          
           <Image src={img} alt="courses-img"
            className="w-96 rounded-xl " 
            />
            <p className="text-primary">{title}</p>
            <p>{category}</p>
            <Rating rating={rating}/>
            <div className="flex gap-2 items-center justify-center">
               <IoBookOutline className="text-primary"/>
               <p>Chapter {chapter}</p>
            </div>
           

            {/* <p>progress bar</p> */}
            
        </div>
    )
}
export default CoursesCard;