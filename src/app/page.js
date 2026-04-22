import AboutUs from "@/components/sections/AboutUs";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Hero from "@/components/sections/Hero";
import OurService from "@/components/sections/OurService";
import OurUpholstery from "@/components/sections/OurUpholstery";
import Real from "@/components/sections/Real";
import Singapore from "@/components/sections/Singapore";
import UpholsteryTips from "@/components/sections/UpholsteryTips";
import YourTrusted from "@/components/sections/YourTrusted";


export default function Home() {
  return (

    <>
      <Hero />
       <OurService />
      <Singapore />
      <BeforeAfter />
      <Real />
      <AboutUs />
      <OurUpholstery />
      <UpholsteryTips />
      <YourTrusted /> 
    </>
  );
}
