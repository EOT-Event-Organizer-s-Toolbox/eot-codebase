/*
  Warnings:

  - You are about to drop the column `announcement_posted` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `idea_confirmed` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `in_person_event` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `online_event` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `organizer_id` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `sign_up_form_sent` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `venue_contact_email` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `venue_contact_name` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `venue_contact_phone` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `voluneer_requests_sent` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `volunteers_needed` on the `CommunityEvent` table. All the data in the column will be lost.
  - You are about to drop the column `event_registration_completed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `organizerId` to the `CommunityEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `CommunityEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volunteersNeeded` to the `CommunityEvent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CommunityEvent" DROP CONSTRAINT "CommunityEvent_organizer_id_fkey";

-- DropForeignKey
ALTER TABLE "CommunityEvent" DROP CONSTRAINT "CommunityEvent_type_id_fkey";

-- AlterTable
ALTER TABLE "CommunityEvent" DROP COLUMN "announcement_posted",
DROP COLUMN "idea_confirmed",
DROP COLUMN "in_person_event",
DROP COLUMN "online_event",
DROP COLUMN "organizer_id",
DROP COLUMN "sign_up_form_sent",
DROP COLUMN "type_id",
DROP COLUMN "venue_contact_email",
DROP COLUMN "venue_contact_name",
DROP COLUMN "venue_contact_phone",
DROP COLUMN "voluneer_requests_sent",
DROP COLUMN "volunteers_needed",
ADD COLUMN     "announcementPosted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ideaConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "inPersonEvent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "onlineEvent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "organizerId" TEXT NOT NULL,
ADD COLUMN     "signUpFormSent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "typeId" TEXT NOT NULL,
ADD COLUMN     "venueContactEmail" TEXT,
ADD COLUMN     "venueContactName" TEXT,
ADD COLUMN     "venueContactPhone" TEXT,
ADD COLUMN     "voluneerRequestsSent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "volunteersNeeded" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "event_registration_completed",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "eventRegistrationCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;

-- AddForeignKey
ALTER TABLE "CommunityEvent" ADD CONSTRAINT "CommunityEvent_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityEvent" ADD CONSTRAINT "CommunityEvent_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
