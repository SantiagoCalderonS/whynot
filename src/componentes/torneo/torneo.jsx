"use client"
import React from "react"

import { useState } from "react"

export default function Torneo({torneo}) {

    const [mostrar, setMostrar] = useState(false)

    return (
        <div>
            <h1>{torneo.nombre}</h1>

        <button onClick={()=>{setMostrar(!mostrar)}}>participantes</button>
        {!mostrar? "" : (<ul>
        {torneo.participantes.map((P)=>{
                return(
                    <div>
                        <h1>{P.nombre}</h1>
                    </div>
                    )
            })}
        </ul>)}
        
        </div>
    )}