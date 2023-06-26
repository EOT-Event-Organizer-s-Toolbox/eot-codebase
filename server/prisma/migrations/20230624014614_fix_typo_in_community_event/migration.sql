/*
  Warnings:

  - You are about to drop the column `voluneerRequestsSent` on the `CommunityEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CommunityEvent" DROP COLUMN "voluneerRequestsSent",
ADD COLUMN     "volunteerRequestsSent" BOOLEAN NOT NULL DEFAULT false;
