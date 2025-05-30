import {useCart} from '../CartContext'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

function CartPage() {
 const {cartItems, addToCart, removeFromCart, removeFromList, sumPrices, updateQuantity} = useCart()

 
    return(
        <div className=' bg-color h-screen w-full overflow-y-auto overflow-x-hidden'>
            <div className='w-full'>
        <Navbar/>
        </div>
        <div className=' p-3 md:mx-auto font-semibold text-gray-500 sm: w-[800px] mt-20'><h1>CART SUMMARY</h1>
        </div>
        <div className='bg-white h-[50px] p-3 flex'><span className='font-semibold'>Subtotal</span>
        {
            cartItems.length === 0 ? <span className='font-bold flex justify-end w-full'>$0</span> :
            <span className='font-bold flex justify-end w-full'>${sumPrices()}</span>
        }
        </div>
            <h1 className='md:mx-auto mx-2 sm:w-[800px] font-semibold text-xl  py-2 px-4 '>Cart ({cartItems.length})</h1>

        <div className=' md:mx-auto mx-2 sm:w-[800px] h-content shadow-2xl bg-white rounded'>
            {cartItems.length === 0 ? 
            (<p>Your cart is empty</p>)

             :
            cartItems.map((item) => (
                <div>
                <div className='p-4 flex '>
                    <div className='flex w-full'>
                    <img className='h-20' src={item.image}></img>
                    <p className='px-4 mx-6 text-lg'>{item.title}</p>
                    </div>
                    <div className='block'>
                    <p className='font-bold'>${item.price}</p>
                    <div className='flex mt-5'>
                    <button onClick={() => removeFromList(item)} className='bg-green-500 px-2 mr-3 rounded'>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => addToCart(item)} className='bg-green-500 px-1.5 ml-3 rounded'>+</button>
                    </div>
                    </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className='m-2  p-3 rounded font-semibold hover:bg-green-400 transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline mr-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg> Remove
</button>
                    </div>
                    
            ))
            }
            </div>
            <div className='flex justify-center mt-20'>
            <Link to='/store'><button className={`bg-black px-6 py-2 rounded-lg font-medium text-green-500 ${cartItems.length === 0 ? 'block' : 'hidden'}`}>Start Shopping</button></Link>
            </div>
            <div className='flex w-full justify-center mt-20'>
                {cartItems.length !== 0 && (<Link to='/paymentpage'><button className={`w-40 bg-black text-green-500 font-bold p-3 rounded-xl ${cartItems.length === 0 ? 'hidden' : 'block'}`}>Checkout {`${sumPrices()}`}</button></Link>)}
            </div>
        </div>
    )
}

export default CartPage