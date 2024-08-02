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

export default function Home() {
  return (
    <div className="header">
      <Hero />
      <Parttwo/>
      <Part3 title={" Top Deals "} />
      <Part3 title={" Packages "} />
      <Part4 title={"Offers"}/>
      <Fotter/>

    </div>
  );
}
