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
  Time: any;
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
  created_at?: Maybe<Scalars['Time']>;
  enable_video_by_provider: Scalars['Boolean'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  last_requested_at?: Maybe<Scalars['Time']>;
  long_description?: Maybe<Scalars['String']>;
  max_attachment_count: Scalars['Int'];
  max_time_minuets: Scalars['Int'];
  short_description: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
};

export type ConsultancyById = {
  __typename?: 'ConsultancyById';
  data: Consultancy;
  id: Scalars['Int'];
};

export type ConsultancyConnection = {
  __typename?: 'ConsultancyConnection';
  edges?: Maybe<Array<Maybe<ConsultancyEdge>>>;
  pageInfo?: Maybe<PageInfo>;
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
  created_at?: InputMaybe<Scalars['Time']>;
  enable_video_by_provider: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  long_description?: InputMaybe<Scalars['String']>;
  max_attachment_count: Scalars['Int'];
  max_time_minuets: Scalars['Int'];
  short_description: Scalars['String'];
  tags: Array<TagInputType>;
  title: Scalars['String'];
};

export type ConsultancyEdge = {
  __typename?: 'ConsultancyEdge';
  cursor?: Maybe<Scalars['Int']>;
  node?: Maybe<Consultancy>;
};

export type ConsultancyPaginationInput = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit: Scalars['Int'];
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
  deleteConsultancy?: Maybe<Consultancy>;
  updateConsultancy?: Maybe<Consultancy>;
};


export type MutationCreateConsultancyArgs = {
  data: ConsultancyDataType;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
};


export type MutationDeleteConsultancyArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateConsultancyArgs = {
  data: ConsultancyDataType;
  id: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  consultancies?: Maybe<ConsultancyConnection>;
  getConsultancyById?: Maybe<ConsultancyById>;
  getMyConsultancies?: Maybe<Array<Maybe<Consultancy>>>;
  totalConsultancies?: Maybe<TotalConsultanciesObject>;
};


export type QueryConsultanciesArgs = {
  pagination?: InputMaybe<ConsultancyPaginationInput>;
};


export type QueryGetConsultancyByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetMyConsultanciesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
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
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TagInputType = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TotalConsultanciesObject = {
  __typename?: 'TotalConsultanciesObject';
  total?: Maybe<Scalars['Int']>;
};

/** this is User */
export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  role: Role;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email?: string | null, id: string } };

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
  isActive: Scalars['Boolean'];
  tags: Array<TagInputType> | TagInputType;
}>;


export type CreateConsultancyMutation = { __typename?: 'Mutation', createConsultancy?: { __typename?: 'Consultancy', id: number, title: string } | null };

export type DeleteConsultancyMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteConsultancyMutation = { __typename?: 'Mutation', deleteConsultancy?: { __typename?: 'Consultancy', id: number, title: string, created_at?: any | null, short_description: string, isActive: boolean } | null };

export type ConsultanciesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['Int']>;
  limit: Scalars['Int'];
}>;


export type ConsultanciesQuery = { __typename?: 'Query', consultancies?: { __typename?: 'ConsultancyConnection', pageInfo?: { __typename?: 'PageInfo', hasNextPage?: number | null, endCursor?: number | null } | null, edges?: Array<{ __typename?: 'ConsultancyEdge', node?: { __typename?: 'Consultancy', id: number, title: string, short_description: string, long_description?: string | null, max_time_minuets: number, created_at?: any | null, User: { __typename?: 'User', name?: string | null }, tags: Array<{ __typename?: 'Tag', id: number, name: string }> } | null } | null> | null } | null };

export type GetConsultancyByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetConsultancyByIdQuery = { __typename?: 'Query', getConsultancyById?: { __typename?: 'ConsultancyById', id: number, data: { __typename?: 'Consultancy', title: string, short_description: string, long_description?: string | null, isActive: boolean, max_time_minuets: number, max_attachment_count: number, allow_age_check: Field, allow_email_check: Field, allow_gender_check: Field, allow_name_surname: Field, allow_profession_check: Field, allow_expectations_check: Field, allow_ongoing_support_check: Field, allow_enable_video_by_requester: boolean, allow_expertise_in_problem_field_check: Field, allow_previous_consultancy_experience_check: Field, allow_time_spent_issue_resolution_check: Field, enable_video_by_provider: boolean, tags: Array<{ __typename?: 'Tag', name: string, id: number }> } } | null };

export type GetMyConsultanciesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GetMyConsultanciesQuery = { __typename?: 'Query', getMyConsultancies?: Array<{ __typename?: 'Consultancy', id: number, title: string, created_at?: any | null, short_description: string, isActive: boolean, tags: Array<{ __typename?: 'Tag', name: string }> } | null> | null };

export type TotalConsultanciesQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalConsultanciesQuery = { __typename?: 'Query', totalConsultancies?: { __typename?: 'TotalConsultanciesObject', total?: number | null } | null };

export type UpdateConsultancyMutationVariables = Exact<{
  id: Scalars['Int'];
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
  isActive: Scalars['Boolean'];
  tags: Array<TagInputType> | TagInputType;
}>;


export type UpdateConsultancyMutation = { __typename?: 'Mutation', updateConsultancy?: { __typename?: 'Consultancy', id: number, title: string } | null };


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
export const CreateConsultancyDocument = gql`
    mutation CreateConsultancy($title: String!, $short_description: String!, $long_description: String, $max_time_minuets: Int!, $max_attachment_count: Int!, $enable_video_by_provider: Boolean!, $allow_enable_video_by_requester: Boolean!, $allow_name_surname: Field!, $allow_profession_check: Field!, $allow_age_check: Field!, $allow_gender_check: Field!, $allow_previous_consultancy_experience_check: Field!, $allow_email_check: Field!, $allow_ongoing_support_check: Field!, $allow_expectations_check: Field!, $allow_time_spent_issue_resolution_check: Field!, $allow_expertise_in_problem_field_check: Field!, $isActive: Boolean!, $tags: [TagInputType!]!) {
  createConsultancy(
    data: {title: $title, short_description: $short_description, long_description: $long_description, max_time_minuets: $max_time_minuets, max_attachment_count: $max_attachment_count, enable_video_by_provider: $enable_video_by_provider, allow_enable_video_by_requester: $allow_enable_video_by_requester, allow_name_surname: $allow_name_surname, allow_profession_check: $allow_profession_check, allow_age_check: $allow_age_check, allow_gender_check: $allow_gender_check, allow_previous_consultancy_experience_check: $allow_previous_consultancy_experience_check, allow_email_check: $allow_email_check, isActive: $isActive, allow_ongoing_support_check: $allow_ongoing_support_check, allow_expectations_check: $allow_expectations_check, allow_time_spent_issue_resolution_check: $allow_time_spent_issue_resolution_check, allow_expertise_in_problem_field_check: $allow_expertise_in_problem_field_check, tags: $tags}
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
 *      isActive: // value for 'isActive'
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
export const DeleteConsultancyDocument = gql`
    mutation DeleteConsultancy($id: Int!) {
  deleteConsultancy(id: $id) {
    id
    title
    created_at
    short_description
    isActive
  }
}
    `;
export type DeleteConsultancyMutationFn = Apollo.MutationFunction<DeleteConsultancyMutation, DeleteConsultancyMutationVariables>;

/**
 * __useDeleteConsultancyMutation__
 *
 * To run a mutation, you first call `useDeleteConsultancyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsultancyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsultancyMutation, { data, loading, error }] = useDeleteConsultancyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteConsultancyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsultancyMutation, DeleteConsultancyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsultancyMutation, DeleteConsultancyMutationVariables>(DeleteConsultancyDocument, options);
      }
export type DeleteConsultancyMutationHookResult = ReturnType<typeof useDeleteConsultancyMutation>;
export type DeleteConsultancyMutationResult = Apollo.MutationResult<DeleteConsultancyMutation>;
export type DeleteConsultancyMutationOptions = Apollo.BaseMutationOptions<DeleteConsultancyMutation, DeleteConsultancyMutationVariables>;
export const ConsultanciesDocument = gql`
    query consultancies($cursor: Int, $limit: Int!) {
  consultancies(pagination: {cursor: $cursor, limit: $limit}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        title
        short_description
        long_description
        max_time_minuets
        created_at
        User {
          name
        }
        tags {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useConsultanciesQuery__
 *
 * To run a query within a React component, call `useConsultanciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultanciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultanciesQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useConsultanciesQuery(baseOptions: Apollo.QueryHookOptions<ConsultanciesQuery, ConsultanciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsultanciesQuery, ConsultanciesQueryVariables>(ConsultanciesDocument, options);
      }
export function useConsultanciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsultanciesQuery, ConsultanciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsultanciesQuery, ConsultanciesQueryVariables>(ConsultanciesDocument, options);
        }
export type ConsultanciesQueryHookResult = ReturnType<typeof useConsultanciesQuery>;
export type ConsultanciesLazyQueryHookResult = ReturnType<typeof useConsultanciesLazyQuery>;
export type ConsultanciesQueryResult = Apollo.QueryResult<ConsultanciesQuery, ConsultanciesQueryVariables>;
export const GetConsultancyByIdDocument = gql`
    query GetConsultancyById($id: Int!) {
  getConsultancyById(id: $id) {
    id
    data {
      title
      short_description
      long_description
      isActive
      max_time_minuets
      max_attachment_count
      allow_age_check
      allow_email_check
      allow_gender_check
      allow_name_surname
      allow_profession_check
      allow_expectations_check
      allow_ongoing_support_check
      allow_enable_video_by_requester
      allow_expertise_in_problem_field_check
      allow_previous_consultancy_experience_check
      allow_time_spent_issue_resolution_check
      enable_video_by_provider
      tags {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useGetConsultancyByIdQuery__
 *
 * To run a query within a React component, call `useGetConsultancyByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultancyByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultancyByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetConsultancyByIdQuery(baseOptions: Apollo.QueryHookOptions<GetConsultancyByIdQuery, GetConsultancyByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConsultancyByIdQuery, GetConsultancyByIdQueryVariables>(GetConsultancyByIdDocument, options);
      }
export function useGetConsultancyByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConsultancyByIdQuery, GetConsultancyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConsultancyByIdQuery, GetConsultancyByIdQueryVariables>(GetConsultancyByIdDocument, options);
        }
export type GetConsultancyByIdQueryHookResult = ReturnType<typeof useGetConsultancyByIdQuery>;
export type GetConsultancyByIdLazyQueryHookResult = ReturnType<typeof useGetConsultancyByIdLazyQuery>;
export type GetConsultancyByIdQueryResult = Apollo.QueryResult<GetConsultancyByIdQuery, GetConsultancyByIdQueryVariables>;
export const GetMyConsultanciesDocument = gql`
    query GetMyConsultancies($limit: Int!, $offset: Int!) {
  getMyConsultancies(offset: $offset, limit: $limit) {
    id
    title
    created_at
    tags {
      name
    }
    short_description
    isActive
  }
}
    `;

/**
 * __useGetMyConsultanciesQuery__
 *
 * To run a query within a React component, call `useGetMyConsultanciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyConsultanciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyConsultanciesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetMyConsultanciesQuery(baseOptions: Apollo.QueryHookOptions<GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables>(GetMyConsultanciesDocument, options);
      }
export function useGetMyConsultanciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables>(GetMyConsultanciesDocument, options);
        }
export type GetMyConsultanciesQueryHookResult = ReturnType<typeof useGetMyConsultanciesQuery>;
export type GetMyConsultanciesLazyQueryHookResult = ReturnType<typeof useGetMyConsultanciesLazyQuery>;
export type GetMyConsultanciesQueryResult = Apollo.QueryResult<GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables>;
export const TotalConsultanciesDocument = gql`
    query TotalConsultancies {
  totalConsultancies {
    total
  }
}
    `;

/**
 * __useTotalConsultanciesQuery__
 *
 * To run a query within a React component, call `useTotalConsultanciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalConsultanciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalConsultanciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalConsultanciesQuery(baseOptions?: Apollo.QueryHookOptions<TotalConsultanciesQuery, TotalConsultanciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalConsultanciesQuery, TotalConsultanciesQueryVariables>(TotalConsultanciesDocument, options);
      }
export function useTotalConsultanciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalConsultanciesQuery, TotalConsultanciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalConsultanciesQuery, TotalConsultanciesQueryVariables>(TotalConsultanciesDocument, options);
        }
export type TotalConsultanciesQueryHookResult = ReturnType<typeof useTotalConsultanciesQuery>;
export type TotalConsultanciesLazyQueryHookResult = ReturnType<typeof useTotalConsultanciesLazyQuery>;
export type TotalConsultanciesQueryResult = Apollo.QueryResult<TotalConsultanciesQuery, TotalConsultanciesQueryVariables>;
export const UpdateConsultancyDocument = gql`
    mutation UpdateConsultancy($id: Int!, $title: String!, $short_description: String!, $long_description: String, $max_time_minuets: Int!, $max_attachment_count: Int!, $enable_video_by_provider: Boolean!, $allow_enable_video_by_requester: Boolean!, $allow_name_surname: Field!, $allow_profession_check: Field!, $allow_age_check: Field!, $allow_gender_check: Field!, $allow_previous_consultancy_experience_check: Field!, $allow_email_check: Field!, $allow_ongoing_support_check: Field!, $allow_expectations_check: Field!, $allow_time_spent_issue_resolution_check: Field!, $allow_expertise_in_problem_field_check: Field!, $isActive: Boolean!, $tags: [TagInputType!]!) {
  updateConsultancy(
    id: $id
    data: {title: $title, short_description: $short_description, long_description: $long_description, max_time_minuets: $max_time_minuets, max_attachment_count: $max_attachment_count, enable_video_by_provider: $enable_video_by_provider, allow_enable_video_by_requester: $allow_enable_video_by_requester, allow_name_surname: $allow_name_surname, allow_profession_check: $allow_profession_check, allow_age_check: $allow_age_check, allow_gender_check: $allow_gender_check, allow_previous_consultancy_experience_check: $allow_previous_consultancy_experience_check, allow_email_check: $allow_email_check, isActive: $isActive, allow_ongoing_support_check: $allow_ongoing_support_check, allow_expectations_check: $allow_expectations_check, allow_time_spent_issue_resolution_check: $allow_time_spent_issue_resolution_check, allow_expertise_in_problem_field_check: $allow_expertise_in_problem_field_check, tags: $tags}
  ) {
    id
    title
  }
}
    `;
export type UpdateConsultancyMutationFn = Apollo.MutationFunction<UpdateConsultancyMutation, UpdateConsultancyMutationVariables>;

/**
 * __useUpdateConsultancyMutation__
 *
 * To run a mutation, you first call `useUpdateConsultancyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsultancyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsultancyMutation, { data, loading, error }] = useUpdateConsultancyMutation({
 *   variables: {
 *      id: // value for 'id'
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
 *      isActive: // value for 'isActive'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useUpdateConsultancyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsultancyMutation, UpdateConsultancyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsultancyMutation, UpdateConsultancyMutationVariables>(UpdateConsultancyDocument, options);
      }
export type UpdateConsultancyMutationHookResult = ReturnType<typeof useUpdateConsultancyMutation>;
export type UpdateConsultancyMutationResult = Apollo.MutationResult<UpdateConsultancyMutation>;
export type UpdateConsultancyMutationOptions = Apollo.BaseMutationOptions<UpdateConsultancyMutation, UpdateConsultancyMutationVariables>;