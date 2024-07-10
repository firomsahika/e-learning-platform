import johndoe from "../../../assets/johndoe.jpg"
import adamsmith from "../../../assets/adamsmith.jpg"
import kanewilliam from "../../../assets/kanewilliam.jpg"
import Rating from "../../../components/Rating"
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image"

export default function Testimonial(){
    const testimonials = [
        {
            body:"The programming courses on this platform are fantastic!.I quickly built my first web application and gained many skills",
            name:"John Doe",
            job:"Web developer",
            img: johndoe,
            rating:5,
        },
        {
            body:"The flexibility and quality of this platform are amazing. It helped me manage my studies better and learn new skills.",
            name:"Kane William",
            job:"Affiliate manager",
            img:kanewilliam,
            rating:4,
        },
        {
            body:"This e-learning platform made math enjoyable and easy to understand. I now excel in my exams!.",
            name:"Adam Smith",
            job:"College Student",
            img:adamsmith,
            rating:4.5,
        }
    ]

    type testimony = 
     {
        body: string,
        job:string,
        name:string
        img:string,
        rating:number
    }

    return (
        <div className="px-20 w-full font-poppins py-10">
            <div className="flex flex-col items-center justify-center gap-2 ">
                <p className="text-3xl text-primary font-semibold">Testimonials</p>
                <p className="text-2xl text-primary pb-10">What Says Our Students</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">

             {
                testimonials.map(({body,job,name,img,rating}) => (
                    <div key={name} 
                    className="flex flex-col gap-4 border rounded-md shadow-md p-6"
                    >
                        <FaQuoteLeft size={40} className="text-primary"/>
                        <Rating rating={rating}/>
                        <p>{body}</p>
                        <div className="flex gap-4">
                            <Image src={img} className="object-cover w-14 rounded-full" />
                            <div className="flex flex-col gap-2">
                                <p className="text-primary font-semibold text-xl">{name}</p>
                                <p className="font-semibold">{job}</p>
                            </div>
                        </div>
                    </div>
                ))
             }
            </div>
        </div>
    )
}

