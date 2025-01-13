/*
  Warnings:

  - You are about to drop the `AvailableTriggers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trigger` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `triggerSubTypeId` to the `Zap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triggerTypeId` to the `Zap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_availableTriggerId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_zapId_fkey";

-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "triggerSubTypeId" TEXT NOT NULL,
ADD COLUMN     "triggerTypeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "AvailableTriggers";

-- DropTable
DROP TABLE "Trigger";

-- CreateTable
CREATE TABLE "TriggerType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TriggerType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriggerSubType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "triggerTypeId" TEXT NOT NULL,

    CONSTRAINT "TriggerSubType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_triggerTypeId_fkey" FOREIGN KEY ("triggerTypeId") REFERENCES "TriggerType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_triggerSubTypeId_fkey" FOREIGN KEY ("triggerSubTypeId") REFERENCES "TriggerSubType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerSubType" ADD CONSTRAINT "TriggerSubType_triggerTypeId_fkey" FOREIGN KEY ("triggerTypeId") REFERENCES "TriggerType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
