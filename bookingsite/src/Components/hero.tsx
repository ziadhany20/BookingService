import React from 'react'
import Nav from "@/Components/Nav";
import Words from "@/Components/text";
import './hero.css';

function Hero () {
  return (
    
    <div className='hero'> 
      <Nav logoSrc={"book.jpg"} />
      <Words/>
    </div>
    
   
    
  )
}

export default  Hero 