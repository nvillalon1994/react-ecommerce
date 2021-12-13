import React from 'react'

export default function Products(props) {
    const {product, onAdd} = props
    return (
        <div className='cardArticulo'>
            
            <img src={product.img} alt={product.nombre}></img>
            <h3>{product.nombre}</h3>
            <div>$ {product.precio}</div>
            <div>
                <button  className='boton1' onClick={()=>onAdd(product)}>Add to Car</button>
            </div>
        </div>
    )
}
