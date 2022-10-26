import { MutationCreateConsultancyArgs } from "../../generated/graphql-frontend";

export const ConsultancyArgsValidator = async (args:  Omit<MutationCreateConsultancyArgs, "User" | "id">)=> {

}