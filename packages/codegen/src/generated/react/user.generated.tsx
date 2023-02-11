import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAnimeFromUserQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
  sort?: Types.InputMaybe<Array<Types.InputMaybe<Types.MediaListSort>> | Types.InputMaybe<Types.MediaListSort>>;
}>;


export type GetAnimeFromUserQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', name?: string | null, entries?: Array<{ __typename?: 'MediaList', score?: number | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, media?: { __typename?: 'Media', id: number, characters?: { __typename?: 'CharacterConnection', nodes?: Array<{ __typename?: 'Character', image?: { __typename?: 'CharacterImage', medium?: string | null } | null } | null> | null } | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null, medium?: string | null, color?: string | null } | null } | null } | null> | null } | null> | null } | null };


export const GetAnimeFromUserDocument = gql`
    query GetAnimeFromUser($username: String, $sort: [MediaListSort]) {
  MediaListCollection(userName: $username, type: ANIME, sort: $sort) {
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
 *      sort: // value for 'sort'
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