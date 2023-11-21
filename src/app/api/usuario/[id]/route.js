import { NextResponse } from 'next/server';
import { useParams } from 'next/navigation'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//este es el CRUD para un usuario en particular

//obtener usuario POR ID, FUNCION ADMIN
export async function GET(request, {params}) {
  
  const id = params.id
    try {
      const user = await prisma.usuario.findFirst(
          {
            where:{
                id: 9
            },
          include: {torneos: {include : {torneo: true}}}
            
        }
         )

        
        console.log(id)
         
     /*if(user === null ){//si ese usuario no existe se crea
        const newUser = await prisma.usuario.create({
            data: {
              nombre: 'sncnidajiott',
              email: 'xelliottxdsdasdsddfsasfas@example-user.com',
              foto: "sasasassdas",
              admin: false,
              torneos: {
                create:[
                  {torneo: {connect: {id: 3}}}
                ]
              }
            }
          }
          );

          return NextResponse.json({newUser }, { status: 200 });
     }*/
  
      return NextResponse.json({user }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }



  //actualizar los registros (agregar uno mas) de un usuario, al registrarse a un torneo
  
  export async function PUT(request, {params}) {
    
    const id = params.id//info de body
    try {
      const user = await prisma.usuario.update(
          {
            where:{
                id: 11//id
            },
            data:{
                torneos: {
                    create:[
                      {torneo: {connect: {id: 2}}}
                    ]
                  },
            },
          include: {torneos: {include : {torneo: true}}}
            
        }
         )

     console.log(user)
  
      return NextResponse.json({user }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }


  // borrar usuario de la base FUNCION ADMIN
  export async function DELETE(request, {params}) {
    
    const id = params.id
    try {
        const torneosborrados = await prisma.usuarioTorneo.deleteMany({
            where: {
              usuarioId: 10,
            },
          })
          
          const usuarioBorrado = await prisma.usuario.delete({
            where: {
              id: 10,
            },
          })
         
     console.log(usuarioBorrado)
  
      return NextResponse.json({usuarioBorrado}, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
