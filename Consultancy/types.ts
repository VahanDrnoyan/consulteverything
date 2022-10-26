import { objectType, enumType, nonNull, booleanArg, stringArg, intArg, mutationType, nullable, extendType, mutationField, list, extendInputType, idArg, arg } from "nexus";
import { User, Account, Consultancy, Field, Tag } from '../generated/nexus-prisma'
import { Prisma } from '@prisma/client'
import { string } from "prop-types";
import { ValidationError } from "yup";
import { ConsultancyArgsValidator } from "../Validators/BackendValidators/ConsultancyArgsValidator";

export const FieldEnum = enumType({
    name: Field.name,
    members: Field.members,
    description: 'Form fields types',
})
const ConsultancyType = objectType({
    name: Consultancy.$name,
    description: Consultancy.$description,
    definition(t) {
        t.field(Consultancy.title)
        t.field(Consultancy.short_description)
        t.field(Consultancy.long_description)
        t.field(Consultancy.max_attachment_count)
        t.field(Consultancy.max_time_minuets)
        t.field(Consultancy.id)
        t.field((Consultancy.allow_age_check))
        t.field(Consultancy.allow_email_check),
        t.field(Consultancy.allow_enable_video_by_requester)
        t.field(Consultancy.allow_expectations_check)
        t.field(Consultancy.allow_expertise_in_problem_field_check)
        t.field(Consultancy.allow_gender_check),
        t.field(Consultancy.allow_name_surname)
        t.field(Consultancy.allow_ongoing_support_check)
        t.field(Consultancy.allow_profession_check)
        t.field(Consultancy.allow_previous_consultancy_experience_check)
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
    type: "TagInputType",
    definition(t) {
        t.field(Tag.name)
    },
})
export const ConsultancyDataType= extendInputType({
    type: "ConsultancyDataType",
    definition(t) {
        t.field(Consultancy.title)
        t.field(Consultancy.short_description)
        t.field(Consultancy.long_description)
        t.field(Consultancy.max_attachment_count)
        t.field(Consultancy.max_time_minuets)
        t.field('allow_age_check', {type: nonNull(FieldEnum)})
        t.field('allow_email_check', {type: nonNull(FieldEnum)})
        t.field(Consultancy.allow_enable_video_by_requester)
        t.field('allow_expectations_check', {type: nonNull(FieldEnum)})
        t.field('allow_expertise_in_problem_field_check', {type:nonNull(FieldEnum)})
        t.field('allow_gender_check', {type:nonNull(FieldEnum)})
        t.field('allow_name_surname', {type: nonNull(FieldEnum)})
        t.field('allow_ongoing_support_check', {type: nonNull(FieldEnum)})
        t.field('allow_profession_check', {type: nonNull(FieldEnum)})
        t.field('allow_previous_consultancy_experience_check', {type:nonNull(FieldEnum)})
        t.field('allow_time_spent_issue_resolution_check',{type: nonNull(FieldEnum)})
        t.field(Consultancy.enable_video_by_provider)
        t.field('tags', {
            type: nonNull(list(nonNull('TagInputType')))
        })
    },
});


export const ConsultancyResolver = mutationField('createConsultancy', {
    type: ConsultancyType,
    args: {
        data: nonNull("ConsultancyDataType")
    },
    resolve: async (_root, args, { prisma, user }) => {
    
        await ConsultancyArgsValidator(args.data)
        const consultancyParams: Prisma.ConsultancyCreateArgs= {
            data: {
                ...args.data,

                User:{ 
                    connect: {id: user.id}
                },
                tags:{
                    createMany: {
                        data: args.data.tags
                        
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



