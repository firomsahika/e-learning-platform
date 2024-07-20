import {db} from "@/lib/db"
import { NextResponse } from "next/server";
const CourseIdPage = async (
    {
    params
 }:{
    params:{ courseId: string}
 }
) =>{
    const course = await db.course.findUnique({
        where:{id: params.courseId}
    });

    if (!course){
        return new NextResponse("course not found!")
    }

    const requiredItems = [
        title,
        description,
        price,
    ]

    const title = course.title;
    return(
        <div>
           <p>course id : {params.courseId} </p>
           course title : {title}
        </div>
    )
}

export default CourseIdPage;