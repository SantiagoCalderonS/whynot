import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//obtendra un torneo por ID
export async function GEsT(request, {params}) {
  
  const id = params.id
  try {
    const id_torneo = await prisma.torneo.findFirst(
      {
        where:{
            id: 3 //id del torneo
        },
      include: {usuarios: {include : {usuario: true}}}
        
    }
     )
   console.log(id_torneo)

    return NextResponse.json({ id_torneo }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


//para ACTUALIZAR UN TORNEO
export async function PUT(request, {params}) {
  
  const id = params.id
  try {
    const user = await prisma.torneo.update(
        {
          where:{
              id: 4
          },
          data:{
            evento: "dsdwas",
            ubicacion: "ssssadadada",
            portada: "adawyutyg32",
          },
        include: {usuarios: {include : {usuario: true}}}
          
      }
       )

   console.log(user)

    return NextResponse.json({user }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

//borrar el torneo
export async function GET(request, {params}) {
  
  const id = params.id
  try {
      const torneosBorrados = await prisma.usuarioTorneo.deleteMany({
          where: {
            torneoId: 2, // aqui se d el id del torneo a borrar
          },
        })
        
        const torneoBorrado = await prisma.torneo.delete({
          where: {
            id: 2,// lo mismo
          },
        })
       
   console.log(torneoBorrado)

    return NextResponse.json({torneoBorrado}, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}