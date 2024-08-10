"use client";
import React from 'react';
import Navbar from "@/Components/Nav";
import Words from "@/Components/text";
import './hero.css';

function Hero() {
  return (
    <div className="hero">
      <Navbar logoSrc="/assets/logo.png" /> {/* Update with the correct path to the logo */}
      <Words />
    </div>
  );
}

export default Hero;
