"use client"

import { SessionProvider } from 'next-auth/react'

export default function Provider ({children}){//para dar el contexto dado por next-auth a toda la aplicacion

    return(
        <SessionProvider>{children}</SessionProvider>
    )
}

