"use client"

import style from "./page.module.css"
import {signIn, useSession} from "next-auth/react"


export default async function Home() {

//const info = await getProps()

//console.log(info)
 
  //const session = useSession()

  const handleFormSubmit = async values => {
    const signInResult = signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://127.0.0.1:3000/user/dashboard',
      redirect: false,
    })
    if (signInResult.error) {
      // Handle Error on client sid
      console.log("me cago en todo")
    }
   }
   

  return (
    <div className={style.home}>
      <button>registrarse</button>
    </div>
  )
}

export const getProps = async () =>{

  const res = await fetch("http://localhost:3000/api/usuario");
  const data = await res.json()
  
  return data

}
