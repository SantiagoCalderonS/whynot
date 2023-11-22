import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//este es el CRUD para un usuario en particular
//con los datos del google auth

//obtener usuario POR EMAIL, FUNCION ADMIN
export async function GET(request, {params}) {
  
  const email = params.email
    try {
      const user = await prisma.usuario.findFirst(
          {
            where:{
                id: 6 //aqui sera por el email
            },
          include: {torneos: {include : {torneo: true}}}
            
        }
         )
         
     if(user === null ){//si ese usuario no existe se crea
        const newUser = await prisma.usuario.create({
            data: {//datos dell body
              nombre: 'sncnidajiott',
              email: 'xelliottxdsdasdsddfsasfas@example-user.com',
              foto: "sasasassdas",
              admin: false,
              torneos: {
                create:[
                  {torneo: {connect: {id: 1}}}
                ]
              }
            },
            include: {torneos: {include : {torneo: true}}}
          }
          );

          return NextResponse.json({newUser }, { status: 200 });
     }
  
      return NextResponse.json({user }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }