import { Exact, Scalars } from "../../generated/graphql-frontend"
import { EndSchema } from "../AvailabilityEndValidator"
import { StartSchema } from "../AvailabilityStartValidator"

const Schema = EndSchema.concat(StartSchema)

 type CreateAvailabilityVariables = Exact<{
    start: Scalars['String'];
    end: Scalars['String'];
  }>;
export const AvailabilityArgsValidator = async (data: CreateAvailabilityVariables) => {
    await Schema.validate(data, {abortEarly: false}) 
}