import { objectType, enumType, nonNull, booleanArg, stringArg, intArg, mutationType, nullable, extendType, mutationField, list, extendInputType, idArg } from "nexus";
import { User, Account, Consultancy, Field, Tag } from '../generated/nexus-prisma'
import { Prisma } from '@prisma/client'
import { string } from "prop-types";

export const FiledEnum = enumType({
    name: 'Field',
    members: [Field.members[0], Field.members[1], Field.members[2]],
    description: 'User Roles',
})
const ConsultancyType = objectType({
    name: Consultancy.$name,
    description: Consultancy.$description,
    definition(t) {
        t.field(Consultancy.title)
        t.field(Consultancy.short_description)
        t.field(Consultancy.long_dscription)
        t.field(Consultancy.max_attachment_count)
        t.field(Consultancy.max_time_minuets)
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
        t.field(Consultancy.User)
        t.field(Consultancy.tags)
    },
});
export const TagsType= objectType({
    name: Tag.$name,
    description: Tag.$description,
    definition(t) {
       t.field(Tag.name)
    },
});
export const TagInputType = extendInputType({
    type: 'TagInputType',
    definition(t) {
        t.field(Tag.name)
    },
})
export const ConsultanciyInput = {
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
        tags: nonNull(list(nonNull('TagInputType'))),
}
export const ConsultancyResolver = mutationField('createConsultancy', {
    type: ConsultancyType,
    args: {
        ...ConsultanciyInput
    },
    resolve: async (_root, args, { prisma, user }) => {
    

        const consultancyParams: Prisma.ConsultancyCreateArgs= {
            data: {
                ...args,

                User:{ 
                    connect: {id: user.id}
                },
                tags:{
                    createMany: {
                        data: args.tags
                        
                    }
                },
                
            },
            select: {
                id: true,
                title: true,
            }
        }

        return prisma.consultancy.create({
            ...consultancyParams
        })
    },

});





