import { datos } from "../../../datos"
import style from "./torneosListado.module.css"
import Link from "next/link"
import { useState, useEffect } from "react"


export default function TorneosListado() {

  //const torneos = datos.torneos // de la funcion se obtiene la lista

  const [torneos, setTorneos] = useState([])

  const [ eliminado, setEliminado] = useState("")

   //peticion ejemplo
   
   function obtener_torneos (){
    fetch(`/api/torneos`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
        method: "GET"
    }).then(response => response.json()).then(res=> setTorneos(res.all_torneos)).catch(error => console.log(error))

    return
}

function borrar_Torneo(event){
  fetch(`/api/torneos/${event.target.value}`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
      method: "DELETE"
  }).then(response => response.json()).then(res=> setEliminado(res.torneoBorrado.evento) ).catch(error => console.log(error))
  
  obtener_torneos()
}

useEffect(()=>{
  obtener_torneos()
},[eliminado])


//tres botones : borrar, crear, modificar
  //crear y modificar: dependiendo de la ruta "/form/[]" sera una funcion para crear o para actualizar un torneo
  //borrar: eliminiara el torneo y todas la relaciones que tenga
    return (
      <div className={style.div}>
        <Link href={`/form/CREAR`}><button className={style.modificar}>CREAR</button></Link>
      <ul className={style.lista}>
          {torneos.map((T)=>{
              return(<div className={style.torneo}>
                  <div className={style.info}>
                  <h1>{T.evento}</h1>
                  <h2>Ubicacion:{T.ubicacion}</h2>
                  {T.estado ? (<p style={{color:"green"}}>activo</p>): <p style={{color: "red"}}>finalizado</p>}
                  </div>
                  <div className={style.botones}>
                  <Link href={`/form/${T.id}`}><button className={style.modificar}>+</button></Link>
                  <button value={T.id} onClick={borrar_Torneo} className={style.borrar}>X</button>
                  </div>
                  </div>)
          })}
      </ul>
      </div>
    )
  }
