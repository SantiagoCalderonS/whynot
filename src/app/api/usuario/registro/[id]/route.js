import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//Para cancelar participantes de torneos 

export async function GET(request, {params}) {
    
    const id = params.id
    try {

         const cancelado = await prisma.usuarioTorneo.delete({
            where:{
                usuarioId_torneoId:{
                    usuarioId: 11,
                    torneoId: 3
                }
            }
         })

  
     console.log(cancelado)
  
      return NextResponse.json({ cancelado }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }