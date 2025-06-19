"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

// import a href="" from "next/link";

export default function Navigation() {
    const [isOpen,setIsOpen]=useState(false)
    const ref=useRef()
    const pathname = usePathname();

    function handleOpen(){
        ref.current.style.transform="translateX(-16rem)"
        setIsOpen(true)
    }
    function handleClose(){
        ref.current.style.transform="translateX(16rem)"
        setIsOpen(false)
    } 

     const getLinkClasses = (path) =>
        `group relative tracking-widest font-light my-auto flex justify-center h-full items-center text-base uppercase ${
            pathname === path ? "border-b-2 border-white" : ""
        }`;

    return <nav className="text-white h-[88px] flex items-center justify-between w-full 
        sm:p-12 p-8 md:px-0 md:py-0  lg:mt-8 font-Barlow_Condensed"> 
            <a href="" className="relative h-full w-10 md:mx-12  aspect-square flex items-center lg:mx-12 "> 
                <Image  src="shared/logo.svg" width="5" height={5} alt="" className="block w-10 md:w-12"/>
            </a>
            <div className="hidden lg:block absolute border-[1px] w-[45%] translate-x-[20%] z-50 border-white/55"/>

            <ul className=" backdrop-contrast-50   hidden md:flex items-center justify-evenly gap-6 h-full
            md:pl-10 w-full lg:px-16 lg:gap-12 lg:justify-end lg:w-[50%]"> 
                <Link href="/" className={getLinkClasses("/")}>
                    <li>
                        <strong className="hidden md:inline-block mr-2 font-bold">00</strong> Home
                    </li>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="/destination" className={getLinkClasses("/destination")}>
                    <li>
                        <strong className="hidden md:inline-block mr-2 font-bold">01</strong> Destination
                    </li>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="/crew" className={getLinkClasses("/crew")}>
                    <li>
                        <strong className="hidden md:inline-block mr-2 font-bold">02</strong> Crew
                    </li>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="/technology" className={getLinkClasses("/technology")}>
                    <li>
                        <strong className="hidden md:inline-block mr-2 font-bold">03</strong> Technology
                    </li>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </ul> 

            {!isOpen &&<div onClick={handleOpen} className="cursor-pointer w-6 aspect-square md:hidden ">
                <Image src="shared/icon-hamburger.svg" width="5" height={5} alt="" className="block w-7"/>
            </div>
            }

            <ul ref={ref} className=" backdrop-contrast-50  bg-[hsl(230, 35.294117647058826%, 15%)] opacity-100 h-screen divide-y-2 divide-solid divide-y-reverse absolute -right-64 top-0 bottom-0 w-64 flex flex-col gap-4 py-20  transition duration-500"> 
                <div onClick={handleClose} className="w-6 aspect-square cursor-pointer absolute top-6 right-6">
                    <Image className=" w-7 " src="shared/icon-close.svg" width={10} height={10} alt=""/>
                </div>
               
                <Link onClick={handleClose} href="/" className="wordSpace px-5 py-2 text-lg uppercase  "> 
                    <li>Home</li>
                </Link>
                <Link onClick={handleClose} href="/destination" className="wordSpace px-5 py-2 text-lg uppercase  "> 
                    <li>Destination</li>
                </Link>
                <Link onClick={handleClose} href="/crew" className="wordSpace px-5 py-2 text-lg uppercase  ">
                    <li>Crew</li> 
                </Link>
                <Link onClick={handleClose} href="/technology" className="wordSpace px-5 py-2 text-lg uppercase  ">
                    <li>Technology</li>
                </Link> 
            </ul>
        </nav>
}

