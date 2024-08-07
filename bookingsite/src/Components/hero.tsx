"use client"
import React from 'react'
import Nav from "@/Components/Nav";
import Words from "@/Components/text";
import './hero.css';
import { useTranslation } from 'react-i18next';

function Hero () {
  const [t, i18next]= useTranslation();
  return (
    
    <div className='hero'> 
      <Nav logoSrc={''}  />
      <Words/>
    </div>
    
   
    
  )
}

export default  Hero 