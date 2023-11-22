"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { datos } from "../../../datos";
import style from "./navBar.module.css"
import GoogleBoton from "../loginGoogle/loginGoogle";

export default function NavBar() {
    return (
        <div className={style.div}>
        <div className={style.barra}>
        <div className={style.nav}>
            <Link className={style.link} href="/"><button><h1>home</h1></button></Link>
            
            <Link className={style.link} href="/torneos"><button><h1>Torneos</h1></button></Link>
            
            { datos.usuario.admin && (
                <Link className={style.link} href="/admin"><button><h1>admin</h1></button></Link>
            )}
            
        </div>
       
           <GoogleBoton/>
       
        </div>
        </div>
    )}