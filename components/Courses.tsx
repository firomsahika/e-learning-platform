import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image"
import programming from "/assets/programming.jpg";
import business from "/assets/business.jpg";
import marketing from "/assets/marketing.jpg";
import personaldev from "/assets/personaldev.jpg";
import fitness from "/assets/fitness.jpg";
import leadership from "/assets/leadership.jpg";
import { FaStar, FaRegStar } from 'react-icons/fa';
import Rating from "../components/Rating"
import { FiClock } from "react-icons/fi";
import { CiUser } from "react-icons/ci";


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    title: "React for beginners",
    img: programming,
    review:10,
    rating:5,
    hour:"05",
    minute:15,
  },
  {
    name: "Jill",
    username: "@jill",
    title: "Mastering Business Essentials",
    img: business,
    review:5,
    rating:4.5,
    hour:"03",
    minute:15,
  },
  {
    name: "John",
    username: "@john",
    title: "Advanced Marketing Strategies",
    img: marketing,
    review:4,
    rating:4,
    hour:"06",
    minute:30,
  },
  {
    name: "Jack",
    username: "@jack",
    title: "Nextjs Fullstack",
    img: programming,
    review:10,
    rating:5,
    hour:"10",
    minute:45,
  },
  {
    name: "Jane",
    username: "@jane",
    title: "Ultimate Fitness Programs",
    img: fitness,
    review:6,
    rating:4,
    hour:"03",
    minute:15,
  },
  {
    name: "Jenny",
    username: "@jenny",
    title: "Transformative Personal Development",
    img: personaldev,
    review:5,
    rating:5,
    hour:"06",
    minute:40,
  },
  {
    name: "James",
    username: "@james",
    title: "Leadership Excellence Training",
    img: leadership,
    review:4,
    rating:4,
    hour:"05",
    minute:50,
  },
];




const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  title,
  review,
  rating,
  hour,
  minute,
 
}: {
  img: string;
  name: string;
  username: string;
  title: string;
  review: number;
  rating:number;
  hour:string;
  minute:number;
 
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Image className=" rounded-md object-cover min-w-full  h-40"   alt="categories" src={img} />
        {/* <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div> */}
      </div>
      <blockquote className="mt-2 text-md text-primary font-semibold ">{title}</blockquote>
       <div className="flex gap-2 items-center  py-4">
       <Rating rating={rating}/> <p>({review} Reviews)</p>
       </div>
      <div className="flex gap-10 items-center">
        <p className="flex items-center flex-nowrap gap-2"><FiClock className="text-primary"/> {hour} hours {minute} minutes</p>
        <p className="flex items-center flex-nowrap gap-2 text-nowrap"><CiUser className="text-primary" /> {review}</p>
      </div>
    </figure>
  );
};

const Courses = () => {
  return (
    <div className=" font-poppins relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-24 ">
      <div className="flex flex-col items-center justify-center pb-8 ">
        <p className="text-3xl text-primary font-semibold">Courses</p>
        <p className="text-2xl text-primary">Popular Courses</p>
      </div>
       
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Courses;
