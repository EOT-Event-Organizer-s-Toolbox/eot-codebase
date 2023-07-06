-- DropForeignKey
ALTER TABLE "CommunityEvent" DROP CONSTRAINT "CommunityEvent_organizerId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityEvent" DROP CONSTRAINT "CommunityEvent_typeId_fkey";

-- AlterTable
ALTER TABLE "CommunityEvent" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "organizerId" DROP NOT NULL,
ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "volunteersNeeded" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CommunityEvent" ADD CONSTRAINT "CommunityEvent_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityEvent" ADD CONSTRAINT "CommunityEvent_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
