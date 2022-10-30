/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { MainContext } from "./graphql/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    Time<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Time";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    Time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ConsultancyDataType: { // input type
    allow_age_check: NexusGenEnums['Field']; // Field!
    allow_email_check: NexusGenEnums['Field']; // Field!
    allow_enable_video_by_requester: boolean; // Boolean!
    allow_expectations_check: NexusGenEnums['Field']; // Field!
    allow_expertise_in_problem_field_check: NexusGenEnums['Field']; // Field!
    allow_gender_check: NexusGenEnums['Field']; // Field!
    allow_name_surname: NexusGenEnums['Field']; // Field!
    allow_ongoing_support_check: NexusGenEnums['Field']; // Field!
    allow_previous_consultancy_experience_check: NexusGenEnums['Field']; // Field!
    allow_profession_check: NexusGenEnums['Field']; // Field!
    allow_time_spent_issue_resolution_check: NexusGenEnums['Field']; // Field!
    created_at?: NexusGenScalars['Time'] | null; // Time
    enable_video_by_provider: boolean; // Boolean!
    isActive: boolean; // Boolean!
    long_description?: string | null; // String
    max_attachment_count: number; // Int!
    max_time_minuets: number; // Int!
    short_description: string; // String!
    tags: NexusGenInputs['TagInputType'][]; // [TagInputType!]!
    title: string; // String!
  }
  TagInputType: { // input type
    name: string; // String!
  }
}

export interface NexusGenEnums {
  Field: "EXCLUDE" | "INCLUDE" | "REQUIRED"
  Role: "ADMIN" | "MODERATOR" | "SUPERADMIN" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Time: any
}

export interface NexusGenObjects {
  Account: { // root type
    id: string; // ID!
    session_state?: string | null; // String
  }
  Consultancy: { // root type
    allow_age_check: NexusGenEnums['Field']; // Field!
    allow_email_check: NexusGenEnums['Field']; // Field!
    allow_enable_video_by_requester: boolean; // Boolean!
    allow_expectations_check: NexusGenEnums['Field']; // Field!
    allow_expertise_in_problem_field_check: NexusGenEnums['Field']; // Field!
    allow_gender_check: NexusGenEnums['Field']; // Field!
    allow_name_surname: NexusGenEnums['Field']; // Field!
    allow_ongoing_support_check: NexusGenEnums['Field']; // Field!
    allow_previous_consultancy_experience_check: NexusGenEnums['Field']; // Field!
    allow_profession_check: NexusGenEnums['Field']; // Field!
    allow_time_spent_issue_resolution_check: NexusGenEnums['Field']; // Field!
    created_at?: NexusGenScalars['Time'] | null; // Time
    enable_video_by_provider: boolean; // Boolean!
    id: string; // ID!
    isActive: boolean; // Boolean!
    long_description?: string | null; // String
    max_attachment_count: number; // Int!
    max_time_minuets: number; // Int!
    short_description: string; // String!
    title: string; // String!
  }
  Event: { // root type
    id: string; // ID!
  }
  Mutation: {};
  Query: {};
  Tag: { // root type
    name: string; // String!
  }
  TotalConsultanciesObject: { // root type
    total?: number | null; // Int
  }
  User: { // root type
    email?: string | null; // String
    id: string; // ID!
    role: NexusGenEnums['Role']; // Role!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Account: { // field return type
    id: string; // ID!
    session_state: string | null; // String
    user: NexusGenRootTypes['User']; // User!
  }
  Consultancy: { // field return type
    User: NexusGenRootTypes['User']; // User!
    allow_age_check: NexusGenEnums['Field']; // Field!
    allow_email_check: NexusGenEnums['Field']; // Field!
    allow_enable_video_by_requester: boolean; // Boolean!
    allow_expectations_check: NexusGenEnums['Field']; // Field!
    allow_expertise_in_problem_field_check: NexusGenEnums['Field']; // Field!
    allow_gender_check: NexusGenEnums['Field']; // Field!
    allow_name_surname: NexusGenEnums['Field']; // Field!
    allow_ongoing_support_check: NexusGenEnums['Field']; // Field!
    allow_previous_consultancy_experience_check: NexusGenEnums['Field']; // Field!
    allow_profession_check: NexusGenEnums['Field']; // Field!
    allow_time_spent_issue_resolution_check: NexusGenEnums['Field']; // Field!
    created_at: NexusGenScalars['Time'] | null; // Time
    enable_video_by_provider: boolean; // Boolean!
    id: string; // ID!
    isActive: boolean; // Boolean!
    long_description: string | null; // String
    max_attachment_count: number; // Int!
    max_time_minuets: number; // Int!
    short_description: string; // String!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
  }
  Event: { // field return type
    id: string; // ID!
  }
  Mutation: { // field return type
    createConsultancy: NexusGenRootTypes['Consultancy'] | null; // Consultancy
    createUser: NexusGenRootTypes['User']; // User!
    deleteConsultancy: NexusGenRootTypes['Consultancy'] | null; // Consultancy
  }
  Query: { // field return type
    getMyConsultancies: Array<NexusGenRootTypes['Consultancy'] | null> | null; // [Consultancy]
    totalConsultancies: NexusGenRootTypes['TotalConsultanciesObject'] | null; // TotalConsultanciesObject
  }
  Tag: { // field return type
    name: string; // String!
  }
  TotalConsultanciesObject: { // field return type
    total: number | null; // Int
  }
  User: { // field return type
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    email: string | null; // String
    id: string; // ID!
    role: NexusGenEnums['Role']; // Role!
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    id: 'ID'
    session_state: 'String'
    user: 'User'
  }
  Consultancy: { // field return type name
    User: 'User'
    allow_age_check: 'Field'
    allow_email_check: 'Field'
    allow_enable_video_by_requester: 'Boolean'
    allow_expectations_check: 'Field'
    allow_expertise_in_problem_field_check: 'Field'
    allow_gender_check: 'Field'
    allow_name_surname: 'Field'
    allow_ongoing_support_check: 'Field'
    allow_previous_consultancy_experience_check: 'Field'
    allow_profession_check: 'Field'
    allow_time_spent_issue_resolution_check: 'Field'
    created_at: 'Time'
    enable_video_by_provider: 'Boolean'
    id: 'ID'
    isActive: 'Boolean'
    long_description: 'String'
    max_attachment_count: 'Int'
    max_time_minuets: 'Int'
    short_description: 'String'
    tags: 'Tag'
    title: 'String'
  }
  Event: { // field return type name
    id: 'ID'
  }
  Mutation: { // field return type name
    createConsultancy: 'Consultancy'
    createUser: 'User'
    deleteConsultancy: 'Consultancy'
  }
  Query: { // field return type name
    getMyConsultancies: 'Consultancy'
    totalConsultancies: 'TotalConsultanciesObject'
  }
  Tag: { // field return type name
    name: 'String'
  }
  TotalConsultanciesObject: { // field return type name
    total: 'Int'
  }
  User: { // field return type name
    accounts: 'Account'
    email: 'String'
    id: 'ID'
    role: 'Role'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createConsultancy: { // args
      data: NexusGenInputs['ConsultancyDataType']; // ConsultancyDataType!
    }
    createUser: { // args
      email: string; // String!
    }
    deleteConsultancy: { // args
      id: string; // ID!
    }
  }
  Query: {
    getMyConsultancies: { // args
      limit: number; // Int!
      offset: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: MainContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}