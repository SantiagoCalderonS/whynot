import { NextResponse } from 'next/server';

export async function POST(request){

  try {
    //como consigo el body de esta peticion?
    const body = await request.json();
    
     return NextResponse.json( body, { status: 200 });
    
  } catch (error) {
    return NextResponse.json( {msg: "error"} ,{ status: 500 });

  }


} 


export async function GET(request) {
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
  
  