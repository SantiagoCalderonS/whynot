import { NextResponse } from 'next/server';
import { useParams } from 'next/navigation'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//este es el CRUD para un usuario en particular

//obtener usuario POR ID, FUNCION ADMIN
export async function GET(request, {params}) {//obtiene un usuario por ID //esto lo hago antes de entregar pero esta funcion creo que se usa

  const id = Number(params.id)

  try {
      const user = await prisma.usuario.findFirst(
          {
            where:{
                id: id
            },
          include: {torneos: {include : {torneo: true}}}
            
        }
         )

  
      return NextResponse.json({user }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }



  //actualizar los registros (agregar uno mas) de un usuario, al registrarse a un torneo
  
  export async function PUT(request, {params}) { //para la accion de registrarse a un torne, establece una relacion entre ellos
    
    const id = Number(params.id)//info de body
    const body = await request.json();

    try {
      const user = await prisma.usuario.update(
          {
            where:{
                id: id//id
            },
            data:{
                torneos: {
                    create:[
                      {torneo: {connect: {id: body.id}}}
                    ]
                  },
            },
          include: {torneos: {include : {torneo: true}}}
            
        }
         )

  
      return NextResponse.json({user }, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }


  // borrar usuario de la base FUNCION ADMIN
  export async function DELETE(request, {params}) {// borra todo lo relacionado con un usuario segun du ID 

    const id = Number(params.id)

    try {
        const torneosborrados = await prisma.usuarioTorneo.deleteMany({
            where: {
              usuarioId: id,
            },
          })
          
          const usuarioBorrado = await prisma.usuario.delete({
            where: {
              id: id,
            },
          })
         
     console.log(usuarioBorrado)
  
      return NextResponse.json({usuarioBorrado}, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
