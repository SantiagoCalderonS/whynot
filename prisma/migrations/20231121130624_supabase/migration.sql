-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "admin" BOOLEAN DEFAULT false,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Torneo" (
    "id" SERIAL NOT NULL,
    "evento" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "portada" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "estado" BOOLEAN DEFAULT true,

    CONSTRAINT "Torneo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioTorneo" (
    "usuarioId" INTEGER NOT NULL,
    "torneoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioTorneo_pkey" PRIMARY KEY ("usuarioId","torneoId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "UsuarioTorneo" ADD CONSTRAINT "UsuarioTorneo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioTorneo" ADD CONSTRAINT "UsuarioTorneo_torneoId_fkey" FOREIGN KEY ("torneoId") REFERENCES "Torneo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
