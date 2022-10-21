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
  allow_name_surneame: Field;
  allow_ongoing_support_check: Field;
  allow_prefession_check: Field;
  allow_previous_consulancy_experience_check: Field;
  allow_time_spent_issue_resolution_check: Field;
  enable_video_by_provider: Scalars['Boolean'];
  id: Scalars['ID'];
  long_dscription?: Maybe<Scalars['String']>;
  max_attachment_count: Scalars['Int'];
  max_time_minuets: Scalars['Int'];
  short_description: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
};

/** User Roles */
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
  allow_age_check: Field;
  allow_email_check: Field;
  allow_enable_video_by_requester: Scalars['Boolean'];
  allow_expectations_check: Field;
  allow_expertise_in_problem_field_check: Field;
  allow_gender_check: Field;
  allow_name_surneame: Field;
  allow_ongoing_support_check: Field;
  allow_prefession_check: Field;
  allow_previous_consulancy_experience_check: Field;
  allow_time_spent_issue_resolution_check: Field;
  enable_video_by_provider: Scalars['Boolean'];
  long_dscription?: InputMaybe<Scalars['String']>;
  max_attachment_count: Scalars['Int'];
  max_time_minuets: Scalars['Int'];
  short_description: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
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

/** this is User */
export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role: Role;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email?: string | null, id: string } };


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