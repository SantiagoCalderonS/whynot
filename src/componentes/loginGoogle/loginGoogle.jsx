import { useSession, signIn, signOut } from "next-auth/react"
import style from "./loginGoogle.module.css"

export default function GoogleBoton() {//funcion de inicio de sesion sacado de la documentacion de Next-auth
  
  const { data: session } = useSession()
  
  function obtener_usuario(){
    fetch(`/api/usuario/email`,{//colocara al user en el localstorage para preservarlo y usarlo en otros componentes
        method: "PUT",
        body: session.user
    }).then(response => response.json()).then(res=> 
      localStorage.setItem("usuario", JSON.stringify(res.user))
    ).catch(error => console.log(error))

    return
}

  if (session) {

    return (
      <>
        <button className={style.out} onClick={() => {signOut() ; localStorage.clear()}}>salir</button>
      </>
    )
  }
  return (
    <>
      <button className={style.in} onClick={() =>{signIn()}}>registrarse</button>
    </>
  )
}