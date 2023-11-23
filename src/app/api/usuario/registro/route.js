import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//Para cancelar participantes de torneos 

export async function DELETE(request) {

  const body = await request.json();
  
    try {

         const cancelado = await prisma.usuarioTorneo.delete({
            where:{
                usuarioId_torneoId:{
                    usuarioId: body.usuarioId,
                    torneoId: body.torneoId
                }
            }
         })

  
     console.log(cancelado)
  
      return NextResponse.json({ cancelado }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }