-- CreateEnum
CREATE TYPE "JobExtent" AS ENUM ('CONTRACT', 'INTERSHIP', 'TEMPORARY', 'LONG_TERM');

-- CreateEnum
CREATE TYPE "JobTime" AS ENUM ('PART_TIME', 'FULL_TIME');

-- CreateEnum
CREATE TYPE "JobFormat" AS ENUM ('ON_SITE', 'HYBRID', 'REMOTE');

-- CreateEnum
CREATE TYPE "JobExperienceLevel" AS ENUM ('INTERNSHIP', 'ENTRY_LEVEL', 'JUNIOR', 'ASSOCIATE', 'MID_SENIOR', 'SENIOR', 'DIRECTOR', 'EXECUTIVE');

-- CreateEnum
CREATE TYPE "JobDurationUnit" AS ENUM ('HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "JobPayPeriod" AS ENUM ('HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "JobPayCurrency" AS ENUM ('EUR', 'GBP', 'USD');

-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('ENERGY', 'MATERIALS', 'INDUSTRIALS', 'CONSUMER_DISCRETIONARY', 'CONSUMER_STAPLES', 'HEALTH_CARE', 'FINANCIALS', 'INFORMATION_TECHNOLOGY', 'TELECOMMUNICATION_SERVICES', 'UTILITIES', 'REAL_ESTATE', 'OTHER');

-- CreateEnum
CREATE TYPE "EmployeeCount" AS ENUM ('FROM_1_TO_10', 'FROM_11_TO_50', 'FROM_51_TO_200', 'FROM_201_TO_1000', 'FROM_1001_TO_5000', 'FROM_5001_TO_20000', 'FROM_20001_TO_100000', 'FROM_100000_TO_MORE');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "supabaseAuthId" UUID NOT NULL,
    "email" VARCHAR NOT NULL,
    "instanceId" UUID,
    "aud" VARCHAR,
    "role" VARCHAR,
    "encryptedPassword" VARCHAR,
    "emailConfirmedAt" TIMESTAMPTZ(6),
    "invitedAt" TIMESTAMPTZ(6),
    "confirmationToken" VARCHAR,
    "confirmationSentAt" TIMESTAMPTZ(6),
    "recoveryToken" VARCHAR,
    "recoverySentAt" TIMESTAMPTZ(6),
    "emailChangeTokenNew" VARCHAR,
    "emailChange" VARCHAR,
    "emailChangeSentAt" TIMESTAMPTZ(6),
    "lastSignInAt" TIMESTAMPTZ(6),
    "rawAppMetaData" JSONB,
    "rawUserMetaData" JSONB,
    "isSuperAdmin" BOOLEAN,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "phone" VARCHAR,
    "phoneConfirmedAt" TIMESTAMPTZ(6),
    "phoneChange" VARCHAR,
    "phoneChangeToken" VARCHAR,
    "phoneChangeSentAt" TIMESTAMPTZ(6),
    "confirmedAt" TIMESTAMPTZ(6),
    "emailChangeTokenCurrent" VARCHAR,
    "emailChangeConfirmStatus" SMALLINT,
    "bannedUntil" TIMESTAMPTZ(6),
    "reauthenticationToken" VARCHAR,
    "reauthenticationSentAt" TIMESTAMPTZ(6),
    "firstName" VARCHAR,
    "lastName" VARCHAR,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" VARCHAR NOT NULL,
    "plannedHireCount" SMALLINT DEFAULT 1,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT NOT NULL DEFAULT '',
    "locationTitle" TEXT NOT NULL,
    "durationAmount" INTEGER,
    "durationUnit" "JobDurationUnit",
    "payAmount" INTEGER,
    "payCurrency" "JobPayCurrency",
    "payPeriod" "JobPayPeriod",
    "extent" "JobExtent" NOT NULL DEFAULT 'LONG_TERM',
    "time" "JobTime" NOT NULL DEFAULT 'FULL_TIME',
    "format" "JobFormat" NOT NULL DEFAULT 'ON_SITE',
    "experienceLevel" "JobExperienceLevel" NOT NULL,
    "organizationId" UUID NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    "jobId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    "title" VARCHAR NOT NULL,
    "sector" "Sector" NOT NULL,
    "domainName" VARCHAR,
    "employeeCount" "EmployeeCount" NOT NULL,
    "locationTitle" TEXT NOT NULL,
    "linkedInId" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_supabaseAuthId_key" ON "User"("supabaseAuthId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_domainName_key" ON "Organization"("domainName");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
