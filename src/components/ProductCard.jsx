import { useState, useEffect } from "react"
import {Link} from "react-router-dom"


function ProductCard(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {setProducts(data)})
        .catch(err => {
            console.error("Error fetching products",err)
        })
    }, [])
    const items = [
        { id:3, name: "Men's Cotton Jacket", price: "$55.99", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
        { id:4, name: "Men's Casual Slim Fit", price: "$15.99", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},
        {id:7, name:"White Gold Plated Princess", price: "$9.99", image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"},
        {id:6, name: "Solid Gold Petite Micropave", price: "$168", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},
        {id:8, name: "Pierced Owl Rose Gold Plated Stainless Steel Double", price: "$10.99", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"},
        {id:1, name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: "$109.95", image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
    ] 
    return(
        <>
        <div className="bg-green-500 p-3 mt-2">
            <h1 className="font-semibold text-xl">Trending Now</h1>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex space-x-4 p-4 overflow-x-auto w-max">
            {items.map(item => (
                <Link to={`/item/${item.id}`}>
                <div key={item.id} className="border px-2 rounded shadow w-60">
                    <img src={item.image} alt={item.title} className="h-[150px] mx-auto"></img>
                    <h1 className="font-semibold mt-2">{item.name}</h1>
                    <p className="text-lg text-grey-600">{item.price}</p>
                </div>
                </Link>
            ))}
        </div>
        </div>
        <div className="bg-black p-3 mb-4">
            <h1 className="font-semibold text-xl text-green-500">Best Sellers</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 mx-7">
            {products.map(product => (
                <Link to={`/product/${product.id}`}>
                <div key={product.id} className="border px-4 rounded shadow">
                    <img src={product.image} alt={product.title} className="h-48 mx-auto"></img>
                    <h2 className="font-semibold mt-2">{product.title}</h2>
                    <p className="text-lg text-grey-600">${product.price}</p>
                </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default ProductCard