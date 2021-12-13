import React from 'react'
import remera2 from '../images/remera2.jpg'
import heroman2 from '../images/heroman2.jpg'

export default function Hero() {
    return (
        <div>
            <div className="heroImages">
                <div className='textHero'>
                    <h1 id="tituloHero">NEW COLLECTION</h1>
                    <h2 id="titulo2Hero">2021/2022 Season</h2>
                    <h3 id="titulo3Hero">Enjoy 25% Off Shits, T-shirt, Pant & Dresses</h3>
                </div>
                <div className='contenedor'>
                    <img  className="imgHerowoman" src={remera2} alt="" />
                    <a href="./WomanShop.js"><button className="boton ">Woman Shop</button></a>
                </div>
                <div className='contenedor'>
                    <img className="imgHeroman" src={heroman2} alt="" />
                    <a  href="./ManShop.js"><button  className="boton2">Man Shop</button></a></div>
                </div>
                

                
            
        </div>
        
    )
}
