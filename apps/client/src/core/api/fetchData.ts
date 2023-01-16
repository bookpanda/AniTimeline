import { initState } from "./initState";
import { ICompleted, IData } from "./types";

export async function fetchData(username: string) {
  const query = `query($username: String) {
    MediaListCollection(userName: $username, type: ANIME) {
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
          media { 
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

  const variables = { username: username };

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
    const completed: ICompleted = dataLists[0];
    return completed;
  }

  async function handleError(error: Promise<object>) {
    console.error(error);
    return await initState;
  }
}
