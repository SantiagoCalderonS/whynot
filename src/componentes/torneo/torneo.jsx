"use client"
import React, { useEffect } from "react"
import style from "./torneo.module.css"
import { useState } from "react"
import { useSession } from "next-auth/react"


export default function Torneo({torneo}) {

    const [mostrar, setMostrar] = useState(false)
    const [participando, setParticipa] = useState(false)

    const usuario = JSON.parse(localStorage.getItem("usuario"))
    const { data: session } = useSession()


    function registrar_usuario(){//funcion que establecera una relacion entre el usuario y el torneo a participar

        fetch(`/api/usuario/${usuario.id}`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
            method: "PUT",
            body: JSON.stringify({id: torneo.id})
        }).then(response => response.json()).then(res=>{ 
          localStorage.setItem("usuario", JSON.stringify(res.user))
          setParticipa(true)
        }
        ).catch(error => console.log(error))
    
        return
      }

      function cancelar_registro(){//funcion que ecancelara la relacion entre el usuario y el torneo a participar

        if(session){
          fetch(`/api/usuario/registro`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
            method: "DELETE",
            body: JSON.stringify({ usuarioId: usuario.id, torneoId:torneo.id})
        }).then(response => response.json()).then(res=>{ 
          setParticipa(false)
        }
        ).catch(error => console.log(error))
    }
        
        return
      }

      function registrado () {//revisa si ese usuario esta o no participando en el torneo
        if(session){torneo.usuarios.forEach((U)=>{
            U.usuario.id === usuario.id && setParticipa(true)
        })}
        return
      }

      useEffect(()=>{
        registrado()
      },[usuario])
      


    
    return (
        <div className={style.div}>
           
            <div className={style.datos}>
            <div className={style.texto}>
            <h1>{torneo.evento}*</h1>
            {torneo.estado? (<p style={{color:"green", float: "left"}}>activo</p>): <p style={{color: "red", float: "left"}}>finalizado</p>}

            <h2>Ubicacion:{torneo.ubicacion}</h2>
            <h2>Fecha:{torneo.fecha.split("T")[0]}</h2>
            {/*aqui hago una comparacion con el 
            id del torneo y busco entre el array de torneos suscritos del usuario en
            en el local host, si ya está el boton  desaparese o dice participando o algo asi*/}
            {/*si estado es true Y la persona no está suscrita aparece*/}
            <div className={style.botones}>
            { session && (<>{torneo.estado && !participando ?<button onClick={registrar_usuario} >registrarse</button> :
             (<>{/*si esta activo, pero ya sucrito */}
             { participando ?<button onClick={cancelar_registro} style={{background: "red"}}>cancelar</button> :
             <button onClick={()=>{console.log("expiro")}} style={{background: "red"}}>Terminado</button>}</>)
        }</>)}
        
        {torneo.usuarios.length !== 0 && <button onClick={()=>{setMostrar(!mostrar)}}>participantes</button>}
        {!mostrar? "" : (<ul className={style.lista}>
        {torneo.usuarios?.map((U)=>{
                return(
                    <div key={U.usuario.id}>
                        <h5>{U.usuario.nombre}</h5>
                    </div>
                    )
            })}
        </ul>)}
        </div>
            </div>
            <img src={torneo.portada}/>
            </div>    
       
        </div>
    )}

    