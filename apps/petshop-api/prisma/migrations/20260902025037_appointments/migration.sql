-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "petName" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);
