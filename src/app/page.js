"use client"

import style from "./page.module.css"
import {signIn, useSession} from "next-auth/react"
import GoogleBoton from "@/componentes/loginGoogle/loginGoogle"
//import { useEffect, useState } from "react"
import { datos } from "../../datos"
import { useState, useEffect } from "react"


export default function Home() {

  //coger el email de localstorage, pedir datos del api, si no existe el usuario se crea

 const [inicio, setInicio] = useState(false)
 const [usuario, setUsuario] = useState({})

 const { data: session } = useSession()

 function obtener_usuario(){
  fetch(`/api/usuario/email`,{//peticion que obtendra o creara un usuario segun el email obtenido del inicio de session
      method: "PUT",
      body: JSON.stringify(session.user)
  }).then(response => response.json()).then(res=>{ 
    setUsuario(res.user);
    localStorage.setItem("usuario", JSON.stringify(res.user))
  }
  ).catch(error => console.log(error))

  return
}

  useEffect(() => {
    if(session){
      obtener_usuario()
    }else{
      setInicio(!inicio)
    }
    
  }, [session]);

  return (
    <div className={style.home}>
      <div className={style.perfil} >
        {usuario.nombre ?<h1>{usuario?.nombre }</h1> : <h1>Ingrese a su cuenta</h1> }
        {usuario.foto ?  <img src={usuario?.foto}/> :  <img src="https://th.bing.com/th/id/OIP.t75oQHR4WMinflcpcBlXSQHaFT?w=226&h=180&c=7&r=0&o=5&pid=1.7"/> }
        {usuario.email ?<p>{usuario?.email }</p> : "" }
      </div>
      <ul className={style.lista}>
        {usuario?.torneos?.map((T)=>{
          return(
            <div style={{border: "solid 1px gray"}}>
              <h1>{T.torneo.evento}</h1>
              <h5>{T.torneo.ubicacion}</h5>
              <p>{T.torneo.estado? "activo" : "expirado"}</p>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
