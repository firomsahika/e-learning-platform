import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { SiMarketo } from "react-icons/si"
import { FcSportsMode } from "react-icons/fc";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import CoursesCard from "@/components/CoursesCard";
import programming from "../../../assets/programming.jpg"
import business from "../../../assets/business.jpg"
import marketing from "../../../assets/marketing.jpg"
import personaldev from "../../../assets/personaldev.jpg"
import fitness from "../../../assets/fitness.jpg"
import leadership from "../../../assets/leadership.jpg"
import Courses from "../../../components/Courses"


export default function Browse (){
    const categories = [
        {
            name:"Programming",
            icon: <HiOutlineDesktopComputer />,
            slug: "programming"
        },
        {
            name:"Business",
            icon: <MdOutlineBusinessCenter />,
            slug:"business"
        },
        {
            name:"Marketing",
            icon: <SiMarketo />,
            slug:"marketing"
        },
        {
            name:"Fitness",
            icon: <FcSportsMode />,
            slug:"Fitness"
        },
        {
            name:"Personal development",
            icon: <FaPersonArrowUpFromLine />,
            slug:"personal development"

        },
        {
            name:"Leadership",
            icon:  <FcManager />,
            slug: "leadership"
        },
        
    ]
    const courses = [
        {
        
          title: "React for beginners",
          img: programming,
          chapter: 6,
          category: "Programming",
          rating:5,
       
        },
        {
          
          title: "Mastering Business Essentials",
          img: business,
          chapter:4,
          category: "Business",
          rating:4.5,
         
        },
        {
          
          title: "Advanced Marketing Strategies",
          img: marketing,
          chapter:5,
          category: "Marketing",
          rating: 4,
          
        },
    
        {
          
          title: "Ultimate Fitness Programs",
          img: fitness,
          chapter:6,
          category: "Fitness",
          rating: 4,
          
        },
        {
         
          title: "Transformative Personal Development",
          img: personaldev,
          rating: 5,
          category: "Personal development",
          chapter: 5
         
        },
        {
          
          title: "Leadership Excellence Training",
          img: leadership,
          chapter: 4,
          category:"Leadership",
          rating: 4,
         
        },
      ];

 

    return(
        <div className="pl-52 pt-14 ">
           <div className="text-sm font-poppins p-3 flex items-center justify-center text-gray-500 gap-6 fixed bg-white z-20 w-full pr-52">
              {
                categories.map(({name,icon,slug}) =>(
                    <div key={slug} className="flex text-sm gap-2 items-center justify-center rounded-3xl border p-2 hover:bg-gray-50 cursor-pointer">
                        {icon}
                        <p>{name}</p>
                    </div>
                ))
              }
           </div>
           <div className="grid grid-cols-4 gap-4 pt-20">
             {
                courses.map(({title, chapter, category, rating, img}) =>(
                    <CoursesCard 
                    key={title}
                    title={title}
                    category={category}
                    chapter={chapter}
                    rating={rating}
                    img={img}

                    />
                ))
             }
           </div>
           
        </div>
    )
}