import React from 'react'
import { FaShopLock } from "react-icons/fa6"
import { FaBookOpen } from "react-icons/fa6";
import { TbHours24 } from "react-icons/tb";


const WhyChooseUs = () => {
        const datas = [
            {
                title: 'Life Time Access',
                icon: <FaShopLock size={60} className="text-primary"/>,
                description: 'Enjoy unlimited access to all course content for a lifetime, allowing you to learn at your own pace and revisit materials anytime.'
            },
            {
                title: 'Free Course Materials',
                icon: <FaBookOpen  size={60} className="text-primary"/>,
                description: 'Get all the essential course materials at no extra cost, including downloadable resources, reading materials, and practice exercises.'
            },
            {
                title: 'Dedicated Support',
                icon: <TbHours24 size={60} className="text-primary"/>,
                description: 'Benefit from round-the-clock support to assist you with any questions or issues, ensuring a smooth and uninterrupted learning experience.'
            }
        ];
        return (
            <div className=" w-full py-20 px-10  font-poppins">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
                    {datas.map(({ title, icon, description }) => (

                        <div key={title} className="flex gap-4 shadow-xl p-4 rounded-2xl ">
                            
                            <div className="flex flex-col gap-3">
                               <div className="flex gap-2 items-center">
                               {icon}
                                 <p className="text-primary text-2xl font-semibold">{title}</p>
                               </div>
                                <p >{description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        );
    }

export default WhyChooseUs
