"use client"

import style from "./page.module.css"
import {signIn, useSession} from "next-auth/react"
import GoogleBoton from "@/componentes/loginGoogle/loginGoogle"
//import { useEffect, useState } from "react"
import { datos } from "../../datos"


export default function Home() {



  return (
    <div className={style.home}>
      <div className={style.perfil} >
        <h1>{datos.usuario.nombre}</h1>
        <img src={datos.usuario.imagen}/>
        <p>{datos.usuario.gmail}</p>
      </div>
      <ul className={style.lista}>
        {datos.usuario.torneos.map((T)=>{
          return(
            <div>
              <h1>{T.evento}</h1>
              <h5>{T.ubicacion}</h5>
              <p>{T.estado? "activo" : "expirado"}</p>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

/*export const inicioSesion= () =>{

}

/*export const getProps = async () =>{

  const res = await fetch("http://localhost:3000/api/usuario");
  const data = await res.json()
  
  return data

}

export const handleSignIn = async () => {
  const result = await signIn();

  const {data}= useSession()
  console

  if (result.ok) {
    router.push('/torneos');
  } else {
    console.log(result.error);
  }
};*/