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

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getOneEvent?: Maybe<Event>;
  getOneUser?: Maybe<User>;
  getTip?: Maybe<Tip>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetOneEventArgs = {
  id: Scalars['String'];
};


export type QueryGetOneUserArgs = {
  id: Scalars['String'];
};


export type QueryGetTipArgs = {
  id: Scalars['String'];
};

export type Tip = {
  __typename?: 'Tip';
  id: Scalars['ID'];
};

/** this is User */
export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type GetOneUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetOneUserQuery = { __typename?: 'Query', getOneUser?: { __typename?: 'User', id: string } | null };


export const GetOneUserDocument = gql`
    query getOneUser($id: String!) {
  getOneUser(id: $id) {
    id
  }
}
    `;

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneUserQuery(baseOptions: Apollo.QueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
      }
export function useGetOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
        }
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<typeof useGetOneUserLazyQuery>;
export type GetOneUserQueryResult = Apollo.QueryResult<GetOneUserQuery, GetOneUserQueryVariables>;