import Hero from "../_components/Hero";
import WhyChooseUs from "../_components/WhyChooseUs"
import Category from "../../../components/Category" 
import Courses from "../../../components/Courses"

const Home = () =>{
    return(
     <div>
        <Hero />
        <WhyChooseUs />
        <Category />
        <Courses />
     </div>
    )
 }
 
 export default Home;