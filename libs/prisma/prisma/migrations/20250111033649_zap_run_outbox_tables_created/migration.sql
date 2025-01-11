/*
  Warnings:

  - You are about to drop the column `metData` on the `ZapRunOutBox` table. All the data in the column will be lost.
  - Added the required column `metaData` to the `ZapRunOutBox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ZapRunOutBox" DROP COLUMN "metData",
ADD COLUMN     "metaData" JSONB NOT NULL;
