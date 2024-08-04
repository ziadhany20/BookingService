import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/Components/Nav";
import Words from "@/Components/text";
import Hero from "@/Components/hero";
import Parttwo from "@/Components/Parttwo"; 
import Part3 from "@/Components/Part3";
import Part4 from "@/Components/Part4";
import Fotter from "@/Components/Footer";
import axios from "axios";
import Part5 from "@/Components/Part5";

export default function Home() {
  return (
    <div className="header">
      <Hero />
      <Parttwo/>
      <Part5 title={" Top Deals "}/>
      <Part4 title={" Offers "}/>
      <Part3 title={" Packages "} />
      <Fotter/>

    </div>
  );
}
