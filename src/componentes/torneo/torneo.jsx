"use client"
import React, { useEffect } from "react"
import style from "./torneo.module.css"
import { useState } from "react"
import Link from "next/link"
import { DEV_URL, DEP_URL } from "../../../URLS"

export default function Torneo({torneo}) {

    const [mostrar, setMostrar] = useState(false)
    const [info, setInfo] = useState({})

    //peticion ejemplo
    function req (){
        fetch(`/api/req`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
            method: "POST",
            body: JSON.stringify({msg: "hola post"})
        }).then(response => response.json()).then(res=> setInfo(res)).catch(error => console.log(error))

        console.log(info)
    }

    useEffect(()=>{
        req()
    },[])

    return (
        <div className={style.div}>
           
            <div className={style.datos}>
            <div className={style.texto}>
            <h1>{torneo.evento}*</h1>
            {torneo.estado? (<p style={{color:"green", float: "left"}}>activo</p>): <p style={{color: "red", float: "left"}}>finalizado</p>}

            <h2>Ubicacion:{torneo.ubicacion}</h2>
            {/*aqui hago una comparacion con el 
            id del torneo y busco entre el array de torneos suscritos del usuario en
            en el local host, si ya está el boton  desaparese o dice participando o algo asi*/}
            {/*si estado es true Y la persona no está suscrita aparece*/}
            {torneo.estado ?<button onClick={()=>{console.log("me registre")}}>registrarse</button> :
             (<>{/*si esta activo, pero ya sucrito */}
             { true ?<button onClick={()=>{console.log("cancele")}} style={{background: "red"}}>cancelar</button> :
             <button onClick={()=>{console.log("expiro")}} style={{background: "red"}}>Terminado</button>}</>)
             }
        
        <button onClick={()=>{setMostrar(!mostrar) ; req()}}>participantes</button>
        {!mostrar? "" : (<ul className={style.lista}>
        {torneo.participantes.map((P)=>{
                return(
                    <div key={P.ID}>
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

    /*export const req=() =>{

        const data = fetch("http://localhost:3000/api/req",{
            method: "POST",
            body: JSON.stringify({msg: "hola post"})
        }).then(response => response.json()).then(res=> res).catch(error => console.log(error))

return data
        /*try {
            const res = await fetch("http://localhost:3000/api/req",{
                method: "POST",
                body: JSON.stringify({msg: "hola post"})
            })
    
            const data = await res.json()
      
      return data
            
        } catch (error) {
           return "error" 
        }
         
    }*/