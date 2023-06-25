-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "event_registration_completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EventType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityEvent" (
    "id" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "idea_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "organizer_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "in_person_event" BOOLEAN NOT NULL DEFAULT false,
    "online_event" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "venue" TEXT,
    "venue_contact_name" TEXT,
    "venue_contact_phone" TEXT,
    "venue_contact_email" TEXT,
    "announcement_posted" BOOLEAN NOT NULL DEFAULT false,
    "sign_up_form_sent" BOOLEAN NOT NULL DEFAULT false,
    "volunteers_needed" INTEGER NOT NULL,
    "voluneer_requests_sent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CommunityEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CommunityEvent" ADD CONSTRAINT "CommunityEvent_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityEvent" ADD CONSTRAINT "CommunityEvent_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
