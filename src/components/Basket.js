import React from 'react'

export default function Basket(props) {
    const {cartItems,onAdd,onRemove}= props
    const itemsPrice = cartItems.reduce((a,c) => a + c.precio *c.qty , 0)
    const taxPrice = itemsPrice* 0.14
    const shippingPrice = itemsPrice > 2000 ? 0:50
    const totalPrice =itemsPrice + taxPrice +shippingPrice
    return (
        <div className='contenedorCarrito'>
            
            <div className='carrito1'>
                <div >
                    {cartItems.length===0 && <div>Cart Is Empty</div>}
                </div>
                {cartItems.map((item)=>(
                    <div key={item.id}className='productos-carrito2' >
                        <div className='nombreCarrito' > {item.nombre} </div>
                        <div ><button onClick={()=>onAdd(item)} className='botonCarro'>+</button></div>
                        <div ><button onClick={()=>onRemove(item)} className='botonCarro'>-</button></div>
                        <div >
                            {item.qty}x$ {item.precio.toFixed(0)} 
                        </div>
                    </div>
                    
                ))}
                {cartItems.lengh !==0 && (
                    <>
                    <hr></hr>
                    <div className='productos-carrito'>
                        <div >Item Price</div>
                        <div > $ {itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='productos-carrito'>
                        <div >Tax Price</div>
                        <div > $ {taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='productos-carrito'>
                        <div >Shipping</div>
                        <div > $ {shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='productos-carrito'>
                        <div ><strong>Total Price</strong></div>
                        <div > $ <strong>{totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr></hr>
                    <div className='productos-carrito'>
                        <button className='boton1' onClick={()=>alert('Implement CheckOut')}>Check Out</button>
                    </div>
                    </>
                )}
           </div>
        </div>
    )
}
