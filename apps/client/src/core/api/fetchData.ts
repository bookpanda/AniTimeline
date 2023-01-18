import { initState } from "./initState";
import { ICompleted, IData } from "./types";

enum SortType {
  STARTED_ON,
}

export async function fetchData(username: string, sort = SortType.STARTED_ON) {
  const query = `query($username: String) {
    MediaListCollection(userName: $username, type: ANIME, sort: STARTED_ON) {
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
  }`;

  const variables = { username, sort: sort };

  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  // Make the HTTP Api request
  return await fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
  // .then((response) => response.json());

  function handleResponse(response: Response) {
    return response.json().then(function (json) {
      return response.ok ? Promise.resolve(json) : Promise.reject(json);
    });
  }

  function handleData(data: IData) {
    const dataLists = data.data.MediaListCollection.lists;
    console.log(dataLists);

    const completed: ICompleted = dataLists[1];
    return completed;
  }

  async function handleError(error: Promise<object>) {
    console.error(error);
    return await initState;
  }
}
