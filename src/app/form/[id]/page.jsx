"use client"

import style from "./form.module.css"
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Form (){
    
    const {id}= useParams()

    const [ msg , setMsg] = useState("")//mensaje que se vera al enviar el formulario

    const [torneo, setTorneo]= useState({//info a enviar
        evento: "",
        ubicacion:"",
        portada: "",
        fecha: null
        })

        const [completado, setComp]= useState(false)// esto dara permiso a enviar

    function handleChange(E){//aqui se manejara y guardara la info escrita para poder enviarla

        let info= E.target.value;
        const input= E.target.name;

        if(input === "fecha"){
            setTorneo({...torneo, [input]: `${info}T00:00:00.000Z`})
            return
        }else{
            setTorneo({...torneo, [input]: info})
            console.log(info)
            return
            }
        }
    
        useEffect(()=>{//esta pendiente si todos los input cuentan con algo escrito
            if( torneo.evento !== "" && torneo.ubicacion !== "" && torneo.portada !== "" && torneo.fecha !== null ){
                setComp(true)
            }else{
                setComp(false)
            }
    
        },[torneo.evento, torneo.ubicacion, torneo.portada, torneo.fecha])


        const Subir = async (event)=>{// funcion para subir la info, dependera si es para actualizar o para crear
                            //al finalizar se setea el mensaje del server(msg)

            event.preventDefault()

            console.log(torneo)

            if(id === "CREAR"){
                fetch(`/api/torneos`,{
                    method: "POST",
                    body: JSON.stringify(torneo)
                }).then(response => response.json()).then(res=>{ 
                  setMsg(res.msg)
                }).catch(error => console.log(error))
                //fetch pa crear
            }else{
                //transformar id en number y hacer peticion par actualizar
                    fetch(`/api/torneos/${id}`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
                        method: "PUT",
                        body: JSON.stringify(torneo)
                    }).then(response => response.json()).then(res=>{ 
                      setMsg(res.msg)
                    }).catch(error => console.log(error))
                }
                    return
            }

        return(
            <div className={style.div}>
                { msg !== "" ? (<div>
                <h1>{msg}</h1>
                <Link href={"/admin"}><button>regresar</button></Link>
                </div>) :(
            <form>
            <label>NOMBRE DE EVENTO: </label>
            <input type="text" name="evento" onChange={handleChange} value={torneo.evento}/>
            <br/>

            <label>UBICACION: </label>
            <input type="text" name="ubicacion" onChange={handleChange} value={torneo.ubicacion}/>
            <br/>

            <label>PORTADA /URL/: </label>
            <input type="text" name="portada" onChange={handleChange} value={torneo.portada}/>
            <br/>

            <label>FECHA: </label>
            <input type="date" name="fecha" onChange={handleChange} value={torneo.date}/>
            <br/>



            {completado === true?(<button type="submit" onClick={Subir}>ENVIAR</button>):""}
            
            </form>)}
            </div>
        )
    }