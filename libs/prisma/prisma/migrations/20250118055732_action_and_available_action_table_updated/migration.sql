-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "actionData" JSONB;

-- AlterTable
ALTER TABLE "AvailableAction" ADD COLUMN     "requiredData" JSONB;

-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "triggerCondition" JSONB;
