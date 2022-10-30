import { objectType, enumType, nonNull, booleanArg, stringArg, intArg, mutationType, nullable, extendType, mutationField, list, extendInputType, idArg, arg, queryField, queryType } from "nexus";
import { User, Account, Consultancy, Field, Tag } from '../generated/nexus-prisma'
import { Prisma } from '@prisma/client'
import { number, string } from "prop-types";

import { ConsultancyArgsValidator } from "../Validators/BackendValidators/ConsultancyArgsValidator";
import { UserInputError, ValidationError } from "apollo-server-errors";
import { GraphQLYogaError } from "@graphql-yoga/node";

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
        t.field(Consultancy.isActive)
        t.field('created_at', { type: 'Time' })
        t.field(Consultancy.allow_previous_consultancy_experience_check)
        t.field(Consultancy.allow_time_spent_issue_resolution_check)
        t.field(Consultancy.enable_video_by_provider)
        t.field(Consultancy.User)
        t.field(Consultancy.tags)
    },
});
export const TagsType = objectType({
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
export const ConsultancyDataType = extendInputType({
    type: "ConsultancyDataType",
    definition(t) {
        t.field(Consultancy.title)
        t.field(Consultancy.short_description)
        t.field(Consultancy.long_description)
        t.field(Consultancy.max_attachment_count)
        t.field(Consultancy.max_time_minuets)
        t.field('allow_age_check', { type: nonNull(FieldEnum) })
        t.field('allow_email_check', { type: nonNull(FieldEnum) })
        t.field(Consultancy.allow_enable_video_by_requester)
        t.field('allow_expectations_check', { type: nonNull(FieldEnum) })
        t.field('allow_expertise_in_problem_field_check', { type: nonNull(FieldEnum) })
        t.field('allow_gender_check', { type: nonNull(FieldEnum) })
        t.field('allow_name_surname', { type: nonNull(FieldEnum) })
        t.field('allow_ongoing_support_check', { type: nonNull(FieldEnum) })
        t.field('allow_profession_check', { type: nonNull(FieldEnum) })
        t.field('allow_previous_consultancy_experience_check', { type: nonNull(FieldEnum) })
        t.field('allow_time_spent_issue_resolution_check', { type: nonNull(FieldEnum) })
        t.field(Consultancy.enable_video_by_provider)
        t.field(Consultancy.isActive)
        t.field('created_at', { type: 'Time' })
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
        await ConsultancyArgsValidator(args.data).catch((err) => {

            throw new GraphQLYogaError('User input error', err.errors)
        })
        const consultancyParams: Prisma.ConsultancyCreateArgs = {
            data: {
                ...args.data,

                User: {
                    connect: { id: user.id }
                },
                tags: {
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
export const GetMyConsultanciesResolver = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('getMyConsultancies', {
            type: ConsultancyType,
            args: {
                offset: nonNull(intArg()),
                limit: nonNull(intArg())
            },
            resolve: async (_root, args, { prisma, user }) => {

                const params: Prisma.ConsultancyFindManyArgs = {
                    orderBy: [
                        {
                          created_at: 'desc',
                        },
                    ],
                    skip: args.offset,
                    take: args.limit,
                    where: {
                        User: user,
                    }
                }
                return await prisma.consultancy.findMany({
                    ...params
                })
            },

        })
    },
})
export const TotalConsultancies = extendType({
    type: 'Query',
    definition(t) {
        t.field('totalConsultancies', {
            type: TotalConsultanciesObject,
            args: {},
            resolve: async (_root, args, { prisma, user }) => {

                const total = await prisma.consultancy.count()
                return {total}
            },

        })
    },
})
export const TotalConsultanciesObject = objectType({
    name: 'TotalConsultanciesObject',
    definition(t) {
      t.int('total')
   
    }});

    export const DeleteConsultancy = extendType({
        type: 'Mutation',
        definition(t) {
            t.field('deleteConsultancy', {
                type: ConsultancyType,
                args: {
                    id: nonNull(idArg()),
                },
                resolve: async (_root, args, { prisma, user }) => {
                    const selectConsultancy: Prisma.ConsultancyFindUniqueArgs = {
                        where: {
                            id: args.id,
                        }
                    }
                    const consultancy = await prisma.consultancy.findUnique(selectConsultancy)
                    if (!consultancy) {
                        throw new UserInputError('Could not find your consultancy.');
                      }
                      if(consultancy.userId !== user.id){
                        throw new UserInputError('No permission');
                      }
                      const consultancyDeleteArgs: Prisma.ConsultancyDeleteArgs = {
                        where: {
                            id: consultancy.id
                        }
                      }
                    await prisma.consultancy.delete({...consultancyDeleteArgs})
                    return consultancy;
                },
    
            })
        },
    })


