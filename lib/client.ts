import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities/policies/pagination';


type MyApolloCache = any;
let apolloClient: ApolloClient<MyApolloCache> | undefined;

function createIsomorphLink() {
  if (typeof window === 'undefined') {
   const {prisma} =require("./prisma")
    const { SchemaLink } = require('@apollo/client/link/schema')
    const { schema } = require("./schema")
    return new SchemaLink({ schema, context: { prisma } });
  } else {
    const { HttpLink } = require('@apollo/client/link/http');
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    });
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache
  });
}

export function initializeApollo(initialState: MyApolloCache | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: MyApolloCache) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getMyConsultancies: {
          ...offsetLimitPagination(),
          // The keyArgs list and merge function are the same as above.
          read(existing, { args: { offset, limit }}:{args: any}) {
            console.log(offset, limit, 'rrrr')
            //return existing
            return existing && existing.slice(offset, offset + limit);
          },
          keyArgs: ['id'],
          merge(existing, incoming, { args: { offset = 0 }}:{args:any}) {
            if (!incoming && existing) {
              return existing;
            }
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            return merged;
          },
        },
      },
    },
  }});