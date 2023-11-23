import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/componentes/navBar/navBar'
import Provider from '../componentes/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'prueba tecnica',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <NavBar/>
          {children}
        </Provider>
        </body>
    </html>
  )
}
