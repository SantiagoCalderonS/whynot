import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//obtiene todos los usuario
export async function GET(request) {
  try {
    /*const newUser = await prisma.usuario.create({
      data: {
        nombre: 'hayahaya mi barriguita',
        email: 'vintage69@example-user.com',
        foto: "fapfapfapfapfap",
        admin: false
      },
    });*/
    
    const newUser = await prisma.usuario.findMany(
        {
        include: {torneos: {include : {torneo: true}}}
        }
       ) // devuelve un arreglo
       
   console.log(newUser)

    return NextResponse.json({ newUser }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

