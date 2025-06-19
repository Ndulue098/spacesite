
export default function TechNav({num,setIndex,index}) {
    const active=index===num

    return  <li onClick={()=>setIndex(num)} className={`${active&&"bg-white text-gray-600"} cursor-pointer w-10 lg:w-20 md:w-14 rounded-full flex items-center justify-center aspect-square border-solid border-[1px] border-white `}>
        {num+1} 
    </li>     

} 

