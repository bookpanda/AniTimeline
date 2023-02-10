import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAnimeFromUserQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetAnimeFromUserQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, entries?: Array<{ __typename?: 'MediaList', score?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, characters?: { __typename?: 'CharacterConnection', nodes?: Array<{ __typename?: 'Character', image?: { __typename?: 'CharacterImage', medium?: string | null } | null } | null> | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null> | null } | null> | null } | null };

export type TestQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number } | null };


export const GetAnimeFromUserDocument = gql`
    query GetAnimeFromUser($username: String) {
  MediaListCollection(userName: $username, type: ANIME, sort: SCORE) {
    lists {
      name
      entries {
        startedAt {
          year
          month
          day
        }
        completedAt {
          year
          month
          day
        }
        score
        media {
          characters {
            nodes {
              image {
                medium
              }
            }
          }
          title {
            romaji
            english
            native
            userPreferred
          }
          id
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAnimeFromUserQuery__
 *
 * To run a query within a React component, call `useGetAnimeFromUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeFromUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeFromUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetAnimeFromUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeFromUserQuery, GetAnimeFromUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeFromUserQuery, GetAnimeFromUserQueryVariables>(GetAnimeFromUserDocument, options);
      }
export function useGetAnimeFromUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeFromUserQuery, GetAnimeFromUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeFromUserQuery, GetAnimeFromUserQueryVariables>(GetAnimeFromUserDocument, options);
        }
export type GetAnimeFromUserQueryHookResult = ReturnType<typeof useGetAnimeFromUserQuery>;
export type GetAnimeFromUserLazyQueryHookResult = ReturnType<typeof useGetAnimeFromUserLazyQuery>;
export type GetAnimeFromUserQueryResult = Apollo.QueryResult<GetAnimeFromUserQuery, GetAnimeFromUserQueryVariables>;
export const TestDocument = gql`
    query Test {
  Media(id: 1) {
    id
  }
}
    `;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestQuery(baseOptions?: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, options);
      }
export function useTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, options);
        }
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;