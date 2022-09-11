import { Literal, Record, Static, String, Union } from "runtypes"

const organization = Record({
  createdAt: String,
  domainName: String,
  employeeCount: Union(
    Literal("FROM_1_TO_10"),
    Literal("FROM_11_TO_50"),
    Literal("FROM_51_TO_200"),
    Literal("FROM_201_TO_1000"),
    Literal("FROM_1001_TO_5000"),
    Literal("FROM_5001_TO_20000"),
    Literal("FROM_20001_TO_100000"),
    Literal("FROM_100000_TO_MORE")
  ),
  id: String,
  linkedInId: String,
  locationTitle: String,
  sector: Union(
    Literal("ENERGY"),
    Literal("MATERIALS"),
    Literal("INDUSTRIALS"),
    Literal("CONSUMER_DISCRETIONARY"),
    Literal("CONSUMER_STAPLES"),
    Literal("HEALTH_CARE"),
    Literal("FINANCIALS"),
    Literal("INFORMATION_TECHNOLOGY"),
    Literal("TELECOMMUNICATION_SERVICES"),
    Literal("UTILITIES"),
    Literal("REAL_ESTATE"),
    Literal("OTHER")
  ),
  title: String,
  updatedAt: String,
})

type Organization = Static<typeof organization>

export default Organization
