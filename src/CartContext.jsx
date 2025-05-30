
import { createContext, useContext, useState  } from "react";

export const CartContent = createContext();

export const useCart = () => useContext(CartContent);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            
            if(existing){
              return  prev.map((item) => 
                    item.id === product.id ? {...item, quantity:item.quantity + 1} :
                    item
                );
            }
        return [...prev, {...product, quantity: 1}]
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => 
      prev.filter((item) => item.id !== id)
        )
    }

    const updateQuantity = (id, quantity) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? {...item, quantity} : item)) 
        )
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const removeFromList = (product) => {
     setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id)
        
        if(existing){
          return  prev.map((item) => 
                item.id === product.id ? {...item, quantity:item.quantity - 1} :
                item
            );
        }
    })
}

    const roundTo = (num, dp) => num.toFixed(dp)

    const sumPrices = () => {
          const prices = cartItems.map((item) => item.price * item.quantity)
        const sumPrice = prices.reduce((acc, curr) =>  acc + curr, 0)
        return roundTo(sumPrice, 2)
    }
    
    console.log(cartItems)

 
    return(
        <CartContent.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity, removeFromList, sumPrices, getTotalItems}}>
            {children}
        </CartContent.Provider>
    )
    
}


