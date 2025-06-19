import Image from "next/image";
import backgroundhomemobile from "@/public/home/background-home-mobile.jpg"
import backgroundhometablet from "@/public/home/background-home-tablet.jpg"
import backgroundhomedesktop from "@/public/home/background-home-desktop.jpg"
 
export default function Home() {
  return <section className="flex p-8 w-full h-full font-Barlow_Condensed scroll-mb-5 text-white">    
   
    <Image fill placeholder="blur" src={backgroundhomemobile} alt="" className="-z-10 sm:hidden" />   
    <Image fill placeholder="blur" src={backgroundhometablet} alt="" className="-z-10 lg:hidden" />
    <Image fill placeholder="blur" src={backgroundhomedesktop} alt="" className="-z-10 hidden lg:block "/> 
    
    <div className="lg:mb-[128px] grid grid-cols-1 p-8 text-white grid-rows-[40fr_60fr]
     sm:px-12 mx-auto  
    lg:max-w-[1310px] lg:grid-cols-[1fr_1fr] lg:mt-20 lg:grid-rows-1 w-full lg:px-0">
      <div className="px-8  text-center  md:w-[512px] lg:w-auto md:mx-auto lg:self-end lg:text-left lg:px-0 ">
        <p className="text-center text-xl tracking-widest font-light mb-6 uppercase text-white/85
        md:text-[28px] lg:text-left">
          So, you want to travel to 
        </p> 
        <h1 className="text-[80px] uppercase mb-6
          sm:text-[95px] md:text-[144px] leading-none font-bellefair">Space</h1> 
        <p className="text-[16px] sm:text-[18px]  font-light  lg:text-[22px] text-white/75 ">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div> 

      <div className="justify-self-center self-center md:self-end md:w-[512px] md:mx-auto lg:w-full lg:flex lg:justify-end"> 
          <div className="flex items-center justify-center w-[144px] sm:w-[200px] md:w-[272px] md:mx-auto lg:ml-auto lg:mr-0 aspect-square rounded-full bg-white">
            <h2 className={`font-bellefair uppercase text-lg inline-block text-black lg:text-[32px]`}>Explore</h2>
          </div>
      </div>
    </div>
  </section>
}

// the main should have the padding

