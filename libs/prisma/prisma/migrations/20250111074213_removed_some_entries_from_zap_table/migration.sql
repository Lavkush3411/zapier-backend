/*
  Warnings:

  - You are about to drop the column `triggerId` on the `Zap` table. All the data in the column will be lost.
  - You are about to drop the column `zapRunId` on the `Zap` table. All the data in the column will be lost.
  - You are about to drop the column `zapRunOutBox` on the `Zap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "triggerId",
DROP COLUMN "zapRunId",
DROP COLUMN "zapRunOutBox";
