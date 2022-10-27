import { ConsultancyDataType, Exact, InputMaybe, Scalars, TagInputType } from "../../generated/graphql-frontend";
import { Consultancy } from "../../generated/nexus-prisma";
import { CheckboxSchema } from "../CheckboxValidator";
import { LongDescriptionSchema } from "../ConsultancyLongDescriptionValidator";
import { ShortDescriptionSchema } from "../ConsultancyShortDescriptionValidator";
import { TagSchema } from "../ConsultancyTagValidator";
import { TitleSchema } from "../ConsultancyTitleValidator";
import { MaxAttachmentCountSchema } from "../MaxAttachmentCountValidator";
import { MaxTimeInMinutesSchema } from "../MaxTimeInMinutesValidator";
const Schema = TitleSchema.concat(ShortDescriptionSchema).concat(LongDescriptionSchema).concat(MaxAttachmentCountSchema).concat(TagSchema)
.concat(MaxTimeInMinutesSchema)
 type CreateConsultancyMutationVariables = Exact<{
    title: Scalars['String'];
    short_description: Scalars['String'];
    long_description?: InputMaybe<Scalars['String']>;
    max_time_minuets: Scalars['Int'];
    max_attachment_count: Scalars['Int'];
   tags: Array<TagInputType> | TagInputType;
  }>;
export const ConsultancyArgsValidator = async (data: CreateConsultancyMutationVariables) => {
    await Schema.validate(data, {abortEarly: false}) 
}