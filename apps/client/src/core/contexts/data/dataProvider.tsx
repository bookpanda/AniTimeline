import { FC, PropsWithChildren, useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

import { fetchData } from "$core/api/fetchData";
import { initState } from "$core/api/initState";
import { useAppContext } from "$core/contexts/app/appContext";

import { graphql } from "../../../gql";

import { DataContext } from "./dataContext";

const allAnimeQueryDocument = graphql(/* GraphQL */ `
  query ($username: String) {
    MediaListCollection(userName: $username, type: ANIME, sort: SCORE_DESC) {
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
`);
export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const variables = { username:"bookpanda" };
  const { data } = useQuery(allAnimeQueryDocument, { variables })

  const appContext = useAppContext();
  const { sort, username } = appContext;
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (username !== "") {
      enterData(username, sort);
    } else {
      setData(initState);
    }
  }, [sort]);
  const enterData = (username: string, sort: string) => {
    setLoading(true);
    fetchData(username, sort).then((data) => {
      setLoading(false);
      setData(data);
    });
  };
  return (
    <DataContext.Provider value={{ data, enterData, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};
