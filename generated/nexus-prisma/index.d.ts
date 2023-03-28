import * as NexusCore from 'nexus/dist/core'

//
//
// TYPES
// TYPES
// TYPES
// TYPES
//
//

// Models

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Account`.
  *
  * this is acccount
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Account } from 'nexus-prisma'
  *
  * objectType({
  *   name: Account.$name
  *   description: Account.$description
  *   definition(t) {
  *     t.field(Account.id)
  *   }
  * })
  */
export interface Account {
  $name: 'Account'
  $description: string
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.type`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   type  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.type)
    *   }
    * })
    */
  type: {
    /**
     * The name of this field.
     */
    name: 'type'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.provider`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   provider  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.provider)
    *   }
    * })
    */
  provider: {
    /**
     * The name of this field.
     */
    name: 'provider'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'provider'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.providerAccountId`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   providerAccountId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.providerAccountId)
    *   }
    * })
    */
  providerAccountId: {
    /**
     * The name of this field.
     */
    name: 'providerAccountId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'providerAccountId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.refresh_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   refresh_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.refresh_token)
    *   }
    * })
    */
  refresh_token: {
    /**
     * The name of this field.
     */
    name: 'refresh_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'refresh_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.access_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   access_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.access_token)
    *   }
    * })
    */
  access_token: {
    /**
     * The name of this field.
     */
    name: 'access_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'access_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.expires_at`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   expires_at  Int?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.expires_at)
    *   }
    * })
    */
  expires_at: {
    /**
     * The name of this field.
     */
    name: 'expires_at'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'expires_at'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.token_type`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   token_type  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.token_type)
    *   }
    * })
    */
  token_type: {
    /**
     * The name of this field.
     */
    name: 'token_type'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'token_type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.scope`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   scope  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.scope)
    *   }
    * })
    */
  scope: {
    /**
     * The name of this field.
     */
    name: 'scope'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'scope'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.id_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   id_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.id_token)
    *   }
    * })
    */
  id_token: {
    /**
     * The name of this field.
     */
    name: 'id_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'id_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.session_state`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   session_state  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.session_state)
    *   }
    * })
    */
  session_state: {
    /**
     * The name of this field.
     */
    name: 'session_state'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'session_state'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'user'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Session`.
  *
  * this is Session
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Session } from 'nexus-prisma'
  *
  * objectType({
  *   name: Session.$name
  *   description: Session.$description
  *   definition(t) {
  *     t.field(Session.id)
  *   }
  * })
  */
export interface Session {
  $name: 'Session'
  $description: string
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.sessionToken`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   sessionToken  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.sessionToken)
    *   }
    * })
    */
  sessionToken: {
    /**
     * The name of this field.
     */
    name: 'sessionToken'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'sessionToken'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.expires`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   expires  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.expires)
    *   }
    * })
    */
  expires: {
    /**
     * The name of this field.
     */
    name: 'expires'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'expires'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'user'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `User`.
  *
  * this is User
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { User } from 'nexus-prisma'
  *
  * objectType({
  *   name: User.$name
  *   description: User.$description
  *   definition(t) {
  *     t.field(User.id)
  *   }
  * })
  */
export interface User {
  $name: 'User'
  $description: string
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.id`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.name`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.email`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.emailVerified`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   emailVerified  DateTime?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.emailVerified)
    *   }
    * })
    */
  emailVerified: {
    /**
     * The name of this field.
     */
    name: 'emailVerified'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'emailVerified'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.image`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   image  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.image)
    *   }
    * })
    */
  image: {
    /**
     * The name of this field.
     */
    name: 'image'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'image'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.role`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   role  Role
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.role)
    *   }
    * })
    */
  role: {
    /**
     * The name of this field.
     */
    name: 'role'
  
    /**
     * The type of this field.
     */
    type: 'Role' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Role'>
    : 'Warning/Error: The type \'Role\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Role\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'role'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.accounts`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   accounts  Account
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.accounts)
    *   }
    * })
    */
  accounts: {
    /**
     * The name of this field.
     */
    name: 'accounts'
  
    /**
     * The type of this field.
     */
    type: 'Account' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Account'> | NexusCore.NexusNonNullDef<'Account'>)
    : 'Warning/Error: The type \'Account\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Account\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'accounts'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.sessions`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   sessions  Session
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.sessions)
    *   }
    * })
    */
  sessions: {
    /**
     * The name of this field.
     */
    name: 'sessions'
  
    /**
     * The type of this field.
     */
    type: 'Session' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Session'> | NexusCore.NexusNonNullDef<'Session'>)
    : 'Warning/Error: The type \'Session\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Session\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'sessions'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.consultancies`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   consultancies  Consultancy
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.consultancies)
    *   }
    * })
    */
  consultancies: {
    /**
     * The name of this field.
     */
    name: 'consultancies'
  
    /**
     * The type of this field.
     */
    type: 'Consultancy' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Consultancy'> | NexusCore.NexusNonNullDef<'Consultancy'>)
    : 'Warning/Error: The type \'Consultancy\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Consultancy\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'consultancies'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.availability`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   availability  Availability
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.availability)
    *   }
    * })
    */
  availability: {
    /**
     * The name of this field.
     */
    name: 'availability'
  
    /**
     * The type of this field.
     */
    type: 'Availability' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Availability'> | NexusCore.NexusNonNullDef<'Availability'>)
    : 'Warning/Error: The type \'Availability\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Availability\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'availability'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `VerificationToken`.
  *
  * Lorem ipsum dolor sit amet.
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { VerificationToken } from 'nexus-prisma'
  *
  * objectType({
  *   name: VerificationToken.$name
  *   description: VerificationToken.$description
  *   definition(t) {
  *     t.field(VerificationToken.id)
  *   }
  * })
  */
export interface VerificationToken {
  $name: 'VerificationToken'
  $description: string
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VerificationToken.identifier`.
    *
    * ### ️⚠️ You have not writen documentation for model VerificationToken
    *
    * Replace this default advisory JSDoc with your own documentation about model VerificationToken
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VerificationToken {
    *   /// Lorem ipsum dolor sit amet.
    *   identifier  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VerificationToken } from 'nexus-prisma'
    *
    * objectType({
    *   name: VerificationToken.$name
    *   description: VerificationToken.$description
    *   definition(t) {
    *     t.field(VerificationToken.identifier)
    *   }
    * })
    */
  identifier: {
    /**
     * The name of this field.
     */
    name: 'identifier'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VerificationToken', 'identifier'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VerificationToken.token`.
    *
    * ### ️⚠️ You have not writen documentation for model VerificationToken
    *
    * Replace this default advisory JSDoc with your own documentation about model VerificationToken
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VerificationToken {
    *   /// Lorem ipsum dolor sit amet.
    *   token  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VerificationToken } from 'nexus-prisma'
    *
    * objectType({
    *   name: VerificationToken.$name
    *   description: VerificationToken.$description
    *   definition(t) {
    *     t.field(VerificationToken.token)
    *   }
    * })
    */
  token: {
    /**
     * The name of this field.
     */
    name: 'token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VerificationToken', 'token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VerificationToken.expires`.
    *
    * ### ️⚠️ You have not writen documentation for model VerificationToken
    *
    * Replace this default advisory JSDoc with your own documentation about model VerificationToken
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VerificationToken {
    *   /// Lorem ipsum dolor sit amet.
    *   expires  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VerificationToken } from 'nexus-prisma'
    *
    * objectType({
    *   name: VerificationToken.$name
    *   description: VerificationToken.$description
    *   definition(t) {
    *     t.field(VerificationToken.expires)
    *   }
    * })
    */
  expires: {
    /**
     * The name of this field.
     */
    name: 'expires'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VerificationToken', 'expires'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Consultancy`.
  *
  * ### ️⚠️ You have not writen documentation for model Consultancy
  *
  * Replace this default advisory JSDoc with your own documentation about model Consultancy
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Consultancy {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Consultancy } from 'nexus-prisma'
  *
  * objectType({
  *   name: Consultancy.$name
  *   description: Consultancy.$description
  *   definition(t) {
  *     t.field(Consultancy.id)
  *   }
  * })
  */
export interface Consultancy {
  $name: 'Consultancy'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.title`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.short_description`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   short_description  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.short_description)
    *   }
    * })
    */
  short_description: {
    /**
     * The name of this field.
     */
    name: 'short_description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'short_description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.long_description`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   long_description  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.long_description)
    *   }
    * })
    */
  long_description: {
    /**
     * The name of this field.
     */
    name: 'long_description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'long_description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.max_time_minuets`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   max_time_minuets  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.max_time_minuets)
    *   }
    * })
    */
  max_time_minuets: {
    /**
     * The name of this field.
     */
    name: 'max_time_minuets'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'max_time_minuets'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.max_attachment_count`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   max_attachment_count  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.max_attachment_count)
    *   }
    * })
    */
  max_attachment_count: {
    /**
     * The name of this field.
     */
    name: 'max_attachment_count'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'max_attachment_count'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.enable_video_by_provider`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   enable_video_by_provider  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.enable_video_by_provider)
    *   }
    * })
    */
  enable_video_by_provider: {
    /**
     * The name of this field.
     */
    name: 'enable_video_by_provider'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'enable_video_by_provider'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_enable_video_by_requester`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_enable_video_by_requester  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_enable_video_by_requester)
    *   }
    * })
    */
  allow_enable_video_by_requester: {
    /**
     * The name of this field.
     */
    name: 'allow_enable_video_by_requester'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_enable_video_by_requester'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_name_surname`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_name_surname  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_name_surname)
    *   }
    * })
    */
  allow_name_surname: {
    /**
     * The name of this field.
     */
    name: 'allow_name_surname'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_name_surname'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_profession_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_profession_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_profession_check)
    *   }
    * })
    */
  allow_profession_check: {
    /**
     * The name of this field.
     */
    name: 'allow_profession_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_profession_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_age_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_age_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_age_check)
    *   }
    * })
    */
  allow_age_check: {
    /**
     * The name of this field.
     */
    name: 'allow_age_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_age_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_gender_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_gender_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_gender_check)
    *   }
    * })
    */
  allow_gender_check: {
    /**
     * The name of this field.
     */
    name: 'allow_gender_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_gender_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_previous_consultancy_experience_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_previous_consultancy_experience_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_previous_consultancy_experience_check)
    *   }
    * })
    */
  allow_previous_consultancy_experience_check: {
    /**
     * The name of this field.
     */
    name: 'allow_previous_consultancy_experience_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_previous_consultancy_experience_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_email_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_email_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_email_check)
    *   }
    * })
    */
  allow_email_check: {
    /**
     * The name of this field.
     */
    name: 'allow_email_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_email_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_ongoing_support_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_ongoing_support_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_ongoing_support_check)
    *   }
    * })
    */
  allow_ongoing_support_check: {
    /**
     * The name of this field.
     */
    name: 'allow_ongoing_support_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_ongoing_support_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_expectations_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_expectations_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_expectations_check)
    *   }
    * })
    */
  allow_expectations_check: {
    /**
     * The name of this field.
     */
    name: 'allow_expectations_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_expectations_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_time_spent_issue_resolution_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_time_spent_issue_resolution_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_time_spent_issue_resolution_check)
    *   }
    * })
    */
  allow_time_spent_issue_resolution_check: {
    /**
     * The name of this field.
     */
    name: 'allow_time_spent_issue_resolution_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_time_spent_issue_resolution_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.allow_expertise_in_problem_field_check`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   allow_expertise_in_problem_field_check  Field
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.allow_expertise_in_problem_field_check)
    *   }
    * })
    */
  allow_expertise_in_problem_field_check: {
    /**
     * The name of this field.
     */
    name: 'allow_expertise_in_problem_field_check'
  
    /**
     * The type of this field.
     */
    type: 'Field' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Field'>
    : 'Warning/Error: The type \'Field\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Field\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'allow_expertise_in_problem_field_check'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.created_at`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   created_at  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.created_at)
    *   }
    * })
    */
  created_at: {
    /**
     * The name of this field.
     */
    name: 'created_at'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'created_at'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.isActive`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   isActive  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.isActive)
    *   }
    * })
    */
  isActive: {
    /**
     * The name of this field.
     */
    name: 'isActive'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'isActive'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.tags`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   tags  Tag
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.tags)
    *   }
    * })
    */
  tags: {
    /**
     * The name of this field.
     */
    name: 'tags'
  
    /**
     * The type of this field.
     */
    type: 'Tag' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Tag'> | NexusCore.NexusNonNullDef<'Tag'>)
    : 'Warning/Error: The type \'Tag\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Tag\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'tags'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.User`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   User  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.User)
    *   }
    * })
    */
  User: {
    /**
     * The name of this field.
     */
    name: 'User'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'User'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Consultancy.last_requested_at`.
    *
    * ### ️⚠️ You have not writen documentation for model Consultancy
    *
    * Replace this default advisory JSDoc with your own documentation about model Consultancy
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Consultancy {
    *   /// Lorem ipsum dolor sit amet.
    *   last_requested_at  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Consultancy } from 'nexus-prisma'
    *
    * objectType({
    *   name: Consultancy.$name
    *   description: Consultancy.$description
    *   definition(t) {
    *     t.field(Consultancy.last_requested_at)
    *   }
    * })
    */
  last_requested_at: {
    /**
     * The name of this field.
     */
    name: 'last_requested_at'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Consultancy', 'last_requested_at'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Availability`.
  *
  * ### ️⚠️ You have not writen documentation for model Availability
  *
  * Replace this default advisory JSDoc with your own documentation about model Availability
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Availability {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Availability } from 'nexus-prisma'
  *
  * objectType({
  *   name: Availability.$name
  *   description: Availability.$description
  *   definition(t) {
  *     t.field(Availability.id)
  *   }
  * })
  */
export interface Availability {
  $name: 'Availability'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Availability.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Availability
    *
    * Replace this default advisory JSDoc with your own documentation about model Availability
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Availability {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Availability } from 'nexus-prisma'
    *
    * objectType({
    *   name: Availability.$name
    *   description: Availability.$description
    *   definition(t) {
    *     t.field(Availability.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Availability', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Availability.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Availability
    *
    * Replace this default advisory JSDoc with your own documentation about model Availability
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Availability {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Availability } from 'nexus-prisma'
    *
    * objectType({
    *   name: Availability.$name
    *   description: Availability.$description
    *   definition(t) {
    *     t.field(Availability.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Availability', 'userId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Availability.User`.
    *
    * ### ️⚠️ You have not writen documentation for model Availability
    *
    * Replace this default advisory JSDoc with your own documentation about model Availability
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Availability {
    *   /// Lorem ipsum dolor sit amet.
    *   User  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Availability } from 'nexus-prisma'
    *
    * objectType({
    *   name: Availability.$name
    *   description: Availability.$description
    *   definition(t) {
    *     t.field(Availability.User)
    *   }
    * })
    */
  User: {
    /**
     * The name of this field.
     */
    name: 'User'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Availability', 'User'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Availability.start_data`.
    *
    * ### ️⚠️ You have not writen documentation for model Availability
    *
    * Replace this default advisory JSDoc with your own documentation about model Availability
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Availability {
    *   /// Lorem ipsum dolor sit amet.
    *   start_data  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Availability } from 'nexus-prisma'
    *
    * objectType({
    *   name: Availability.$name
    *   description: Availability.$description
    *   definition(t) {
    *     t.field(Availability.start_data)
    *   }
    * })
    */
  start_data: {
    /**
     * The name of this field.
     */
    name: 'start_data'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Availability', 'start_data'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Availability.is_reserved`.
    *
    * ### ️⚠️ You have not writen documentation for model Availability
    *
    * Replace this default advisory JSDoc with your own documentation about model Availability
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Availability {
    *   /// Lorem ipsum dolor sit amet.
    *   is_reserved  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Availability } from 'nexus-prisma'
    *
    * objectType({
    *   name: Availability.$name
    *   description: Availability.$description
    *   definition(t) {
    *     t.field(Availability.is_reserved)
    *   }
    * })
    */
  is_reserved: {
    /**
     * The name of this field.
     */
    name: 'is_reserved'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Availability', 'is_reserved'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Tag`.
  *
  * Tag
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Tag } from 'nexus-prisma'
  *
  * objectType({
  *   name: Tag.$name
  *   description: Tag.$description
  *   definition(t) {
  *     t.field(Tag.id)
  *   }
  * })
  */
export interface Tag {
  $name: 'Tag'
  $description: string
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Tag.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Tag
    *
    * Replace this default advisory JSDoc with your own documentation about model Tag
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Tag {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Tag } from 'nexus-prisma'
    *
    * objectType({
    *   name: Tag.$name
    *   description: Tag.$description
    *   definition(t) {
    *     t.field(Tag.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Tag', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Tag.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Tag
    *
    * Replace this default advisory JSDoc with your own documentation about model Tag
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Tag {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Tag } from 'nexus-prisma'
    *
    * objectType({
    *   name: Tag.$name
    *   description: Tag.$description
    *   definition(t) {
    *     t.field(Tag.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Tag', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Tag.consultancy`.
    *
    * ### ️⚠️ You have not writen documentation for model Tag
    *
    * Replace this default advisory JSDoc with your own documentation about model Tag
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Tag {
    *   /// Lorem ipsum dolor sit amet.
    *   consultancy  Consultancy
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Tag } from 'nexus-prisma'
    *
    * objectType({
    *   name: Tag.$name
    *   description: Tag.$description
    *   definition(t) {
    *     t.field(Tag.consultancy)
    *   }
    * })
    */
  consultancy: {
    /**
     * The name of this field.
     */
    name: 'consultancy'
  
    /**
     * The type of this field.
     */
    type: 'Consultancy' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Consultancy'>
    : 'Warning/Error: The type \'Consultancy\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Consultancy\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Tag', 'consultancy'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Tag.consultancyId`.
    *
    * ### ️⚠️ You have not writen documentation for model Tag
    *
    * Replace this default advisory JSDoc with your own documentation about model Tag
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Tag {
    *   /// Lorem ipsum dolor sit amet.
    *   consultancyId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Tag } from 'nexus-prisma'
    *
    * objectType({
    *   name: Tag.$name
    *   description: Tag.$description
    *   definition(t) {
    *     t.field(Tag.consultancyId)
    *   }
    * })
    */
  consultancyId: {
    /**
     * The name of this field.
     */
    name: 'consultancyId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Tag', 'consultancyId'>
  }
}

// Enums

/**
  * Generated Nexus `enumType` configuration based on your Prisma schema's enum `Role`.
  *
  * ### ️⚠️ You have not writen documentation for enum Role
  *
  * Replace this default advisory JSDoc with your own documentation about enum Role
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * enum Role {
  *   USER
  *   MODERATOR
  *   ADMIN
  *   SUPERADMIN
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * Contains these members: USER, MODERATOR, ADMIN, SUPERADMIN
  *
  * @example
  *
  * import { enumType } from 'nexus'
  * import { Role } from 'nexus-prisma'
  *
  * enumType(Role)
  */
export interface Role {
  name: 'Role'
  description: undefined
  members: ['USER', 'MODERATOR', 'ADMIN', 'SUPERADMIN']
}

/**
  * Generated Nexus `enumType` configuration based on your Prisma schema's enum `Field`.
  *
  * enum Field
  *
  * Contains these members: INCLUDE, EXCLUDE, REQUIRED
  *
  * @example
  *
  * import { enumType } from 'nexus'
  * import { Field } from 'nexus-prisma'
  *
  * enumType(Field)
  */
export interface Field {
  name: 'Field'
  description: string
  members: ['INCLUDE', 'EXCLUDE', 'REQUIRED']
}


//
//
// TERMS
// TERMS
// TERMS
// TERMS
//
//

//
//
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
//
//

export const Account: Account

export const Session: Session

export const User: User

export const VerificationToken: VerificationToken

export const Consultancy: Consultancy

export const Availability: Availability

export const Tag: Tag

//
//
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
//
//

export const Role: Role

export const Field: Field

//
//
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
//
//

import { Runtime } from 'nexus-prisma/dist-cjs/generator/runtime/settingsSingleton'

/**
 * Adjust Nexus Prisma's [runtime settings](https://pris.ly/nexus-prisma/docs/settings/runtime).
 *
 * @example
 *
 *     import { PrismaClient } from '@prisma/client'
 *     import { ApolloServer } from 'apollo-server'
 *     import { makeSchema } from 'nexus'
 *     import { User, Post, $settings } from 'nexus-prisma'
 *
 *     new ApolloServer({
 *       schema: makeSchema({
 *         types: [],
 *       }),
 *       context() {
 *         return {
 *           db: new PrismaClient(), // <-- You put Prisma client on the "db" context property
 *         }
 *       },
 *     })
 *
 *     $settings({
 *       prismaClientContextField: 'db', // <-- Tell Nexus Prisma
 *     })
 *
 * @remarks This is _different_ than Nexus Prisma's [_gentime_ settings](https://pris.ly/nexus-prisma/docs/settings/gentime).
 */
export const $settings: typeof Runtime.changeSettings
