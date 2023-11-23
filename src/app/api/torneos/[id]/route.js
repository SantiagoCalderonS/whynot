import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//obtendra un torneo por ID
export async function GET(request, {params}) {
  
  const id = Number(params.id)

  try {
    const torneo = await prisma.torneo.findFirst(
      {
        where:{
            id: id //id del torneo
        },
      include: {usuarios: {include : {usuario: true}}}
        
    }
     )
   

    return NextResponse.json({ torneo }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


//para ACTUALIZAR UN TORNEO
export async function PUT(request, {params}) {
  
  const id = Number(params.id)

  const body = await request.json(); // nuevos datos
  

  try {
    const torneo = await prisma.torneo.update(
        {
          where:{
              id: id//id del torneo
          },
          data: body,
        include: {usuarios: {include : {usuario: true}}}
          
      }
       )

   

    return NextResponse.json({msg: "cambio realizado"}, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//borrar el torneo
export async function DELETE(request, {params}) {//se eliminira cualquier registro o relacion del torneo
  
  const id = Number(params.id)
  try {
      const torneosBorrados = await prisma.usuarioTorneo.deleteMany({
          where: {
            torneoId: id, // aqui se da el id del torneo a borrar
          },
        })
        
        const torneoBorrado = await prisma.torneo.delete({
          where: {
            id:id,// lo mismo
          },
        })
       


    return NextResponse.json({torneoBorrado}, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}