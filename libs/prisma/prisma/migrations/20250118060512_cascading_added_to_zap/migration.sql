-- DropForeignKey
ALTER TABLE "Zap" DROP CONSTRAINT "Zap_triggerSubTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Zap" DROP CONSTRAINT "Zap_triggerTypeId_fkey";

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_triggerTypeId_fkey" FOREIGN KEY ("triggerTypeId") REFERENCES "TriggerType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_triggerSubTypeId_fkey" FOREIGN KEY ("triggerSubTypeId") REFERENCES "TriggerSubType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
