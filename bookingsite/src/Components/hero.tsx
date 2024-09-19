"use client"
import React from 'react'
import Nav from "@/Components/Nav";
import Words from "@/Components/text";
import './hero.css';
import logo from '/assets/logo2.png'

function Hero () {
  return (
    
    <div className='hero'> 
      <Nav   />
      <Words/>
    </div>
    
  )
}

export default  Hero 