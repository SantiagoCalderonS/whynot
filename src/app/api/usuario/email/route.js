import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//este es el CRUD para un usuario en particular
//con los datos del google auth

//obtener usuario POR EMAIL, FUNCION ADMIN
export async function PUT(request) {
  
/* un PUT, cada que se busque si se encuentra tome ese y lo actualice y devuelva ese usuario, si no hay lo crea */

  const body = await request.json();

    try {
      const user = await prisma.usuario.update(
          {
            where:{
                email: body.email //aqui sera por el email
            },
            data: {
              nombre: body.name,
              foto: body.image,
              email: body.email
            },
          include: {torneos: {include : {torneo: true}}}
            
        }
         )
         
     if(user === null ){//si ese usuario no existe se crea
       
     }
  
      return NextResponse.json({user }, { status: 200 });
      
    } catch (error) {
      try {
        const user = await prisma.usuario.create({
          data: {
            nombre: body.name,
            foto: body.image,
            email: body.email
          },
          include: {torneos: {include : {torneo: true}}}
        }
        );

        return NextResponse.json({user }, { status: 200 });
      } catch (error) {
        
        return NextResponse.json({ error }, { status: 500 });
      }
    }
  }