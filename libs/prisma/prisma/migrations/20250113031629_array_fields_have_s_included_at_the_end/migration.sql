/*
  Warnings:

  - You are about to drop the column `actionId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the `AvailableActions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `availableActionId` to the `Action` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_actionId_fkey";

-- DropIndex
DROP INDEX "Action_actionId_key";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "actionId",
ADD COLUMN     "availableActionId" TEXT NOT NULL;

-- DropTable
DROP TABLE "AvailableActions";

-- CreateTable
CREATE TABLE "AvailableAction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvailableAction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_availableActionId_fkey" FOREIGN KEY ("availableActionId") REFERENCES "AvailableAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
