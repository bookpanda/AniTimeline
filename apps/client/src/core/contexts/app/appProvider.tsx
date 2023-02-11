import { FC, PropsWithChildren, useState } from "react";

import { MediaListSort, useGetAnimeFromUserQuery } from "@anitimeline/codegen";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState("bookpanda");
  const [sort, setSort] = useState("SCORE_DESC");
  // const [loading, setLoading] = useState(true);
  const data = useGetAnimeFromUserQuery({
    variables: { username, sort: sort as MediaListSort },
  });
  return (
    <AppContext.Provider
      value={{
        username,
        sort,
        setUsername,
        setSort,
        // loading,
        // setLoading,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
