import { useSession, signIn, signOut } from "next-auth/react"

export default function GoogleBoton() {
  const { data: session } = useSession()
  if (session) {

      //localStorage.setItem("key", JSON.stringify(value));
      //const stored = JSON.parse(localStorage.getItem("key"));

    console.log(session)
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>salir</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>registrarse</button>
    </>
  )
}