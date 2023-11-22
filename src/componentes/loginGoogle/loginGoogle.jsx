import { useSession, signIn, signOut } from "next-auth/react"
import style from "./loginGoogle.module.css"

export default function GoogleBoton() {
  const { data: session } = useSession()
  if (session) {

      //localStorage.setItem("key", JSON.stringify(value));
      //const stored = JSON.parse(localStorage.getItem("key"));

    console.log(session)
    return (
      <>
        <button className={style.out} onClick={() => signOut()}>salir</button>
      </>
    )
  }
  return (
    <>
      <button className={style.in} onClick={() => signIn()}>registrarse</button>
    </>
  )
}