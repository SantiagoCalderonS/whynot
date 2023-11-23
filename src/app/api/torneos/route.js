import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// GET para recibir todos los torneos existentes
export async function GET(request) {
  try {
    const all_torneos = await prisma.torneo.findMany(
      {
      include: {usuarios: {include : {usuario: true}}} 
    })
   

    return NextResponse.json({ all_torneos }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


// POST para crear un nuevo torneo
export async function POST(request) {

  const body = await request.json();

  try {
    const nuevoTorneo = await prisma.torneo.create({
      data: body,
      include: {usuarios: {include : {usuario: true}}}
    })

    return NextResponse.json({msg: "Nuevo torneo creado" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

