import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** this is acccount */
export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  session_state?: Maybe<Scalars['String']>;
  user: User;
};

export type Consultancy = {
  __typename?: 'Consultancy';
  User: User;
  allow_age_check: Field;
  allow_email_check: Field;
  allow_enable_video_by_requester: Scalars['Boolean'];
  allow_expectations_check: Field;
  allow_expertise_in_problem_field_check: Field;
  allow_gender_check: Field;
  allow_name_surname: Field;
  allow_ongoing_support_check: Field;
  allow_previous_consultancy_experience_check: Field;
  allow_profession_check: Field;
  allow_time_spent_issue_resolution_check: Field;
  enable_video_by_provider: Scalars['Boolean'];
  id: Scalars['ID'];
  long_description?: Maybe<Scalars['String']>;
  max_attachment_count: Scalars['Int'];
  max_time_minuets: Scalars['Int'];
  short_description: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
};

export type ConsultancyDataType = {
  allow_age_check: Field;
  allow_email_check: Field;
  allow_enable_video_by_requester: Scalars['Boolean'];
  allow_expectations_check: Field;
  allow_expertise_in_problem_field_check: Field;
  allow_gender_check: Field;
  allow_name_surname: Field;
  allow_ongoing_support_check: Field;
  allow_previous_consultancy_experience_check: Field;
  allow_profession_check: Field;
  allow_time_spent_issue_resolution_check: Field;
  enable_video_by_provider: Scalars['Boolean'];
  long_description?: InputMaybe<Scalars['String']>;
  max_attachment_count: Scalars['Int'];
  max_time_minuets: Scalars['Int'];
  short_description: Scalars['String'];
  tags: Array<TagInputType>;
  title: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
};

/** Form fields types */
export enum Field {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE',
  Required = 'REQUIRED'
}

export type Mutation = {
  __typename?: 'Mutation';
  createConsultancy?: Maybe<Consultancy>;
  createUser: User;
};


export type MutationCreateConsultancyArgs = {
  data: ConsultancyDataType;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ok: Scalars['Boolean'];
};

/** User Roles */
export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

/** Tag */
export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
};

export type TagInputType = {
  name: Scalars['String'];
};

/** this is User */
export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role: Role;
};

export type CreateConsultancyMutationVariables = Exact<{
  title: Scalars['String'];
  short_description: Scalars['String'];
  long_description?: InputMaybe<Scalars['String']>;
  max_time_minuets: Scalars['Int'];
  max_attachment_count: Scalars['Int'];
  enable_video_by_provider: Scalars['Boolean'];
  allow_enable_video_by_requester: Scalars['Boolean'];
  allow_name_surname: Field;
  allow_profession_check: Field;
  allow_age_check: Field;
  allow_gender_check: Field;
  allow_previous_consultancy_experience_check: Field;
  allow_email_check: Field;
  allow_ongoing_support_check: Field;
  allow_expectations_check: Field;
  allow_time_spent_issue_resolution_check: Field;
  allow_expertise_in_problem_field_check: Field;
  tags: Array<TagInputType> | TagInputType;
}>;


export type CreateConsultancyMutation = { __typename?: 'Mutation', createConsultancy?: { __typename?: 'Consultancy', id: string, title: string } | null };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email?: string | null, id: string } };


export const CreateConsultancyDocument = gql`
    mutation CreateConsultancy($title: String!, $short_description: String!, $long_description: String, $max_time_minuets: Int!, $max_attachment_count: Int!, $enable_video_by_provider: Boolean!, $allow_enable_video_by_requester: Boolean!, $allow_name_surname: Field!, $allow_profession_check: Field!, $allow_age_check: Field!, $allow_gender_check: Field!, $allow_previous_consultancy_experience_check: Field!, $allow_email_check: Field!, $allow_ongoing_support_check: Field!, $allow_expectations_check: Field!, $allow_time_spent_issue_resolution_check: Field!, $allow_expertise_in_problem_field_check: Field!, $tags: [TagInputType!]!) {
  createConsultancy(
    data: {title: $title, short_description: $short_description, long_description: $long_description, max_time_minuets: $max_time_minuets, max_attachment_count: $max_attachment_count, enable_video_by_provider: $enable_video_by_provider, allow_enable_video_by_requester: $allow_enable_video_by_requester, allow_name_surname: $allow_name_surname, allow_profession_check: $allow_profession_check, allow_age_check: $allow_age_check, allow_gender_check: $allow_gender_check, allow_previous_consultancy_experience_check: $allow_previous_consultancy_experience_check, allow_email_check: $allow_email_check, allow_ongoing_support_check: $allow_ongoing_support_check, allow_expectations_check: $allow_expectations_check, allow_time_spent_issue_resolution_check: $allow_time_spent_issue_resolution_check, allow_expertise_in_problem_field_check: $allow_expertise_in_problem_field_check, tags: $tags}
  ) {
    id
    title
  }
}
    `;
export type CreateConsultancyMutationFn = Apollo.MutationFunction<CreateConsultancyMutation, CreateConsultancyMutationVariables>;

/**
 * __useCreateConsultancyMutation__
 *
 * To run a mutation, you first call `useCreateConsultancyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsultancyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsultancyMutation, { data, loading, error }] = useCreateConsultancyMutation({
 *   variables: {
 *      title: // value for 'title'
 *      short_description: // value for 'short_description'
 *      long_description: // value for 'long_description'
 *      max_time_minuets: // value for 'max_time_minuets'
 *      max_attachment_count: // value for 'max_attachment_count'
 *      enable_video_by_provider: // value for 'enable_video_by_provider'
 *      allow_enable_video_by_requester: // value for 'allow_enable_video_by_requester'
 *      allow_name_surname: // value for 'allow_name_surname'
 *      allow_profession_check: // value for 'allow_profession_check'
 *      allow_age_check: // value for 'allow_age_check'
 *      allow_gender_check: // value for 'allow_gender_check'
 *      allow_previous_consultancy_experience_check: // value for 'allow_previous_consultancy_experience_check'
 *      allow_email_check: // value for 'allow_email_check'
 *      allow_ongoing_support_check: // value for 'allow_ongoing_support_check'
 *      allow_expectations_check: // value for 'allow_expectations_check'
 *      allow_time_spent_issue_resolution_check: // value for 'allow_time_spent_issue_resolution_check'
 *      allow_expertise_in_problem_field_check: // value for 'allow_expertise_in_problem_field_check'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useCreateConsultancyMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsultancyMutation, CreateConsultancyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsultancyMutation, CreateConsultancyMutationVariables>(CreateConsultancyDocument, options);
      }
export type CreateConsultancyMutationHookResult = ReturnType<typeof useCreateConsultancyMutation>;
export type CreateConsultancyMutationResult = Apollo.MutationResult<CreateConsultancyMutation>;
export type CreateConsultancyMutationOptions = Apollo.BaseMutationOptions<CreateConsultancyMutation, CreateConsultancyMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!) {
  createUser(email: $email) {
    email
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;