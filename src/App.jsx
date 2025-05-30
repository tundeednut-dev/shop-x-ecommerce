import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Store from './pages/Store'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import {CartProvider} from './CartContext'
import { CheckOutProvider } from './pages/CashOut'
import CheckOut from './pages/CheckOut'

function App(){
   return(
    <>
    <div className='overflow-hidden'>
        <CartProvider>
            
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/cartpage' element={<div className=''><CartPage/></div>}></Route>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/item/:id' element={<ProductDetails/>}/>
            <Route path='/paymentpage' element={
                <CheckOutProvider>
                <CheckOut/>
                </CheckOutProvider>}/>
        </Routes>
    </Router>
    </CartProvider>
    </div>
    </>
   )
}

export default App