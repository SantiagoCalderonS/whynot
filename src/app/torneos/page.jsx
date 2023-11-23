"use client"

import Torneo from "@/componentes/torneo/torneo"
import { useState, useEffect } from "react"


export default function Torneos() {
    

    
  const [torneos, setTorneos] = useState([])

   
   function obtener_torneos (){
    fetch(`/api/torneos`,{//Esta peticion trae todos los torneos actuales
        method: "GET"
    }).then(response => response.json()).then(res=> setTorneos(res.all_torneos)).catch(error => console.log(error))

    return
}

useEffect(()=>{
  obtener_torneos()
},[])


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ul style={{padding: "0px"}}>
            {torneos.map((T)=>{
                return(
                    <Torneo torneo={T} key={T.id}/>
                    )
            })}
        </ul>
        </div>
    )}
