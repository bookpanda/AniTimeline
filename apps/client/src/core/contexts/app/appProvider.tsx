import { FC, PropsWithChildren, useState } from "react";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState("bookpanda");
  const [sort, setSort] = useState("SCORE_DESC");
  return (
    <AppContext.Provider value={{ username, sort, setUsername, setSort }}>
      {children}
    </AppContext.Provider>
  );
};
