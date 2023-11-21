import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
import { data } from 'autoprefixer';
const prisma = new PrismaClient()

// GET para recibir todos los torneos existentes
export async function GSET(request) {
  try {
    const all_torneos = await prisma.torneo.findMany(
      {
      include: {usuarios: {include : {usuario: true}}} 
    })
   console.log(all_torneos)

   

    return NextResponse.json({ all_torneos }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GdET(request) {
  try {
    const updatedUser = await prisma.usuario.update({
      where: {
        id: 11, // Replace with the ID of the user you want to update
      },
      data: {
        torneos: {
          create:[
            {torneo: {connect: {id: 4}}}
          ]
        },
      },
      include: {
        torneos: true, // Include the updated tournaments in the returned object
      },
     })
     

    return NextResponse.json({ updatedUser }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


// POST para crear un nuevo torneo
export async function GEfT(request) {
  try {
    const nuevoTorneo = await prisma.torneo.create({
      data: {//datos dell body
        evento: 'sncnidajiott',
        ubicacion: 'xelliottxdsdasdsddfsasfas@example-user.com',
        portada: "sasasassdas",
      },
      include: {usuarios: {include : {usuario: true}}}
    })

    return NextResponse.json({ nuevoTorneo }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

