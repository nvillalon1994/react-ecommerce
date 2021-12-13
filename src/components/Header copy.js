import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faShoppingCart,faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png'
import Basket from './Basket'
export default function Header(props) {
    
    
    const [log,setLog] = useState(false)
    const [show, setShow]= useState(false)

    const [user, setUser]= useState(false)
    const [inicioSecion,setInicioSecion] = useState(false)
    const carrito =[
        {   id:1,
        nombre: "Remera",
        precio:1200,
        },
    {   id:2,
        nombre: "Remera",
        precio:1200,
        }
        ,
        {   id:2,
            nombre: "Remera",
            precio:1200,
            }
            ,
            {   id:2,
                nombre: "Remera",
                precio:1200,
                }]
    const desplegarCarro =()=>{
        setShow(!show)
    }

    const desplegarUser =()=>{
        setUser(!user)
    }
    const Secion = ()=>{
        setInicioSecion(!inicioSecion)
        setUser(false)
        setLog(false)
    }
    const logOut=()=>{
        setLog(!log)
        setUser(false)
        
        
    }
    
    
    return (
        <div>
            <nav>
                
                <ul className="linksRopa">
                    <li className="linkRopa"><a href="./WomanShop.js">Woman</a></li>
                    <li className="linkRopa"><a href="./ManShop.js">Man</a></li>
                    
                </ul>
                <div className="logo">
                    <a className='imgLogo' href="/" ><img src={logo} alt="" /></a>
                </div>
                <ul className="carritoUsuario">
                    
                    <li className="carrito"><FontAwesomeIcon icon={faQuestionCircle} /></li>  
                    {!inicioSecion?<li className="carrito" desplegarUser={desplegarUser}onClick={desplegarUser} ><FontAwesomeIcon icon={faUser} /></li>:<li className="carrito" onClick={logOut} >Natalio</li>}
                    
                    

                    
                    

                </ul>
                
            </nav>
            
            {show?(<div className="menu-carrito">
                <h3>Carrito de compra</h3>
                <br />
                {show?carrito.map(articulo =>
                <div className="articuloCarrito" key={articulo.id} articulo ={articulo} >
                    <p>{articulo.nombre}</p>
                    <p>{articulo.precio}</p>
                    
                </div>):<></>}
            </div>):<></>}

            {user?(
                
                
                
                <button className='menu-user' onClick={Secion}> Ingresar </button>
                    
                
            ):<></>}
            {log?(
                
                <button className="menu-user" onClick={Secion}>Salir</button>
                    
                
            ):<></>}
            
            
            
        </div>
    
    )
}
