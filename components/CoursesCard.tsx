import Image from "next/image"
import { IoBookOutline } from "react-icons/io5";

interface Coursescardprops  {
    title: string;
    chapter: number;
    category: string;
    rating: number;
    img: string; 
}

const CoursesCard: React.FC<Coursescardprops> = ({title,category,chapter,rating, img}) => {
    return (
        <div>
            <Image src={img} alt="courses-img"
            className="w-full" 
            />
            <p>{title}</p>
            <p>{category}</p>
            <div className="flex flex-col gap-2 items-center justify-center">
               <IoBookOutline />
               <p>{chapter}</p>
            </div>

            {/* <p>progress bar</p> */}
            
        </div>
    )
}
export default CoursesCard;