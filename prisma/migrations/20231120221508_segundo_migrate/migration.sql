/*
  Warnings:

  - Added the required column `organizador` to the `Torneo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Torneo" ADD COLUMN     "estado" BOOLEAN DEFAULT true,
ADD COLUMN     "fecha" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "organizador" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "admin" DROP NOT NULL,
ALTER COLUMN "admin" SET DEFAULT false;
