import Hero from "@/Components/hero";
import Part3 from "@/Components/Part3";
import Part4 from "@/Components/Part4";
import Fotter from "@/Components/Footer";
import Part5 from "@/Components/Part5";
import Info from "@/Components/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rakan Massage",
  description: "Relax and enjoy",
};

export default function Home() {
  return (
    <div className="header">
      <Hero />
      {/* <Parttwo/> */}
      <Part5 title={" Top Deals "}/>
      <Part4 title={" Offers "}/>
      <Part3 title={" Packages "} />
      <Info/>
      <Fotter/>

    </div>
  );
}
