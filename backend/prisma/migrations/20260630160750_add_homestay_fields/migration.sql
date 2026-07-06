/*
  Warnings:

  - You are about to drop the column `description` on the `Homestay` table. All the data in the column will be lost.
  - Added the required column `image` to the `Homestay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Homestay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Homestay" DROP COLUMN "description",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
