import React from "react";
import Link from "next/link";
import Image from "next/image";
import { datos } from "../../../datos";

export default function NavBar() {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" ,height: "150px", width: "100%", color:"white" , backgroundColor: "violet"}}>
        <ul style={{display: "flex", flexDirection: "row", width: "50%", justifyContent: "space-between"}}>
            <li >
                <Link href="/"><h1>home</h1></Link>
            </li>
            <li >
                <Link href="/torneos"><h1>Torneos</h1></Link>
            </li>
            { datos.usuario.admin && (<li >
                <Link href="/admin"><h1>admin</h1></Link>
            </li>)}
            
        </ul>
        <div style={{display: "flex", flexDirection: "row" , height: "100px"}}>
            <h1>{datos.usuario.nombre}</h1>
        </div>
        </div>
    )}