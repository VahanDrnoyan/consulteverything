import { objectType, enumType, nonNull, booleanArg, stringArg, intArg, mutationType, nullable, extendType } from "nexus";
import { User, Account, Consultancy, Field, Role } from '../generated/nexus-prisma'
import { Prisma } from '@prisma/client'

export const FiledEnum = enumType({
    name: 'Field',
    members: [Field.members[0], Field.members[1], Field.members[2]],
    description: 'User Roles',
  })
  const ConsultancyType = objectType({
    name: Consultancy.$name,
    description: Consultancy.$description,
    definition(t) {
      t.field(Consultancy.id)
      t.field(Consultancy.allow_age_check)
      t.field(Consultancy.allow_email_check),
      t.field(Consultancy.allow_enable_video_by_requester)
      t.field(Consultancy.allow_expectations_check)
      t.field(Consultancy.allow_expertise_in_problem_field_check)
      t.field(Consultancy.allow_gender_check),
      t.field(Consultancy.allow_name_surneame)
      t.field(Consultancy.allow_ongoing_support_check)
      t.field(Consultancy.allow_prefession_check)
      t.field(Consultancy.allow_previous_consulancy_experience_check)
      t.field(Consultancy.allow_time_spent_issue_resolution_check)
      t.field(Consultancy.enable_video_by_provider)
    },
  });
  
export const ConsultancyResolver = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createConsultancy', {
        type: ConsultancyType,
        args: {
          title: nonNull(stringArg()),
          short_description: nonNull(stringArg()),
          long_dscription: nullable(stringArg()),
          max_time_minuets: nonNull(intArg()),
          max_attachment_count: nonNull(intArg()),
          enable_video_by_provider: nonNull(booleanArg()),
          allow_enable_video_by_requester: nonNull(booleanArg()),
          allow_name_surneame: nonNull(FiledEnum),
          allow_prefession_check: nonNull(FiledEnum),
          allow_age_check: nonNull(FiledEnum),
          allow_gender_check: nonNull(FiledEnum),
          allow_previous_consulancy_experience_check: nonNull(FiledEnum),
          allow_email_check: nonNull(FiledEnum),
          allow_ongoing_support_check: nonNull(FiledEnum),
          allow_expectations_check: nonNull(FiledEnum),
          allow_time_spent_issue_resolution_check: nonNull(FiledEnum),
          allow_expertise_in_problem_field_check: nonNull(FiledEnum),
        },
        resolve: async (_root, args, { prisma, user }) => {
          const consultancyParams : Prisma.ConsultancyCreateArgs = {
            data:{
              title: args.title,
              short_description: args.short_description,
              long_dscription: args.long_dscription,
              max_time_minuets:args.max_time_minuets,
              max_attachment_count: args.max_attachment_count,
              enable_video_by_provider: args.enable_video_by_provider,
              allow_enable_video_by_requester:args.allow_enable_video_by_requester,
              allow_name_surneame: args.allow_name_surneame,
              allow_prefession_check: args.allow_prefession_check,
              allow_age_check: args.allow_age_check,
              allow_gender_check: args.allow_gender_check,
              allow_previous_consulancy_experience_check: args.allow_previous_consulancy_experience_check,
              allow_email_check: args.allow_email_check,
              allow_ongoing_support_check:args.allow_ongoing_support_check,
              allow_expectations_check: args.allow_expectations_check,
              allow_time_spent_issue_resolution_check: args.allow_time_spent_issue_resolution_check,
              allow_expertise_in_problem_field_check:args.allow_expertise_in_problem_field_check,
              User: user
            },
            select: {
              title: true,
              short_description: true,
              long_dscription: true,
              max_time_minuets:true,
              max_attachment_count: true,
              enable_video_by_provider: true,
              allow_enable_video_by_requester:true,
              allow_name_surneame: true,
              allow_prefession_check: true,
              allow_age_check: true,
              allow_gender_check: true,
              allow_previous_consulancy_experience_check: true,
              allow_email_check: true,
              allow_ongoing_support_check:true,
              allow_expectations_check: true,
              allow_time_spent_issue_resolution_check: true,
              allow_expertise_in_problem_field_check:true,
            }
          }
          
          return prisma.consultancy.create ({
            ...consultancyParams
      })
        },
    
      })
    },
     
  }
)





