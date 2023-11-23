"use client"

import TorneosListado from "@/componentes/torneosListado/torneosListado"
import UsuariosListado from "@/componentes/usuariosListado/usuariosListado"
import { useState, useEffect } from "react"
import style from "./admin.module.css"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function AdminPage() {

  const [show, setShow] = useState("torneos")
  const [isAdmin, setIsAdmin]= useState(false)//permiso para acceder

  const usuario = JSON.parse(localStorage.getItem("usuario"))
  const { data: session } = useSession()
    const router = useRouter()

    useEffect(()=>{//aqui se revisa si tiene permiso

      !session && router.push("/")//si ni siquiera se ha registrado lo saca

      if(usuario === null){
        setIsAdmin(false)                
      }else{
        usuario.admin && setIsAdmin(true)
      } 

    })

    //se revisa si la persona esta permitida para acceder
    if(isAdmin){ 
      return (
      <div className={style.div}>
        <div className={style.barra}>
          <button onClick={()=>{setShow("torneos")}}>administrar torneos</button>
          <button onClick={()=>{setShow("usuarios")}}>administrar usuarios</button>
        </div>
        { show === "torneos" ? <TorneosListado/>: <UsuariosListado/>}

      </div>
    )
  }else{
    return(
        <div style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw'}}>
            <img style={{margin: "auto" , width: "30vw", borderRadius: "10px"}} src="https://www.pngkey.com/png/full/0-4664_alto-sign-pare-seal-de-transito.png"/>
        </div>
    )
}
}