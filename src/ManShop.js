import { useState } from 'react';
import Basket from './components/Basket';
import Header from './components/Header copy';
import Main from './components/Main';
import data from './data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faShoppingCart,faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

export default function App(props) {
  const [user, setUser]= useState(true)
  
 
  const {products} = data
  const [cartItems, setCartItems]= useState([])
  const onAdd = (product) =>{
    const exist =  cartItems.find(x=>x.id===product.id)
    if(exist){
      setCartItems(cartItems.map(x=>x.id=== product.id ?{...exist, qty: exist.qty +1}: x))
    }
    else{
      setCartItems([...cartItems,{...product, qty: 1}])
    }
  }
  const onRemove = (product) =>{
    const exist =  cartItems.find(x=>x.id===product.id)
    if(exist.qty ===1){
      setCartItems(cartItems.filter((x)=>x.id!==product.id))
    }
    else{
      setCartItems(cartItems.map(x=>x.id=== product.id ?{...exist, qty: exist.qty -1}: x))
    }
  }
  const desplegarUser =()=>{
    setUser(!user)
}
  return (
    <div className="App">
        
      <Header countCartItems={cartItems.length}></Header>
      <div className='productos'>
      
        <Main onAdd={onAdd} products ={products} onRemove={onRemove} ></Main>
        <div id='carro'>
          <Basket  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>
        <ul><li  className="botoncarrito boton1"><a className='boton1' href="#carro"><FontAwesomeIcon icon={faShoppingCart} /></a></li> </ul>
        
        
        
        
        
      </div>
      
      
    </div>
  );
}


