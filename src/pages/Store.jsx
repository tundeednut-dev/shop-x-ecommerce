import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"

function Store(){
    return(
        <>
        <Navbar/>
        <div className="mt-[90px]">
    <ProductCard/>
    </div>
    <div className="mt-40">
        <Contact/>
        </div>
        </>
    )
}

export default Store