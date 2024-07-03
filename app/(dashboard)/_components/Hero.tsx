import React from 'react'
import RadialGradient from "@/components/magicui/radial-gradient";
import Image from 'next/image';
import heroimg from "../../../assets/heroimg.png";
import hero from "../../../assets/learning.jpg.webp";
import {AnimatedGradient} from "../../../components/AnimatedGradient"
import ShinyBtn from "../../../components/ShinyBtn"


const Hero = () => {
  return (
    <div className='h-screen w-full  pt-20 px-10 flex items-center justify-center font-poppins relative  rounded-lg border  p-20  backdrop-blur-2xl'>
   
        <div className='w-full flex  items-center justify-center gap-28  mx-auto'>

            {/* <div className='max-w-5xl flex flex-col gap-4 text-center'>
                <p className='text-primary text-center text-2xl'>Empower Your Learning Journey</p>
                <p className='flex text-5xl font-bold text-primary'>Discover a World of Knowledge with Interactive Courses and Personalized Learning Path.</p>
               
            </div> */}
        
             <div >
             <p className="text-2xl text-[#9c40ff]">Empower Your Learning Journey</p>
             <AnimatedGradient />
             <ShinyBtn />
             </div>


            <div className="w-1/2">
               <Image  src={hero}
               className='w-[80rem] rounded-md'/>
            </div>

            <RadialGradient />
            {/* <LinearGradient /> */}
        </div>
        
    </div>
  )
}

export default Hero
