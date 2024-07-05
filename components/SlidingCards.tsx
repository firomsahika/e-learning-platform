import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image"
import programming from "/assets/programming.jpg";
import business from "/assets/business.jpg";
import marketing from "/assets/marketing.jpg";
import personaldev from "/assets/personaldev.jpg";
import fitness from "/assets/fitness.jpg";
import leadership from "/assets/leadership.jpg";




const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Programming",
    img: programming,
    course:10,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Business",
    img: business,
    course:5,
  },
  {
    name: "John",
    username: "@john",
    body: "Marketing",
    img: marketing,
    course:4,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Fitness",
    img: fitness,
    course:6,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Personal development",
    img: personaldev,
    course:5,
  },
  {
    name: "James",
    username: "@james",
    body: "Leadership",
    img: leadership,
    course:4,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  course,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  course: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
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
      <blockquote className="mt-2 text-md text-primary font-semibold ">{body}</blockquote>
      <blockquote className="mt-2 text-md text-primary">Courses {course}</blockquote>
    </figure>
  );
};

const SlidingCards = ({reviews}:{reviews: Array<{ img: string; name: string; username: string; body: string; course: number }>}) => {
  return (
    <div className="font-poppins relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-24 md:shadow-xl">
       
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default SlidingCards;
