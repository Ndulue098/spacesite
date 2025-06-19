export default function CrewNav({id,setIndex,index}){
    const active=index===id
    
    return <li onClick={()=>setIndex(id)}  className={`${active ?"bg-white":"bg-white/50"}  rounded-full w-[10px] aspect-square cursor-pointer lg:w-[15px] `}></li> 
}

  