import Navbar from "../components/Navbar"
import {Link} from "react-router-dom"
import Contact from "../components/Contact"

function Home(){
    return(
        <>
        <Navbar/>
      <div className="bg-hero min-h-screen text-green-500  w-full overflow-y-auto">
        <div className="text-center px-4 my-40 ">
        <h1 className="text-5xl font-bold mb-4">Shop the Latest Trend</h1>
        <p className="text-base sm:text- mb-6" >Discover quality and style at affordable and unbeatable prices</p>
        <Link to='/store'><button className="bg-black px-6 py-2 rounded-lg font-medium ">Start Shopping</button></Link>
      </div>
      </div>
      <div className="">
      <Contact/>
      </div>
      </>
    )
}

export default Home