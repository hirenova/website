import { OptionalExceptFor } from "generics"
import {
  Boolean,
  Literal,
  Number,
  Record,
  Static,
  String,
  Union,
} from "runtypes"

const job = Record({
  active: Boolean,
  createdAt: String,
  description: String,
  durationAmount: Number,
  durationUnit: Union(
    Literal("DAY"),
    Literal("WEEK"),
    Literal("MONTH"),
    Literal("YEAR")
  ),
  experienceLevel: Union(
    Literal("ENTRY_LEVEL"),
    Literal("JUNIOR"),
    Literal("ASSOCIATE"),
    Literal("MID_SENIOR"),
    Literal("SENIOR"),
    Literal("DIRECTOR"),
    Literal("EXECUTIVE")
  ),
  extent: Union(
    Literal("CONTRACT"),
    Literal("INTERNSHIP"),
    Literal("TEMPORARY"),
    Literal("LONG_TERM")
  ),
  format: Union(Literal("ON_SITE"), Literal("HYBRID"), Literal("REMOTE")),
  id: String,
  locationTitle: String,
  organizationId: String,
  payAmount: Number,
  payCurrency: Union(Literal("EUR"), Literal("GBP"), Literal("USD")),
  payPeriod: Union(
    Literal("HOUR"),
    Literal("DAY"),
    Literal("WEEK"),
    Literal("MONTH"),
    Literal("YEAR")
  ),
  plannedHireCount: Number,
  time: Union(Literal("FULL_TIME"), Literal("PART_TIME")),
  title: String,
  updatedAt: String,
})

export type Job = Static<typeof job>

export type JobRead = OptionalExceptFor<
  Job,
  | "active"
  | "createdAt"
  | "extent"
  | "format"
  | "id"
  | "locationTitle"
  | "organizationId"
  | "plannedHireCount"
  | "time"
  | "title"
  | "updatedAt"
>

export type JobWrite = OptionalExceptFor<
  Job,
  "organizationId" | "locationTitle" | "title"
>
