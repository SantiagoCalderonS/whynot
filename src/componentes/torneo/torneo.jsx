"use client"
import React from "react"
import style from "./torneo.module.css"
import { useState } from "react"

export default function Torneo({torneo}) {

    const [mostrar, setMostrar] = useState(false)

    return (
        <div className={style.div}>
            <div className={style.datos}>
            <div className={style.texto}>
            <h1>{torneo.evento}</h1>
            <p>Ubicacion:{torneo.ubicacion}</p>
        <button onClick={()=>{setMostrar(!mostrar)}}>participantes</button>
        {!mostrar? "" : (<ul className={style.lista}>
        {torneo.participantes.map((P)=>{
                return(
                    <div >
                        <h5>{P.nombre}</h5>
                    </div>
                    )
            })}
        </ul>)}
            </div>
            <img src={torneo.portada}/>
            </div>    
        
        </div>
    )}