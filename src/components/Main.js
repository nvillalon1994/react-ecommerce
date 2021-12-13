import React from 'react'
import Product from './Products'

export default function Main(props) {
    const {products, onAdd} = props
    return (
        <main className='contenedorArticulos' >
           
           <div className="menuCarrito" >
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
           </div>
        </main>
    )
}
