import {Link} from 'react-router-dom'
import {useState, useEffect,} from "react"

function Navbar(){
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [isDisplayed, setIsDisplayed] = useState(false)
    const [searchedProd, setSearchedProd] = useState([])
    const handleOpen = () =>{
      setIsOpen(true)
      setTimeout(() => {setIsDisplayed(true)}, 300)
    }

    const handleClose = () => {
      setIsDisplayed(false)
      setTimeout(() => {
        setIsOpen(false)
      }, 300)
    }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
}, [])


const filteredProduct = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return(
        <>
        <div className=" flex items-center w-full h-20  bg-black py-5 fixed">
        <div className='lg:hidden'>
            <button className='mx-3' onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class={`size-6 ${isOpen ? 'hidden' : 'block'} mt-9`}>
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>
      </button>

      <button className='mx-3' onClick={handleClose}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class={`size-6 ${!isOpen ? 'hidden' : 'block'} mb-4`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

      </button>
        </div>
        <h1 className="italic font-bold text-green-500 text-3xl px-10">ShopX</h1>
        <div className='flex justify-center w-full'>
            <div>
        <input type='seacrh' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='h-10 w-80 sm: w-[200px] rounded-full px-5 sm:50'></input>
        {searchQuery &&(
        <div className='absolute mt-2 bg-white w-50 h-[200px] overflow-y-auto shadow-lg z-50'>
            {filteredProduct.length > 0 ? (
            filteredProduct.map(product => (
              <Link to={`/product/${product.id}`}className='text-center'>
                <div key={product.id} className='border-b p-2 hover:bg-gray-100'>
                    <p className='text-lg'>{product.title}</p>
                </div>
                </Link>
            ))
        ) : (
            <p className='p-2 text-sm text-gray-500'>No results found</p>
        )}
        </div>
        )}
        </div>
        </div>
       
        <div className="flex justify-end navbar">
        <Link to="/" className="px-5 font-bold  text-white hover:text-green-500">Home</Link>
        <Link to="/store" className="px-5 font-bold text-white hover:text-green-500">Shop</Link>
       <Link to='/cartpage'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6 mr-5">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg></Link>

        </div>
        </div>
        <div>
      </div>
      {isOpen && (
        <div className={`fixed h-screen w-[200px] bg-black border border-white block top-[80px] transform transition-transform duration-300 ease-in-out ${isDisplayed ? 'translate-x-0' : '-translate-x-full'} navbar`}>
<Link to="/" className=" block px-5 font-bold  text-white hover:text-green-500 border h-10">Home</Link>
        <Link to="/store" className=" block px-5 font-bold text-white hover:text-green-500 border h-10 ">Shop</Link>
       <Link to="/cartpage"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6  block border w-full h-8">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg></Link>
        </div>
      )}
        </>
    )
  
}

export default Navbar
