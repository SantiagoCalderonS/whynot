
import { useEffect, useState } from "react"
import { datos } from "../../../datos"
import style from "./usuariosListado.module.css"



export default function UsuariosListado() {

  //const users = datos.users
  const [usuarios, setUsuarios] = useState([])

  const [ eliminado, setEliminado] = useState("")

   //peticion ejemplo
   
   function obtener_usuarios (){
    fetch(`/api/usuario`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
        method: "GET"
    }).then(response => response.json()).then(res=> setUsuarios(res.usuarios)).catch(error => console.log(error))

    return
}

function borrar_usuario(event){
  fetch(`/api/usuario/${event.target.value}`,{//para peticiones a si mismo no hay que poner origen, es como una etiqueta Link
      method: "DELETE"
  }).then(response => response.json()).then(res=> setEliminado(res.usuarioBorrado.nombre) ).catch(error => console.log(error))
  
  obtener_usuarios()
}

useEffect(()=>{
  obtener_usuarios()
},[eliminado])

  
    return (
      <div className={style.div}>
        {eliminado !== ""? <h1>{`"${eliminado}" eliminado`}</h1> : ""}
      <ul className={style.lista}>
          {usuarios?.map((U)=>{
              return(<div className={style.usuario}>
                {/*//cada usuario puede ser borrado con el boton un boton de borrar*/}
                  <div className={style.info}>
                  <h1>{U.nombre}</h1>
                  <h2>{U.gmail}</h2>
                  </div>
                  <div className={style.botones}>
                  <button value={U.id} className={style.borrar} onClick={borrar_usuario}>X</button>
                  </div>
                  </div>)
          })}
      </ul>
      </div>
    )
  }