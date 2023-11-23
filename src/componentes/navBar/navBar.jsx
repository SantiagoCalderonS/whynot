"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { datos } from "../../../datos";
import style from "./navBar.module.css"
import GoogleBoton from "../loginGoogle/loginGoogle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function NavBar() {

    const [usuario, setUsuario] = useState({admin: false}) //el usuario

    


    useEffect(()=>{
        var intervalID = setInterval(myCallback, 5000);//este codigo lo saque de una IA

       function myCallback() {
 // Tu código debe ir aquí
 // Los parámetros son totalmente opcionales
 const user = JSON.parse(localStorage.getItem("usuario"))
 setUsuario(user)
}

clearInterval(2);
    },[])
    
    return (
        <div className={style.div}>
        <div className={style.barra}>
        <div className={style.nav}>
            <Link className={style.link} href="/"><button>home</button></Link>
            
            <Link className={style.link} href="/torneos"><button>Torneos</button></Link>
            
            { usuario?.admin && (
                <Link className={style.link} href="/admin"><button>admin</button></Link>
            ) }{/*se revisa si es admin para darle permiso a las opciones de administrador*/}
            
        </div>
       
           <GoogleBoton/>{/*boton que permite el inicio de sesion*/}
       
        </div>
        </div>
    )
}