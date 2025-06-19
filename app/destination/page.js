"use client"
import Image from "next/image";
import destinationMobile from "@/public/destination/background-destination-mobile.jpg"
import destinationTablet from "@/public/destination/background-destination-tablet.jpg"
import destinationDesktop from "@/public/destination/background-destination-desktop.jpg"
import moon from "@/public/destination/image-moon.png"
// import moon from "../../"
import { destinations } from "@/assets/destination";
import { useState } from "react";
import DestNav from "../_components/DestNav";





export default function Home() {
    const [index,setIndex]=useState(0)
     
    let data=destinations[index]; 
    const {name,images:{png},description,distance,travel}=data

    console.log(destinations);
    
 
    return <section className="w-full text-white p-8 font-Barlow_Condensed
            sm:p-12 lg:max-w-[1110px] lg:mx-auto ">      
            <Image fill src={destinationMobile} alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 sm:hidden"/>
            <Image fill src={destinationTablet} alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 lg:hidden"/>
            <Image fill src={destinationDesktop} alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 hidden lg:block"/>

        <h2 className="text-center text-xl tracking-widest font-light mb-6 uppercase md:text-left lg:text-[28px]">
            <strong className="text-white/25 mr-6">01</strong>
             pick your destination
        </h2>
        <div className="text-center lg:grid lg:gap-x-8 lg:items-center lg:justify-center lg:grid-cols-2 lg:text-left">
            <div className=" mb-8  lg:justify-self-center">
                <img src={`/${png}`} alt="" className=" inline-block m-6  mx-auto w-[200px] aspect-square sm:w-[250px] md:w-[300px] lg:w-[480px]"/>
                {/* <Image fill src={`/${png}`} alt="" className="absolute inline-block m-6  mx-auto w-[200px] aspect-square sm:w-[250px] md:w-[300px] lg:w-[480px] "/> */}
                {/* <Image fill className="absolute object-contain"  src={`/${png}`} alt="mars" /> */}
            </div>  
   
            <div className="lg:p-10">
            <ul className="uppercase text-white/75 text-sm mb-6 flex items-center justify-center gap-8 h-8 md:w-[514px] md:mx-auto lg:w-auto lg:justify-start lg:mb-10 lg:text-base">
                {destinations.map(({name},i)=><DestNav setIndex={setIndex} index={index} id={i} name={name} key={i}/>)}
                {/* <li onClick={()=>setIndex(0)} className="cursor-pointer tracking-widest h-full  border-solid border-b-2 ">
                    Moon  
                </li>    
                <li onClick={()=>setIndex(1)} className="cursor-pointer tracking-widest  h-full  border-solid border-b-2">
                    Mars
                </li>
                <li onClick={()=>setIndex(2)} className="cursor-pointer tracking-widest h-full  border-solid border-b-2">
                    Europa
                </li>
                <li onClick={()=>setIndex(3)} className="cursor-pointer tracking-widest h-full  border-solid border-b-2">
                    Titan
                </li> */}
            </ul>

            <div className="pb-6 border-solid border-white/25 border-b-[1px] mb-6 md:w-[514px] md:mx-auto lg:w-auto lg:pb-10 lg:mb-10"> 
                <h1 className="text-[56px] mb-4 font-bellefair uppercase md:text-[80px] lg:text-[96px] leading-none">{name}</h1>
                <p className="text-[15px] font-light md:text-[16px] lg:text-[18px] text-white/75">
                    {description}
                </p>
            </div>
            <aside className="flex uppercase gap-6 flex-col items-center justify-center
            md:flex-row md:w-[514px] md:mx-auto md:justify-around lg:w-auto lg:justify-start lg:gap-[6.5rem] ">
                <div className="flex flex-col items-center justify-center gap-3 lg:justify-start lg:items-start">
                    <p className="text-sm tracking-widest text-white/75 ">Avg. Distance</p>
                    <p className="text-[28px] font-bellefair">{distance}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 lg:justify-start lg:items-start">
                    <p className="text-sm tracking-widest text-white/75">Est. Travel Time</p>
                    <p className="text-[28px] font-bellefair">{travel}</p>
                </div>  
            </aside>
            </div>
        </div>
        </section>
}

