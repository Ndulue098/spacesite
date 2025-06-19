export default function DestNav({name,setIndex,index,id}){
   const active=index===id


    return <li onClick={()=>setIndex(id)} className={`cursor-pointer tracking-widest h-full  ${active && "border-solid border-b-2"} `}>
        {name}
    </li> 
}

   