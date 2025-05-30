import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useCart } from '../CartContext' 


function ProductDetails(){
   const {addToCart, cartItems} = useCart()
    const { id } = useParams()
    const [item, setItem] = useState(null);

   

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data))
    }, [id])
    
    if(!item){
        return <p>Loading</p>
    }


    
    return(
        <>
         <Navbar/>
        <div className='p-6 mt-20'>
            <img className='h-64 mx-auto' src={item.image} alt={item.title}></img>
            <h1 className='text-2xl font-bold mt-4'>{item.title}</h1>
            <p className='text-gray-600 mt-2'>{item.description}</p>
            <p className='text-grey-600 mt-3 bg-green-500 w-fit px-2 py-1 rounded'>${item.price}</p>
            <button onClick={() => addToCart(item)} className='text-green-500 bg-black mt-6 px-3 py-3 rounded-lg font-bold'  >Add to cart</button>
            <Link to='/cartpage'><button className={`block mx-auto mt-10 bg-green-500 w-80 p-4 rounded-xl font-bold ${cartItems.length === 0 ? 'hidden' : 'block'}`}>View Cart</button></Link>
        </div>
        </>
    )
}

export default ProductDetails