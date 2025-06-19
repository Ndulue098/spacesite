"use client"
import crewMobil from "@/public/crew/background-crew-mobile.jpg"
import crewDesktop from "@/public/crew/background-crew-desktop.jpg"
import crewTablet from "@/public/crew/background-crew-tablet.jpg"
import crewMan from "@/public/crew/image-douglas-hurley.png"

import Image from "next/image"
import { useState } from "react"

import { crew } from "@/assets/crew"
import CrewNav from "../_components/CrewNav"

export default function Crew(){
    const [index,setIndex]=useState(0)
    const {name,images:{png,webp},role,bio}=crew[index]

    return <section className="w-full h-full flex flex-col pb-0 text-white p-8 font-Barlow_Condensed
    sm:p-10 lg:max-w-[1410px] lg:mx-auto ">      
    <Image fill placeholder="blur" src={crewMobil} alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 sm:hidden"/>
    <Image fill placeholder="blur" src={crewTablet} quality={90} alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 lg:hidden"/>
    <Image fill placeholder="blur" src={crewDesktop} quality={90} alt="" sizes="(max-width: 640px) 100vw, 50vw" className="-z-10 hidden lg:block"/>

    <h2 className="text-center text-xl tracking-widest font-light mb-6 uppercase md:text-left lg:text-[28px]">
        <strong className="text-white/25 mr-6">02</strong>
        Meet your crew
    </h2>

    <div className="h-full grid grid-rows-[50fr_50fr] text-center lg:grid-rows-[1fr] lg:grid lg:gap-x-8 lg:items-center lg:justify-center lg:grid-cols-2 lg:text-left">

        <div className="flex flex-col pt-10 mb-8 px-8 sm:px-20  md:w-[512px] md:mx-auto md:px-8 lg:w-full lg:p-0 lg:grid  lg:grid-rows-[1fr_2rem] lg:h-full lg:mb-0">

            <header className=" mb-6  lg:w-auto lg:pb-10 lg:mb-10 content-center"> 
                <p className="font-bellefair mb-2 text-lg uppercase md:text-2xl lg:text-[32px]">{role}</p>
                <h1 className="text-2xl mb-6 font-bellefair uppercase md:text-[40px] lg:text-[56px] leading-none">{name}</h1>
                <p className="text-base  font-light md:text-[16px] lg:text-[18px] text-white/75 sm:text-lg">
                    {bio}
                </p>
            </header>

            <nav className="mb-auto">
                <ul className=" flex items-center justify-center gap-6 md:mx-auto lg:w-auto lg:justify-start lg:col-start-1 lg:col-end-2 lg:row-start-2">
                    {crew.map((crew,i)=><CrewNav id={i} setIndex={setIndex} index={index} key={i}/>)}
                </ul>
            </nav>
        </div>

        <div className="lg:justify-self-center  mx-auto w-full h-full relative">
            {/* <img src={`crewMan} alt="" className=" inline-block m-6  mx-auto w-[200px] aspect-square sm:w-[250px] md:w-[300px] lg:w-[480px]"/> */}
            <Image placeholder="blur" quality={100} fill src={png} alt="mars" className=" absolute w-[310px] opacity-100 block h-auto lg:object-contain object-contain mx-auto aspect-square sm:w-[310px] md:h-full lg:w-[480px]"/>
            {/* <Image quality={100} src={crewMan} alt="mars" className="w-[310px] opacity-100 block h-auto object-contain mx-auto aspect-square sm:w-[310px] md:h-full lg:w-[480px]"/> */}
             
        </div>    
    </div>  
</section>  
}
