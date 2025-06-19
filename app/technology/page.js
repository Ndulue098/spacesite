"use client"
import TechDesktop from "@/public/technology/background-technology-desktop.jpg"
import TechTablet from "@/public/technology/background-technology-tablet.jpg"
import TechMobile from "@/public/technology/background-technology-mobile.jpg"
import tectImg from "@/public/technology/image-launch-vehicle-portrait.jpg"

import Image from "next/image"
import { technology } from "@/assets/technology"
import { useState } from "react"
import TechNav from "../_components/TechNav"

export default function Tech() {
    const [index,setIndex]=useState(0);
    // const [currNum,setCurrNum]=useState(null)
    
    const {description,images:{portrait},name}=technology.at(index)


    return <section className="w-full text-white font-Barlow_Condensed
     lg:max-w-[1350px] lg:ml-auto flex flex-col h-full lg:p-12 lg:pr-0">      
    <Image fill placeholder="blur" src={TechMobile}  alt=""  sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 sm:hidden"/> 
    <Image fill placeholder="blur" src={TechTablet}  alt=""  sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 lg:hidden"/>
    <Image fill placeholder="blur" src={TechDesktop}  alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 hidden lg:block"/>


    <h2 className="mt-8 text-center text-xl tracking-widest font-light mb-6 uppercase md:text-left md:px-12 lg:text-[28px] lg:mt-0 lg:px-0">
        <strong className="text-white/25 mr-6">03</strong>
        Space launch 101
    </h2> 

    <div className="pt-16 lg:grid lg:gap-x-8 lg:items-center lg:justify-center lg:grid-cols-2 lg:text-left lg:flex-1 lg:pt-0"> 
        <div className=" mb-8 h-[330px] md:[375px] pt-16 relative lg:col-start-2 lg:h-full lg:mb-0   overflow-hidden">  
            <Image fill src={`/${portrait}`} alt="" className="hover:scale-125 transition-all duration-500 ease-in-out absolute inline-block object-bottom object-cover  md:w-[300px] "/>
        </div>   
  
        <div className="text-center sm:px-12 lg:px-0 px-8 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center lg:gap-8">

            <ul className="font-bellefair uppercase text-lg md:text-2xl mb-10 flex items-center justify-center gap-8 md:w-[514px] md:mx-auto lg:w-auto lg:justify-start lg:flex-col lg:mb-0 lg:text-[32px]">
                {technology.map((tech,i)=><TechNav key={i} num={i} index={index} setIndex={setIndex}  />)}
            </ul>

            <main className="px-2 md:w-[514px] md:mx-auto lg:w-auto lg:p-0 lg:text-start"> 
                <p className="uppercase mb-4 text-lg font-bellefair md:text-2xl lg:text-[32px]">The Terminology...</p>
                <h1 className="text-2xl mb-4 font-bellefair uppercase md:text-[40px] lg:text-[56px] leading-none">{name}</h1>
                <p className="text-[15px] font-light md:text-[16px] lg:text-[22px] text-white/75">
                   {description}
                </p>
            </main>
            
        </div>
    </div>
</section>
}

