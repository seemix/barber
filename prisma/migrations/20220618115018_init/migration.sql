/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Barber` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `Barber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barber" ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Barber_phone_key" ON "Barber"("phone");
